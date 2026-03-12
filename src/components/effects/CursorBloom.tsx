import { useEffect, useRef } from 'react';
import { cv } from '../../utils/color';

const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

const CursorBloom = () => {
  const elRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const targetXRef = useRef(0);
  const targetYRef = useRef(0);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

    if (isCoarsePointer) return;

    targetXRef.current = window.innerWidth / 2;
    targetYRef.current = window.innerHeight / 2;
    xRef.current = targetXRef.current;
    yRef.current = targetYRef.current;

    const handleMove = (e: MouseEvent) => {
      targetXRef.current = e.clientX;
      targetYRef.current = e.clientY;
    };

    const animate = () => {
      const el = elRef.current;
      if (!el) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      xRef.current = lerp(xRef.current, targetXRef.current, 0.06);
      yRef.current = lerp(yRef.current, targetYRef.current, 0.06);

      const xPc = Math.min(100, (xRef.current / window.innerWidth) * 100);
      const yPc = Math.min(100, (yRef.current / window.innerHeight) * 100);

      const r = cv(xPc);
      const g = cv(yPc);
      const b = 255 - r;

      el.style.transform = `translate(${xRef.current - 175}px, ${yRef.current - 175}px)`;
      el.style.background = `radial-gradient(circle, rgb(${r} ${g} ${b} / 0.1) 0%, transparent 70%)`;

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

  return (
    <div
      ref={elRef}
      aria-hidden='true'
      className='pointer-events-none fixed left-0 top-0 -z-[1] h-[300px] w-[300px] rounded-full blur-[50px]'
    />
  );
};

export default CursorBloom;
