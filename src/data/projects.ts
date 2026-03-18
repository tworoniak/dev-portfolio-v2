import type { Project } from '../types/project';

export const projects: Project[] = [
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
    featured: true,
    // problem:
    //   'Tracking cryptocurrency market data across multiple sources can be slow and fragmented.',

    // solution:
    //   'CryptoDash provides a unified dashboard using the CoinGecko API and optimized client-side data fetching.',

    // features: [
    //   'Real-time crypto price tracking',
    //   'Interactive charts',
    //   'Search and sorting',
    //   'Responsive dashboard UI',
    // ],

    // lessons:
    //   'This project reinforced the importance of caching and data normalization when building UI driven by third-party APIs.',
  },
  {
    id: 'press-portal',
    slug: 'press-portal',
    title: 'PressPilot v1.1',
    description:
      'A full-stack Press Contact Management Portal for tracking publicists, managers, labels, and media contacts for bands and festivals.',
    tech: [
      'React',
      'TypeScript',
      'React Router',
      'TanStack Query',
      'Axios',
      'Firebase',
      'SCSS',
      'PostgreSQL',
      'Prisma ORM',
    ],
    image: '/images/projects/press-pilot.png',
    // liveUrl: 'https://press-portal.vercel.app/',
    codeUrl: 'https://github.com/tworoniak/press-portal',
    featured: true,
    // problem:
    //   'Tracking cryptocurrency market data across multiple sources can be slow and fragmented.',

    // solution:
    //   'CryptoDash provides a unified dashboard using the CoinGecko API and optimized client-side data fetching.',

    // features: [
    //   'Real-time crypto price tracking',
    //   'Interactive charts',
    //   'Search and sorting',
    //   'Responsive dashboard UI',
    // ],

    // lessons:
    //   'This project reinforced the importance of caching and data normalization when building UI driven by third-party APIs.',
  },
  {
    id: 'photo-storytelling',
    slug: 'photo-storytelling',
    title: 'Photo Storytelling',
    description:
      'A scroll-driven, digital magazine-style photo storytelling experience built with React + TypeScript, featuring cinematic parallax hero sections, animated chapter reveals, embedded audio moments, and an editorial chapter navigation system.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'Firebase',
      'React Router',
      'Cloudinary',
    ],
    image: '/images/projects/photo-storytelling.png',
    liveUrl: 'https://photo-storytelling.vercel.app',
    codeUrl: 'https://github.com/tworoniak/photo-storytelling',

    // problem:
    //   'Tracking cryptocurrency market data across multiple sources can be slow and fragmented.',

    // solution:
    //   'CryptoDash provides a unified dashboard using the CoinGecko API and optimized client-side data fetching.',

    // features: [
    //   'Real-time crypto price tracking',
    //   'Interactive charts',
    //   'Search and sorting',
    //   'Responsive dashboard UI',
    // ],

    // lessons:
    //   'This project reinforced the importance of caching and data normalization when building UI driven by third-party APIs.',
  },
  {
    id: 'aperture',
    slug: 'aperture',
    title: 'Aperture v1.0',
    description:
      'A full-stack photography business management application built with React, TypeScript, and Tailwind CSS. Designed as a private, role-based web app for photographers to manage clients, bookings, shoots, gear, pricing, and client proofing galleries — all in one place.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'shadcn/ui',
      'Clerk',
      'Supabase',
      'Cloudinary',
      'React Hook Form',
      'Zod',
      'React Router v6',
      'Recharts',
      'Lucide React',
      'date-fns',
    ],
    image: '/images/projects/aperture.png',
    liveUrl: 'https://your-aperture-deployment.vercel.app',
    codeUrl: 'https://github.com/tworoniak/aperture-photo-os',
    featured: true,

    problem:
      'Photographers typically juggle four or five disconnected tools to run their business — a spreadsheet for clients, a calendar app for bookings, Google Drive for contracts, a separate invoicing tool, and email chains to share proofing galleries with clients. This fragmentation creates friction at every step of the workflow, makes it easy for things to fall through the cracks, and presents an unprofessional experience to clients.',

    solution:
      'Aperture consolidates every part of the photography business workflow into a single, role-based web application. Photographers get a full admin dashboard covering client management, bookings, shoot planning, gear inventory, pricing, and proofing galleries — all backed by a Supabase Postgres database with Row Level Security. Clients receive a clean, password-free gallery link where they can approve, reject, favourite, comment on, and download photos uploaded directly to Cloudinary. The app is built with a cool slate design system, supports full dark mode, and is fully responsive across desktop and mobile.',

    features: [
      'Role-based auth via Clerk — admin (photographer) and client access levels with protected routes',
      'CRM — searchable, filterable client list with lead/active/past status, revenue tracking, and slide-out profile panel',
      'Bookings — list and calendar views with session types, deposit tracking, contract status, and shoot linking',
      'Shoot planner — per-shoot detail pages with interactive shot list, mood board, location notes, gear kit selector, and weather placeholder',
      'Gear inventory — grouped and flat views with condition badges, insurance values, and one-click mark as needs repair',
      'Pricing calculator — package cards with add-ons, custom line items, discount codes, and downloadable HTML quote',
      'Client proofing gallery — masonry grid with lightbox, slideshow mode, keyboard shortcuts, per-photo approve/reject/favourite/comment, and individual photo downloads via Cloudinary',
      'Cloudinary photo uploads — drag and drop or URL input with per-gallery subfolders and automatic thumbnail generation',
      'Business dashboard — revenue stats, 6-month area chart, upcoming bookings, and recent clients',
      'Full dark mode with a cool slate palette and DM Sans typography',
      'Responsive mobile layout with slide-in drawer navigation and card-based list views',
    ],

    architecture:
      "Aperture is a single-page application built with Vite and React 18, using React Router v6 for client-side routing with a role-based protected route system powered by Clerk. The app is structured around a feature-based folder architecture — each business domain (CRM, bookings, gear, shoots, pricing, galleries) owns its components, schemas, and data access layer independently. Shared types are centralized in a single types/index.ts file consumed across all features. The data layer uses a thin repository pattern — each feature has a dedicated db/ module that maps between the app's camelCase types and Supabase's snake_case columns. Supabase Postgres stores all business data across six tables protected by Row Level Security, with Clerk JWTs verified via the third-party auth integration. Photos are uploaded directly from the browser to Cloudinary using an unsigned upload preset, with per-gallery subfolders and automatic URL-based transformations for thumbnails. Forms are built with React Hook Form and validated with Zod schemas. Styling uses Tailwind CSS v4 with a custom CSS variable theme system bridged via @theme inline, shadcn/ui for accessible component primitives, and SCSS for complex layout patterns like masonry grids. A Supabase Edge Function handles server-side Cloudinary API calls for zip archive generation.",

    lessons:
      "Building Aperture end-to-end highlighted how quickly dependency version mismatches compound in a modern React stack — Zod v4 was incompatible with @hookform/resolvers and required a downgrade to v3, Tailwind v4 required replacing @apply with raw hsl(var(--)) values in base styles, and shadcn's CSS variables needed registering via @theme inline to respond to theme changes. The Clerk and Supabase integration also evolved significantly — the original JWT template approach was deprecated in favour of Supabase's native third-party auth, and the Cloudinary zip archive endpoint required a Supabase Edge Function since signed API calls cannot be made from the browser. These challenges reinforced the value of checking integration compatibility before committing to a stack, building a shared type system early, and isolating data access concerns in a dedicated layer so schema changes don't ripple through every component.",
  },
  {
    id: 'dev-flow',
    slug: 'dev-flow',
    title: 'DevFlow Portal v1.0',
    description:
      'A scroll-driven, digital magazine-style photo storytelling experience built with React + TypeScript, featuring cinematic parallax hero sections, animated chapter reveals, embedded audio moments, and an editorial chapter navigation system.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Zuzstand',
      'Zod',
      'React Hook Form',
      'React Router',
      'Recharts',
    ],
    image: '/images/projects/dev-flow.png',
    // liveUrl: 'https://photo-storytelling.vercel.app',
    codeUrl: 'https://github.com/tworoniak/team-management',
    featured: true,

    // problem:
    //   'Tracking cryptocurrency market data across multiple sources can be slow and fragmented.',

    // solution:
    //   'CryptoDash provides a unified dashboard using the CoinGecko API and optimized client-side data fetching.',

    // features: [
    //   'Real-time crypto price tracking',
    //   'Interactive charts',
    //   'Search and sorting',
    //   'Responsive dashboard UI',
    // ],

    // lessons:
    //   'This project reinforced the importance of caching and data normalization when building UI driven by third-party APIs.',
  },
  {
    id: 'voyage-planner',
    slug: 'voyage-planner',
    title: 'Voyage Planner',
    description:
      'A travel planning app for creating and managing trip itineraries with real-time updates and collaborative features.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'Tailwind CSS',
      'Radix UI',
      'Zod',
      'date-fns',
      'Lucide Icons',
      // 'Framer Motion',
    ],
    image: '/images/projects/voyage-planner.png',
    // liveUrl: 'https://voyage-planner.vercel.app',
    codeUrl: 'https://github.com/tworoniak/travel-itinerary-app',
    featured: true,

    // problem:
    //   'Tracking cryptocurrency market data across multiple sources can be slow and fragmented.',

    // solution:
    //   'CryptoDash provides a unified dashboard using the CoinGecko API and optimized client-side data fetching.',

    // features: [
    //   'Real-time crypto price tracking',
    //   'Interactive charts',
    //   'Search and sorting',
    //   'Responsive dashboard UI',
    // ],

    // lessons:
    //   'This project reinforced the importance of caching and data normalization when building UI driven by third-party APIs.',
  },
  {
    id: 'ui-design-systems',
    slug: 'ui-design-systems',
    title: 'UI Design Systems',
    description:
      'A hands-on React + TypeScript playground for learning and comparing modern UI/design system approaches.A comprehensive UI design system built with React + TypeScript, featuring reusable components, design tokens, and documentation.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'Tailwind CSS',
      'Radix UI',
      'MUI',
      'shadcn/ui',
      'Lucide Icons',
      'Sonner',
      'Framer Motion',
    ],
    image: '/images/projects/ui-design-systems.png',
    liveUrl: 'https://ui-design-systems-lab.vercel.app',
    codeUrl: 'https://github.com/tworoniak/ui-design-systems-lab',
    experiment: true,

    // problem:
    //   'Tracking cryptocurrency market data across multiple sources can be slow and fragmented.',

    // solution:
    //   'CryptoDash provides a unified dashboard using the CoinGecko API and optimized client-side data fetching.',

    // features: [
    //   'Real-time crypto price tracking',
    //   'Interactive charts',
    //   'Search and sorting',
    //   'Responsive dashboard UI',
    // ],

    // lessons:
    //   'This project reinforced the importance of caching and data normalization when building UI driven by third-party APIs.',
  },
  {
    id: 'use-popcorn',
    slug: 'use-popcorn',
    title: 'usePopcorn v2.0',
    description:
      'usePopcorn v2.0 is a production-style React + TypeScript movie tracking application built with Vite. Search for movies via the OMDb API.',
    tech: ['React', 'TypeScript', 'React Router', 'OMDb API', 'SCSS'],
    image: '/images/projects/use-popcorn.png',
    liveUrl: 'https://use-popcorn-v2-ruby.vercel.app/',
    codeUrl: 'https://github.com/tworoniak/use-popcorn-v2',

    // problem:
    //   'Tracking cryptocurrency market data across multiple sources can be slow and fragmented.',

    // solution:
    //   'CryptoDash provides a unified dashboard using the CoinGecko API and optimized client-side data fetching.',

    // features: [
    //   'Real-time crypto price tracking',
    //   'Interactive charts',
    //   'Search and sorting',
    //   'Responsive dashboard UI',
    // ],

    // lessons:
    //   'This project reinforced the importance of caching and data normalization when building UI driven by third-party APIs.',
  },
  {
    id: 'riff-finder',
    slug: 'riff-finder',
    title: 'Riff Finder',
    description:
      'Riff Finder is a music discovery web app built with React + TypeScript that allows users to search artists, explore artist details (top tracks, albums, related artists), and generate recommendations using a rules-based discovery algorithm.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'TanStack Query',
      'Tailwind CSS',
      'Spotify API',
    ],
    image: '/images/projects/riff-finder.png',
    liveUrl: 'https://riff-finder.vercel.app/',
    codeUrl: 'https://github.com/tworoniak/riff-finder',

    // problem:
    //   'Tracking cryptocurrency market data across multiple sources can be slow and fragmented.',

    // solution:
    //   'CryptoDash provides a unified dashboard using the CoinGecko API and optimized client-side data fetching.',

    // features: [
    //   'Real-time crypto price tracking',
    //   'Interactive charts',
    //   'Search and sorting',
    //   'Responsive dashboard UI',
    // ],

    // lessons:
    //   'This project reinforced the importance of caching and data normalization when building UI driven by third-party APIs.',
  },
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
    liveUrl: 'https://weather-app-snowy-phi.vercel.app',
    codeUrl: 'https://github.com/tworoniak/weather-app',
    // problem:
    //   'Tracking cryptocurrency market data across multiple sources can be slow and fragmented.',

    // solution:
    //   'CryptoDash provides a unified dashboard using the CoinGecko API and optimized client-side data fetching.',

    // features: [
    //   'Real-time crypto price tracking',
    //   'Interactive charts',
    //   'Search and sorting',
    //   'Responsive dashboard UI',
    // ],

    // lessons:
    //   'This project reinforced the importance of caching and data normalization when building UI driven by third-party APIs.',
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

    problem:
      'Tracking cryptocurrency market data across multiple sources can be slow and fragmented.',

    solution:
      'CryptoDash provides a unified dashboard using the CoinGecko API and optimized client-side data fetching.',

    features: [
      'Real-time crypto price tracking',
      'Interactive charts',
      'Search and sorting',
      'Responsive dashboard UI',
    ],

    lessons:
      'This project reinforced the importance of caching and data normalization when building UI driven by third-party APIs.',
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
    // problem:
    //   'Tracking cryptocurrency market data across multiple sources can be slow and fragmented.',

    // solution:
    //   'CryptoDash provides a unified dashboard using the CoinGecko API and optimized client-side data fetching.',

    // features: [
    //   'Real-time crypto price tracking',
    //   'Interactive charts',
    //   'Search and sorting',
    //   'Responsive dashboard UI',
    // ],

    // lessons:
    //   'This project reinforced the importance of caching and data normalization when building UI driven by third-party APIs.',
  },
];
