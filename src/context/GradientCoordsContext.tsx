import { createContext, useContext, useEffect, useRef, useState } from 'react';

const SCROLL_TIMEOUT_MS = 1500;
const SCROLL_LERP = 0.08;
const BLEND_TO_SCROLL = 0.06;
const BLEND_TO_CURSOR = 0.10;

export type GradientCoords = {
  xPc: number;
  yPc: number;
  time: number;
};

const GradientCoordsContext = createContext<GradientCoords>({
  xPc: 50,
  yPc: 50,
  time: 0,
});

const lerp = (current: number, target: number, factor: number) =>
  current + (target - current) * factor;

export function GradientCoordsProvider({ children }: { children: React.ReactNode }) {
  const frameRef = useRef<number | null>(null);

  const cursorXRef = useRef(50);
  const cursorYRef = useRef(50);

  const scrollTargetXRef = useRef(50);
  const scrollTargetYRef = useRef(50);
  const scrollCurrentXRef = useRef(50);
  const scrollCurrentYRef = useRef(50);

  const isScrollingRef = useRef(false);
  const lastScrollTimeRef = useRef(0);

  const blendFactorRef = useRef(1);

  const [coords, setCoords] = useState<GradientCoords>({ xPc: 50, yPc: 50, time: 0 });

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
        SCROLL_LERP,
      );
      scrollCurrentYRef.current = lerp(
        scrollCurrentYRef.current,
        scrollTargetYRef.current,
        SCROLL_LERP,
      );

      const isScrollActive =
        isScrollingRef.current &&
        Date.now() - lastScrollTimeRef.current < SCROLL_TIMEOUT_MS;

      if (!isScrollActive) isScrollingRef.current = false;

      const blendTarget = isScrollActive ? 0 : 1;
      const blendRate = isScrollActive ? BLEND_TO_SCROLL : BLEND_TO_CURSOR;
      blendFactorRef.current = lerp(blendFactorRef.current, blendTarget, blendRate);

      const blend = blendFactorRef.current;
      const xPc = lerp(scrollCurrentXRef.current, cursorXRef.current, blend);
      const yPc = lerp(scrollCurrentYRef.current, cursorYRef.current, blend);

      setCoords({ xPc, yPc, time: performance.now() / 1000 });

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

  return (
    <GradientCoordsContext.Provider value={coords}>
      {children}
    </GradientCoordsContext.Provider>
  );
}

export function useGradientCoordsContext(): GradientCoords {
  return useContext(GradientCoordsContext);
}
