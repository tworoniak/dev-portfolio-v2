import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';

const HomePage = lazy(() => import('../pages/HomePage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('../pages/ProjectDetailPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Suspense><HomePage /></Suspense> },
      { path: '/projects', element: <Suspense><ProjectsPage /></Suspense> },
      { path: '/projects/:slug', element: <Suspense><ProjectDetailPage /></Suspense> },
      { path: '/about', element: <Suspense><AboutPage /></Suspense> },
      { path: '/contact', element: <Suspense><ContactPage /></Suspense> },
    ],
  },
]);
