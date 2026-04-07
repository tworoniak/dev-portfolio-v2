import { useMemo } from 'react';
import { useGradientCoords } from '../../hooks/useGradientCoords';
import { createAmbientBackground } from '../../utils/gradient';
import { useTheme } from '../../context/ThemeContext';

const AmbientBackground = () => {
  const { xPc, yPc, time } = useGradientCoords();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const animatedBackground = useMemo(() => {
    return createAmbientBackground(xPc, yPc, time, isDark);
  }, [xPc, yPc, time, isDark]);

  const staticOpacity = isDark
    ? { o1: 0.12, o2: 0.10, o3: 0.08 }
    : { o1: 0.30, o2: 0.22, o3: 0.15 };

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
        className='pointer-events-none fixed inset-0 -z-10 blur-[120px]'
        style={{ background: animatedBackground }}
      />
    </>
  );
};

export default AmbientBackground;
