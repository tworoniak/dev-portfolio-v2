import { useEffect, useRef } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import { clampPercent, cursorToPastelRgb } from '../utils/color';

export const useCardGlow = () => {
  const cardRef = useRef<HTMLElement | null>(null);
  const hoveredRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const xPcRef = useRef(50);
  const yPcRef = useRef(50);

  useEffect(() => {
    const animate = () => {
      if (cardRef.current && hoveredRef.current) {
        const t = performance.now() / 1000;

        const animatedXPc = clampPercent(xPcRef.current + Math.sin(t * 1.1) * 18);
        const animatedYPc = clampPercent(yPcRef.current + Math.cos(t * 0.8) * 16);

        const { r, g, b } = cursorToPastelRgb(animatedXPc, animatedYPc);

        cardRef.current.style.borderColor = `rgb(${r} ${g} ${b} / 70%)`;
        cardRef.current.style.boxShadow = `
          0 0 0 1px rgb(${r} ${g} ${b} / 18%),
          0 10px 30px rgb(${r} ${g} ${b} / 8%)
        `;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (e: ReactMouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    xPcRef.current = ((e.clientX - rect.left) / rect.width) * 100;
    yPcRef.current = ((e.clientY - rect.top) / rect.height) * 100;
  };

  const handleMouseEnter = () => {
    hoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    hoveredRef.current = false;
    if (cardRef.current) {
      cardRef.current.style.borderColor = '';
      cardRef.current.style.boxShadow = '';
    }
  };

  return { cardRef, handleMouseMove, handleMouseEnter, handleMouseLeave };
};
