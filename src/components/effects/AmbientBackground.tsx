import { useEffect, useRef } from 'react';
import { getRawCoords } from '../../context/GradientCoordsContext';
import { createAmbientBackground } from '../../utils/gradient';
import { useTheme } from '../../context/ThemeContext';

const AmbientBackground = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const layerRef = useRef<HTMLDivElement>(null);
  const isDarkRef = useRef(isDark);

  // Keep the ref in sync without re-running the RAF effect on every theme change
  useEffect(() => { isDarkRef.current = isDark; }, [isDark]);

  useEffect(() => {
    let frameId: number;
    const animate = () => {
      const { xPc, yPc } = getRawCoords();
      const t = performance.now() / 1000;
      if (layerRef.current) {
        layerRef.current.style.background = createAmbientBackground(xPc, yPc, t, isDarkRef.current);
      }
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const staticOpacity = isDark
    ? { o1: 0.12, o2: 0.1, o3: 0.08 }
    : { o1: 0.3, o2: 0.42, o3: 0.15 };

  return (
    <>
      <div className='pointer-events-none fixed inset-0 -z-30 bg-white dark:bg-black transition-colors duration-300' />

      <div
        className='pointer-events-none fixed inset-0 -z-20 blur-[120px]'
        style={{
          background: `
            radial-gradient(circle at 15% 20%, rgba(255, 80, 180, ${staticOpacity.o1}), transparent 45%),
            radial-gradient(circle at 85% 10%, rgba(120, 80, 255, ${staticOpacity.o2}), transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(80, 200, 255, ${staticOpacity.o3}), transparent 55%)
          `,
        }}
      />

      <div
        ref={layerRef}
        className='pointer-events-none fixed inset-0 -z-10 blur-[120px]'
      />
    </>
  );
};

export default AmbientBackground;
