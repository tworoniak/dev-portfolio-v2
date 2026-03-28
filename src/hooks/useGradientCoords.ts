import { useEffect, useRef, useState } from 'react';

// How long after scrolling stops before the cursor retakes control (ms)
const SCROLL_TIMEOUT_MS = 1500;
const LERP_FACTOR = 0.08;

type GradientCoords = {
  xPc: number;
  yPc: number;
  time: number;
};

const lerp = (current: number, target: number, factor: number) =>
  current + (target - current) * factor;

export function useGradientCoords() {
  const frameRef = useRef<number | null>(null);

  // Cursor
  const cursorXRef = useRef(50);
  const cursorYRef = useRef(50);

  // Scroll lerp
  const scrollTargetXRef = useRef(50);
  const scrollTargetYRef = useRef(50);
  const scrollCurrentXRef = useRef(50);
  const scrollCurrentYRef = useRef(50);

  // Conflict resolution
  const isScrollingRef = useRef(false);
  const lastScrollTimeRef = useRef(0);

  const [state, setState] = useState<GradientCoords>({
    xPc: 50,
    yPc: 50,
    time: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorXRef.current = (e.clientX / window.innerWidth) * 100;
      cursorYRef.current = (e.clientY / window.innerHeight) * 100;
    };

    const handleScroll = () => {
      isScrollingRef.current = true;
      lastScrollTimeRef.current = Date.now();

      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const scrollPercent = (window.scrollY / scrollable) * 100;
      const t = (scrollPercent / 100) * Math.PI;

      const wave1 = Math.sin(t * 6) * 50 + 50;
      const wave2 = Math.cos(t * 4) * 30;

      scrollTargetYRef.current = Math.max(0, Math.min(100, wave1 + wave2));
      scrollTargetXRef.current = Math.sin(t * 2) * 25 + 50;
    };

    const animate = () => {
      scrollCurrentXRef.current = lerp(
        scrollCurrentXRef.current,
        scrollTargetXRef.current,
        LERP_FACTOR,
      );
      scrollCurrentYRef.current = lerp(
        scrollCurrentYRef.current,
        scrollTargetYRef.current,
        LERP_FACTOR,
      );

      const isScrollActive =
        isScrollingRef.current &&
        Date.now() - lastScrollTimeRef.current < SCROLL_TIMEOUT_MS;

      if (!isScrollActive) isScrollingRef.current = false;

      const xPc = isScrollActive
        ? scrollCurrentXRef.current
        : cursorXRef.current;
      const yPc = isScrollActive
        ? scrollCurrentYRef.current
        : cursorYRef.current;

      setState({ xPc, yPc, time: performance.now() / 1000 });

      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return state;
}
