import { useMemo, useEffect, useRef } from 'react';
import { useCursorGlow } from '../../hooks/useCursorGlow';
import { useScrollGradient } from '../../hooks/useScrollGradient';
import { createAmbientBackground } from '../../utils/gradient';

// How long after scrolling stops before the cursor retakes control (ms)
const SCROLL_TIMEOUT_MS = 1500;

const AmbientBackground = () => {
  const cursor = useCursorGlow();
  const scroll = useScrollGradient();

  const isScrollingRef = useRef(false);
  const lastScrollTimeRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      isScrollingRef.current = true;
      lastScrollTimeRef.current = Date.now();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrollActive =
    isScrollingRef.current &&
    Date.now() - lastScrollTimeRef.current < SCROLL_TIMEOUT_MS;

  if (!isScrollActive) {
    isScrollingRef.current = false;
  }

  const xPc = isScrollActive ? scroll.xPc : cursor.xPc;
  const yPc = isScrollActive ? scroll.yPc : cursor.yPc;

  const animatedBackground = useMemo(() => {
    return createAmbientBackground(xPc, yPc, cursor.time);
  }, [xPc, yPc, cursor.time]);

  return (
    <>
      <div className='pointer-events-none fixed inset-0 -z-30 bg-black' />

      <div
        className='pointer-events-none fixed inset-0 -z-20 blur-[120px]'
        style={{
          background: `
            radial-gradient(circle at 15% 20%, rgba(255, 80, 180, 0.12), transparent 45%),
            radial-gradient(circle at 85% 10%, rgba(120, 80, 255, 0.10), transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(80, 200, 255, 0.08), transparent 55%)
          `,
        }}
      />

      <div
        className='pointer-events-none fixed inset-0 -z-10 blur-[120px]'
        style={{ background: animatedBackground }}
      />
    </>
  );
};

export default AmbientBackground;
