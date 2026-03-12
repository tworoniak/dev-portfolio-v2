import { useMemo } from 'react';
import { useCursorGlow } from '../../hooks/useCursorGlow';
import { createAmbientBackground } from '../../utils/gradient';

const AmbientBackground = () => {
  const { xPc, yPc, time } = useCursorGlow();

  const animatedBackground = useMemo(() => {
    return createAmbientBackground(xPc, yPc, time);
  }, [xPc, yPc, time]);

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
