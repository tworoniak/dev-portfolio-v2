import { RouterProvider } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { router } from './router.tsx';

function App() {
  return (
    <MotionConfig reducedMotion='user'>
      <RouterProvider router={router} />
      <Analytics />
    </MotionConfig>
  );
}

export default App;
