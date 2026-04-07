import { RouterProvider } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { router } from './router.tsx';
import { ThemeProvider } from '../context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion='user'>
        <RouterProvider router={router} />
        <Analytics />
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
