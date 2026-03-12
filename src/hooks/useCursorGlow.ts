import { useEffect, useRef, useState } from 'react';

type CursorGlowState = {
  xPc: number;
  yPc: number;
  time: number;
};

export function useCursorGlow() {
  const frameRef = useRef<number | null>(null);
  const currentXPcRef = useRef(50);
  const currentYPcRef = useRef(50);

  const [state, setState] = useState<CursorGlowState>({
    xPc: 50,
    yPc: 50,
    time: 0,
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      currentXPcRef.current = (e.clientX / window.innerWidth) * 100;
      currentYPcRef.current = (e.clientY / window.innerHeight) * 100;
    };

    const animate = () => {
      setState({
        xPc: currentXPcRef.current,
        yPc: currentYPcRef.current,
        time: performance.now() / 1000,
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return state;
}
