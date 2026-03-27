import { useEffect, useRef, useState } from 'react';

const LERP_FACTOR = 0.08;

type ScrollGradientState = {
  xPc: number;
  yPc: number;
};

const lerp = (current: number, target: number, factor: number) =>
  current + (target - current) * factor;

export function useScrollGradient() {
  const frameRef = useRef<number | null>(null);
  const targetXRef = useRef(50);
  const targetYRef = useRef(50);
  const currentXRef = useRef(50);
  const currentYRef = useRef(50);

  const [state, setState] = useState<ScrollGradientState>({
    xPc: 50,
    yPc: 50,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrollable = scrollHeight - clientHeight;

      if (scrollable <= 0) return;

      const scrollPercent = (scrollTop / scrollable) * 100;
      const t = (scrollPercent / 100) * Math.PI;

      const wave1 = Math.sin(t * 6) * 50 + 50;
      const wave2 = Math.cos(t * 4) * 30;

      targetYRef.current = Math.max(0, Math.min(100, wave1 + wave2));
      targetXRef.current = Math.sin(t * 2) * 25 + 50;
    };

    const animate = () => {
      currentXRef.current = lerp(currentXRef.current, targetXRef.current, LERP_FACTOR);
      currentYRef.current = lerp(currentYRef.current, targetYRef.current, LERP_FACTOR);

      setState({
        xPc: currentXRef.current,
        yPc: currentYRef.current,
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return state;
}
