import { useEffect, useRef, useState } from 'react';

type PointerState = {
  x: number;
  y: number;
  r: number;
  g: number;
  b: number;
};

const clampToRgb = (n: number) => Math.min(255, Math.floor((255 / 100) * n));

export default function CursorGlowBackground() {
  const frameRef = useRef<number | null>(null);

  const latestRef = useRef({
    x: 50,
    y: 50,
  });

  const [state, setState] = useState<PointerState>({
    x: 50,
    y: 50,
    r: 120,
    g: 80,
    b: 200,
  });

  useEffect(() => {
    const update = () => {
      const xPc = latestRef.current.x;
      const yPc = latestRef.current.y;

      const r = clampToRgb(xPc);
      const g = clampToRgb(yPc);
      const b = 255 - r;

      setState({
        x: xPc,
        y: yPc,
        r,
        g,
        b,
      });

      frameRef.current = null;
    };

    const handleMove = (e: MouseEvent) => {
      latestRef.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };

      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('mousemove', handleMove);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      className='pointer-events-none fixed inset-0 -z-10'
      style={{
        background: `
          radial-gradient(
            700px circle at ${state.x}% ${state.y}%,
            rgba(${state.r}, ${state.g}, ${state.b}, 0.18),
            transparent 40%
          ),
          radial-gradient(
            900px circle at top,
            rgba(${state.r}, ${state.g}, ${state.b}, 0.10),
            transparent 35%
          ),
          #000
        `,
      }}
    />
  );
}
