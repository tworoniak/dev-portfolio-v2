import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'react-weather-app',
    slug: 'react-weather-app',
    title: 'React Weather App',
    description:
      'Weather app with geolocation, animated backgrounds, 7-day charts, saved cities, and severe alerts.',
    tech: [
      'React',
      'TypeScript',
      'TanStack Query',
      'Axios',
      'Zod',
      'Recharts',
      'Tailwind CSS',
    ],

    image: '/images/projects/react-weather.png',
    liveUrl: 'https://crypto-dash-hazel-kappa.vercel.app',
    codeUrl: 'https://github.com/tworoniak/crypto-dash',
  },
  {
    id: 'cryptodash',
    slug: 'crypto-dash',
    title: 'CryptoDash 2.0',
    description:
      'A modern crypto dashboard with market data, charts, search, sorting, and responsive UI.',
    tech: ['React', 'TypeScript', 'TanStack Query', 'Chart.js', 'Sass'],
    image: '/images/projects/cryptodash.png',
    liveUrl: 'https://crypto-dash-hazel-kappa.vercel.app',
    codeUrl: 'https://github.com/tworoniak/crypto-dash',
  },
  {
    id: 'festival-planner',
    slug: 'festival-planner',
    title: 'Festival Planner',
    description:
      'A planning tool for comparing set times, building schedules, and managing lineup conflicts.',
    tech: ['React', 'TypeScript', 'SCSS', 'date-fns'],
    image: '/images/projects/festival-planner.png',
    liveUrl: 'https://festival-planner-kappa.vercel.app',
    codeUrl: 'https://github.com/tworoniak/festival-planner',
  },
  {
    id: 'photography-portfolio',
    slug: 'photography-portfolio',
    title: 'Photography Portfolio',
    description:
      'A modern photography portfolio website with responsive design and lightbox functionality.',
    tech: ['React', 'TypeScript', 'React Router', 'Tailwind CSS'],
    image: '/images/projects/photography-portfolio.png',
    liveUrl: 'https://photography-portfolio-iota-eight.vercel.app',
    codeUrl: 'https://github.com/tworoniak/photography-portfolio',
  },
];
