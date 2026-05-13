import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';

const HomePage = lazy(() => import('../pages/HomePage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('../pages/ProjectDetailPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Suspense fallback={<div className='min-h-screen' />}><HomePage /></Suspense> },
      { path: '/projects', element: <Suspense fallback={<div className='min-h-screen' />}><ProjectsPage /></Suspense> },
      { path: '/projects/:slug', element: <Suspense fallback={<div className='min-h-screen' />}><ProjectDetailPage /></Suspense> },
      { path: '/about', element: <Suspense fallback={<div className='min-h-screen' />}><AboutPage /></Suspense> },
      { path: '/contact', element: <Suspense fallback={<div className='min-h-screen' />}><ContactPage /></Suspense> },
      { path: '*', element: <Suspense fallback={<div className='min-h-screen' />}><NotFoundPage /></Suspense> },
    ],
  },
]);
