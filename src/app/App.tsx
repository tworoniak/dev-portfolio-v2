import { RouterProvider } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { router } from './router.tsx';
import { ThemeProvider } from '../context/ThemeContext';
import { GradientCoordsProvider } from '../context/GradientCoordsContext';

function App() {
  return (
    <ThemeProvider>
      <GradientCoordsProvider>
        <MotionConfig reducedMotion='user'>
          <RouterProvider router={router} />
          <Analytics />
        </MotionConfig>
      </GradientCoordsProvider>
    </ThemeProvider>
  );
}

export default App;
