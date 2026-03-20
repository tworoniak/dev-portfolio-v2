import type { Project } from '../types/project';

export const projects: Project[] = [
  // Featured Projects //
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
    id: 'chromatic',
    slug: 'chromatic',
    title: 'Chromatic v1.0',
    description:
      'A visual theme builder that generates fully WCAG-compliant design token sets for light and dark mode. Pick a brand color, choose a color harmony type, tune typography and spacing, verify contrast compliance with built-in WCAG 2.1 checking and one-click fixes — then export to CSS, SCSS, TypeScript, or Tailwind.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'Google Fonts API',
      'Web Crypto API',
    ],
    image: '/images/projects/chromatic.png',
    liveUrl: 'https://chromatic-sepia.vercel.app',
    codeUrl: 'https://github.com/tworoniak/chromatic',
    featured: true,

    problem:
      'Most theme builders stop at color pickers and leave developers to manually derive scales, map semantic roles, verify contrast compliance, and maintain separate token sets for light and dark mode. A single semantic color that passes WCAG on a white background will almost always fail on a dark one — and fixing it in one mode breaks the other. Teams either skip accessibility validation entirely or maintain four separate token files by hand.',

    solution:
      'Build a theme builder that treats a theme as a structured token system from the start — auto-generated color scales, harmony-derived accent colors, semantic role mappings, and separate light and dark semantic sets maintained independently. A WCAG 2.1 contrast checker audits all 14 semantic color pairs in each mode, suggests luminance-correct fixes, and scopes them to the right set so fixing dark mode never touches light mode tokens. The shared pipeline engine from the Design Token Pipeline project generates all four output formats without modification.',

    features: [
      'Brand color picker with auto-generated 50–900 scales for brand, accent, and neutral using HSL lightness stepping with saturation modulation',
      'Four color harmony types — complementary, analogous, triadic, split-complementary — derived via HSL rotation to generate the accent scale',
      'Separate semanticLight and semanticDark token sets maintained independently — fixes in one mode never affect the other',
      'Google Fonts picker for sans and mono families with dynamic <link> injection and debounced search',
      'Spacing base unit slider that generates the full scale, border radius per level, and shadow controls (offsetY, blur, opacity) per elevation',
      'Live component preview driven by CSS custom properties injected into the document — re-themes via a single data-dark attribute toggle with no React re-renders',
      'WCAG 2.1 contrast checker with luminance-based algorithm checking 14 semantic pairs per mode, with light/dark toggle to audit each set independently',
      'Suggest Fix per failing pair — walks HSL lightness until 4.5:1 is achieved, shows before/after swatches and new ratio, applies to the correct mode with one click',
      'Luminance-based getContrastColor using the mathematically correct 0.179 threshold — correctly handles yellow-green and other high-chroma colors that fool HSL-based approaches',
      'Undo/redo history via useReducer, named theme save/load via localStorage, four export formats via the shared pipeline engine',
    ],

    architecture:
      'ChromaticTheme stores semanticLight and semanticDark as independent SemanticColors objects. deriveSemanticColors seeds both on mount and on brand color change. The SET_SEMANTIC_COLOR action accepts a mode parameter and writes only to the corresponding set. injectThemeCSS writes a single <style> tag with light vars in .chromatic-preview and dark vars in .chromatic-preview[data-dark="true"] — the preview re-themes via attribute toggle with no React re-renders. The WCAG fix algorithm walks HSL lightness in 1° steps toward the correct direction (determined by the other color\'s lightness) until getContrastRatio returns ≥4.5. getContrastColor uses relative luminance with the 0.179 crossover threshold rather than HSL lightness to correctly handle high-chroma hues. themeToTokens converts the live theme to a W3C DTCG TokenSet passed directly to the shared pipeline\'s runPipeline — the four generators run unchanged.',

    lessons:
      'The hardest problem was maintaining WCAG compliance across both modes simultaneously. The naive single-semantic-set approach means any contrast fix for light mode breaks dark mode. Separating semanticLight and semanticDark and scoping SET_SEMANTIC_COLOR to a mode parameter solved this cleanly. The most instructive debugging session was discovering that HSL lightness is wrong for determining text color on high-chroma backgrounds — #c5c112 (yellow-green) reads as "dark" at 42% HSL lightness but has a relative luminance of ~0.45, well above the 0.179 crossover where dark text becomes the correct choice. The WCAG spec uses luminance for exactly this reason. Reusing the pipeline module validated the decision to build it as a standalone module — dropping src/pipeline/ into Chromatic required zero modifications.',
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

    // architecture:
    //   'The app is structured around a strict separation between the UI layer and the state layer. All cart components — ProductGrid, ProductCard, CartSidebar, CartItemRow — accept plain props and have no knowledge of any state library. Three implementation files (ZustandCart, JotaiCart, ReduxCart) act as adapters, each connecting its respective store to the shared UI. This makes the comparison genuinely apples-to-apples. The action log is implemented as a tiny pub/sub event bus in src/lib/actionLog.ts that lives entirely outside React — Zustand and Jotai call it directly inside their action functions, while Redux hooks into it via a custom middleware. This neutral observer pattern means none of the three stores know about each other. The store code drawer reads from src/data/storeSource.ts, a static map of library-to-source-string, and applies lightweight regex-based syntax highlighting with no external dependency.',

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

    // architecture:
    //   'The app is structured around a strict separation between the UI layer and the state layer. All cart components — ProductGrid, ProductCard, CartSidebar, CartItemRow — accept plain props and have no knowledge of any state library. Three implementation files (ZustandCart, JotaiCart, ReduxCart) act as adapters, each connecting its respective store to the shared UI. This makes the comparison genuinely apples-to-apples. The action log is implemented as a tiny pub/sub event bus in src/lib/actionLog.ts that lives entirely outside React — Zustand and Jotai call it directly inside their action functions, while Redux hooks into it via a custom middleware. This neutral observer pattern means none of the three stores know about each other. The store code drawer reads from src/data/storeSource.ts, a static map of library-to-source-string, and applies lightweight regex-based syntax highlighting with no external dependency.',

    // lessons:
    //   'This project reinforced the importance of caching and data normalization when building UI driven by third-party APIs.',
  },
  {
    id: 'dev-flow',
    slug: 'dev-flow',
    title: 'DevFlow Portal v1.0',
    description:
      'DevFlow is a modern SaaS-style engineering dashboard built with React, TypeScript, and Vite. It is designed for development leads and engineering teams to manage tasks, monitor team workload, visualize sprint-related metrics, and generate skill-based task assignment recommendations. This project showcases a scalable frontend architecture with shared global state, reusable UI components, interactive data visualization, and an AI-style allocation engine.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Zustand',
      'Zod',
      'React Hook Form',
      'React Router',
      'Recharts',
    ],
    image: '/images/projects/dev-flow.png',
    // liveUrl: 'https://photo-storytelling.vercel.app',
    codeUrl: 'https://github.com/tworoniak/team-management',
    featured: true,

    problem:
      'Development leads need visibility into team workload, task status, and delivery priorities, but that information is often scattered across disconnected tools or buried in ticket lists. It can be difficult to quickly understand who has capacity, which work is blocked or high priority, and who is the best fit to take on backlog tasks.',

    solution:
      'DevFlow provides a centralized engineering operations dashboard that combines task management, team workload tracking, interactive analytics, and a recommendation engine for skill-based task assignment. By bringing these views together into a single interface, the app helps development leads make faster, more informed decisions about planning, prioritization, and team capacity.',

    features: [
      'Interactive engineering dashboard with live task and workload metrics',
      'Task CRUD with priority, status, assignee, tags, and required skills',
      'Team member CRUD with availability, workload, role, and skill assessments',
      'Task status distribution and priority overview charts built with Recharts',
      'AI-style allocation engine that recommends the best assignee based on skill match, availability, workload, and role fit',
      'Shared global state with Zustand so dashboard, tasks, team, and allocation views stay in sync',
      'Reusable modal and form system powered by React Hook Form and Zod',
      'Modern SaaS UI with sidebar navigation, dark theme styling, custom chart legends, and custom tooltips',
    ],

    architecture:
      'DevFlow is a frontend-first single-page application built with Vite, React, and TypeScript, using React Router for client-side routing and a feature-based folder structure to keep domains like dashboard, tasks, team, and allocation isolated and scalable. Global application data is managed with Zustand stores so multiple routes can react to shared task and team state without prop drilling. Forms are implemented with React Hook Form and validated with Zod to provide typed, reusable modal workflows for creating and editing tasks and team members. Data visualization is handled with Recharts, with dashboard metrics derived through utility functions rather than hardcoded values. The UI is styled with Tailwind CSS using a dark SaaS-inspired design system, reusable cards, badges, buttons, and modal primitives. The allocation engine is implemented as a scoring utility that evaluates backlog tasks against team members using weighted factors such as skill alignment, availability, workload, and role relevance.',

    lessons:
      'This project reinforced the value of feature-based architecture and shared global state when building dashboard-style applications with multiple connected views. It also highlighted how much clarity derived analytics can add to a product when charts and KPI cards are driven by the same underlying store data as the rest of the app. Building the allocation engine was a good exercise in translating product thinking into scoring logic, while the chart and modal work strengthened patterns around reusable UI, form validation, and scalable TypeScript types.',
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

    // architecture:
    //   'The app is structured around a strict separation between the UI layer and the state layer. All cart components — ProductGrid, ProductCard, CartSidebar, CartItemRow — accept plain props and have no knowledge of any state library. Three implementation files (ZustandCart, JotaiCart, ReduxCart) act as adapters, each connecting its respective store to the shared UI. This makes the comparison genuinely apples-to-apples. The action log is implemented as a tiny pub/sub event bus in src/lib/actionLog.ts that lives entirely outside React — Zustand and Jotai call it directly inside their action functions, while Redux hooks into it via a custom middleware. This neutral observer pattern means none of the three stores know about each other. The store code drawer reads from src/data/storeSource.ts, a static map of library-to-source-string, and applies lightweight regex-based syntax highlighting with no external dependency.',

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

    // architecture:
    //   'The app is structured around a strict separation between the UI layer and the state layer. All cart components — ProductGrid, ProductCard, CartSidebar, CartItemRow — accept plain props and have no knowledge of any state library. Three implementation files (ZustandCart, JotaiCart, ReduxCart) act as adapters, each connecting its respective store to the shared UI. This makes the comparison genuinely apples-to-apples. The action log is implemented as a tiny pub/sub event bus in src/lib/actionLog.ts that lives entirely outside React — Zustand and Jotai call it directly inside their action functions, while Redux hooks into it via a custom middleware. This neutral observer pattern means none of the three stores know about each other. The store code drawer reads from src/data/storeSource.ts, a static map of library-to-source-string, and applies lightweight regex-based syntax highlighting with no external dependency.',

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

    // architecture:
    //   'The app is structured around a strict separation between the UI layer and the state layer. All cart components — ProductGrid, ProductCard, CartSidebar, CartItemRow — accept plain props and have no knowledge of any state library. Three implementation files (ZustandCart, JotaiCart, ReduxCart) act as adapters, each connecting its respective store to the shared UI. This makes the comparison genuinely apples-to-apples. The action log is implemented as a tiny pub/sub event bus in src/lib/actionLog.ts that lives entirely outside React — Zustand and Jotai call it directly inside their action functions, while Redux hooks into it via a custom middleware. This neutral observer pattern means none of the three stores know about each other. The store code drawer reads from src/data/storeSource.ts, a static map of library-to-source-string, and applies lightweight regex-based syntax highlighting with no external dependency.',

    // lessons:
    //   'This project reinforced the importance of caching and data normalization when building UI driven by third-party APIs.',
  },
  {
    id: 'design-token-pipeline',
    slug: 'design-token-pipeline',
    title: 'Design Token Pipeline',
    description:
      'A browser-based design token transformation pipeline that converts W3C DTCG format JSON into four production-ready output formats — CSS custom properties, SCSS variables, TypeScript constants, and a Tailwind CSS config — with live alias resolution, type-aware value transformation, and a visual token preview strip.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS v4'],
    image: '/images/projects/design-token-pipeline.png',
    liveUrl: 'https://design-token-pipeline.vercel.app',
    codeUrl: 'https://github.com/tworoniak/design-token-pipeline',
    experiment: true,

    problem:
      'Design tokens are the single source of truth for a design system — colours, spacing, typography, shadows — but they only become useful when transformed into formats that code can actually consume. Teams either reach for heavy tools like Style Dictionary without understanding what they do, or maintain four separate token files by hand and watch them drift out of sync.',

    solution:
      'Build the transformation pipeline from scratch in a live browser playground. Edit W3C DTCG format JSON on the left and watch CSS custom properties, SCSS variables, TypeScript constants, and a Tailwind config update instantly on the right. The pipeline core is framework-agnostic — a pure resolver, transformer, and set of generators that could be extracted as a CLI or npm package.',

    features: [
      'Live JSON editor — edit W3C DTCG format tokens and all four output formats update instantly with parse error indication',
      'Alias resolution — {dot.path.notation} references resolve recursively before output generation, with circular reference detection that throws a descriptive error rather than hanging',
      'Type-aware transformation — dimensions and font sizes convert px to rem, shadow objects flatten to CSS box-shadow strings, border objects flatten to CSS border shorthand',
      'Four output formats — CSS custom properties (:root block), SCSS variables, TypeScript as const object with TokenKey type export, and a typed Tailwind Config with tokens sorted into the correct theme.extend buckets by type',
      'Copy to clipboard and file download per output format with correct file extensions (.css, .scss, .ts, .config.ts)',
      'Token preview strip — live colour swatches with resolved values, proportional spacing bars, font size specimens rendered at actual size, and shadow cards on a light background',
      'Stats bar showing total token count, resolved alias count, and per-format error reporting',
      'Zero external transformation dependencies — resolver, transformer, and all four generators implemented from scratch',
    ],

    architecture:
      'The pipeline core lives in src/pipeline/ as four independent modules. resolve.ts flattens the nested token tree into a flat array of { path, token, resolvedValue, isAlias } entries, resolving {alias} references recursively with a visited Set for circular detection. transform.ts applies type-aware value transformations — pxToRem for dimensions and font sizes, object serialization for shadows and borders. generators.ts contains four independent output functions that each consume the flat resolved list and produce their format; the Tailwind generator additionally sorts tokens into theme.extend buckets by $type and group name. pipeline/index.ts orchestrates everything, running each generator in its own try/catch so a failure in one format never blocks the others. The UI layer in usePipeline uses a lazy useState initializer to run the pipeline on mount without a useEffect, keeping the data flow synchronous and predictable.',

    lessons:
      'The most interesting problem was alias resolution for chained references — where a semantic token aliases a brand token which aliases a primitive value. A single-pass resolver breaks on these chains; the solution was recursive resolution following the chain to its primitive, with a visited Set preventing infinite loops on circular references. The Tailwind generator required the most design judgment: tokens need to land in the correct theme.extend key by both $type and group name, since dimension tokens in a spacing group belong in theme.extend.spacing while the same type in a borderRadius group belongs in theme.extend.borderRadius. The px-to-rem transformation also surfaced a real edge case — 9999px used for fully-rounded elements becomes 624.9375rem, which is technically correct but semantically unusual, a tradeoff worth documenting.',
  },
  {
    id: 'virtual-list-renderer',
    slug: 'virtual-list-renderer',
    title: 'Virtual List Renderer',
    description:
      'A from-scratch implementation of virtual list rendering in React — no react-window, no react-virtualized. Renders 100,000 rows smoothly at 60fps with variable row heights, binary search scroll, Web Worker data generation, live search, column sorting, and a benchmark panel that proves the performance difference with real measured numbers.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'Web Workers API',
      'ResizeObserver API',
      'requestAnimationFrame',
    ],
    image: '/images/projects/virtual-list-renderer.png',
    liveUrl: 'https://virtual-list-renderer.vercel.app',
    codeUrl: 'https://github.com/tworoniak/virtual-list-renderer',
    experiment: true,

    problem:
      'Most React developers reach for react-window or react-virtualized without understanding what virtual rendering actually does or why it matters. Libraries abstract away the core insight — that rendering 100,000 DOM nodes simultaneously is what kills performance, not the data itself — leaving developers unable to debug, extend, or reason about the behaviour when something goes wrong. And without measured evidence, performance claims remain theoretical.',

    solution:
      'Build the entire virtual list engine from scratch — offset cache, binary search scroll, ResizeObserver variable height measurement, Web Worker data pipeline — and pair it with a live benchmark panel that runs naïve rendering and virtual rendering side by side, measuring render time, DOM node count, scroll FPS, and memory. The result makes the performance argument concrete: 87.9× faster render time, 1,190× fewer DOM nodes, measurably higher scroll FPS.',

    features: [
      'Core virtual list engine built from scratch — no react-window or react-virtualized — rendering only the ~15–20 visible rows plus a small overscan buffer regardless of dataset size',
      'Variable row heights via ResizeObserver — each row measures its own rendered height and reports back to the engine, which recomputes downstream offsets from the changed index forward',
      'Binary search scroll — finding the first visible row on each scroll event is O(log n) against the offset cache, not a O(n) linear scan',
      '100,000 log entries generated in a Web Worker on mount so the main thread never blocks during initialisation',
      'Debounced search and filter run in the Worker, scanning the full 100k dataset off-thread with per-query timing reported back to the UI',
      'Column sorting by timestamp, level, and duration with asc/desc toggle',
      'Real-time FPS overlay measured via requestAnimationFrame loop, colour-coded by performance tier',
      'Benchmark drawer — select 1k / 5k / 10k / 25k rows, run sequential naïve vs. virtual tests, and see side-by-side metric cards for render time, DOM nodes, scroll FPS, and JS heap with winner highlighting and multiplier callouts',
      'Zero runtime dependencies beyond React — debounce utility, FPS counter, offset engine, benchmark runner, and worker all implemented from scratch',
    ],

    architecture:
      'The core engine lives in useVirtualList, which maintains a LayoutState object — an offsets array and totalHeight — in React state. On mount and on row count changes it builds the offset array by summing heights from a measurement cache. Each scroll event updates scrollTop state, triggering a useMemo that binary-searches for the first visible index and walks forward to fill the viewport with OVERSCAN = 5 rows on each side. Variable height measurement uses ResizeObserver inside each LogRow — when a measured height differs from the cache, onMeasure triggers setLayout which rebuilds offsets from the changed index forward. The Web Worker handles GENERATE (builds 100k rows once) and FILTER (scans against a query) message types, retaining the full dataset in memory between calls. The debounced search function is created inside useEffect alongside the worker, capturing the worker instance directly. The benchmark runner in useBenchmark uses vanilla DOM construction — no React — to isolate rendering strategy as the only variable, measuring render time with a double requestAnimationFrame wrapper to capture actual paint cost, and scroll FPS via a programmatic animation loop.',

    lessons:
      "React's strict linting rules around ref access during render required rethinking the engine's data flow multiple times. Storing the offset cache in a ref — the natural performance instinct — is exactly what React's rules prohibit in useMemo and the render path. Storing offsets and totalHeight together as LayoutState in proper React state resolved this cleanly. The Web Worker debounce pattern went through similar iterations before landing on creating the debounced function inside useEffect alongside the worker, capturing the worker directly. The benchmark panel delivered the most surprising result: the measured numbers — 87.9× faster render, 1,190× fewer DOM nodes — were far more dramatic than intuition suggested, reinforcing that performance claims only become credible when backed by actual measurement.",
  },
  {
    id: 'state-management-comparison',
    slug: 'state-management-comparison',
    title: 'State Management Comparison',
    description:
      'A frontend experiment comparing Zustand, Jotai, and Redux Toolkit using an identical shopping cart application — same UI, same data, three different state engines. Built to surface the real tradeoffs between modern React state management libraries through live interaction rather than theory.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'Zustand',
      'Jotai',
      'Redux Toolkit',
      'React Redux',
      'rollup-plugin-visualizer',
    ],
    image: '/images/projects/state-management-comparison.png',
    liveUrl: 'https://state-management-comparison.vercel.app',
    codeUrl: 'https://github.com/tworoniak/state-management-comparison',
    experiment: true,

    problem:
      "Most state management comparisons live in blog posts — abstract code snippets with no shared context, no measurable output, and no way to feel the difference between libraries. Developers are left making architectural decisions based on other people's opinions rather than direct observation.",

    solution:
      'Build the same shopping cart application three times — once in Zustand, once in Jotai, once in Redux Toolkit — sharing a single library-agnostic UI layer. A tab bar switches between implementations at runtime, while a persistent metrics panel, live action log, and store code drawer make the differences between libraries observable and tangible without leaving the app.',

    features: [
      'Three fully independent store implementations — Zustand, Jotai, Redux Toolkit — powering an identical cart UI via thin adapter components',
      'Per-component render counters displayed inline on every component, making re-render behaviour visible without DevTools',
      'Live action log — a real-time feed showing every dispatched action across all three libraries with timestamps, library badges, and payloads, powered by a framework-agnostic pub/sub event bus',
      "Store code drawer — a slide-in panel showing the full syntax-highlighted source for the active library's store, with copy-to-clipboard support",
      'Metrics panel comparing bundle size, boilerplate line count, and developer experience notes side-by-side for all three libraries',
      "Vite bundle analyzer integration — running npm run build auto-generates a bundle-analysis.html showing each library's size contribution",
      "Redux action logger implemented as custom RTK middleware, while Zustand and Jotai dispatch directly — demonstrating each library's extensibility model",
    ],

    architecture:
      'The app is structured around a strict separation between the UI layer and the state layer. All cart components — ProductGrid, ProductCard, CartSidebar, CartItemRow — accept plain props and have no knowledge of any state library. Three implementation files (ZustandCart, JotaiCart, ReduxCart) act as adapters, each connecting its respective store to the shared UI. This makes the comparison genuinely apples-to-apples. The action log is implemented as a tiny pub/sub event bus in src/lib/actionLog.ts that lives entirely outside React — Zustand and Jotai call it directly inside their action functions, while Redux hooks into it via a custom middleware. This neutral observer pattern means none of the three stores know about each other. The store code drawer reads from src/data/storeSource.ts, a static map of library-to-source-string, and applies lightweight regex-based syntax highlighting with no external dependency.',

    lessons:
      "The most instructive moment was discovering that JavaScript getters defined on a Zustand store object do not trigger reactivity — the getter is evaluated once at store creation and never again, so derived values like cart totals silently returned stale data. The fix was to compute those values in the component from the reactive items array, which also turned out to be the idiomatic Zustand pattern. Jotai's atomic model proved the most compositionally elegant — derived atoms via atom(get => ...) handled computed state cleanly without any of the boilerplate Redux selectors require. Redux Toolkit's middleware system was the standout for extensibility; wiring the action logger into all three stores with a single configureStore call demonstrated why RTK remains the right choice for large teams who need auditability and tooling depth over simplicity.",
  },
  {
    id: 'physica',
    slug: 'physica',
    title: 'Physica',
    description:
      'A physics-based UI experiment combining spring animations, particle systems, magnetic cursor interactions, and gravity simulation. Demonstrates how mass, stiffness, and damping produce qualitatively different motion compared to static easing curves — with a from-scratch Canvas particle system and a Framer Motion spring layer working in parallel.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'Framer Motion',
      'Canvas API',
      'requestAnimationFrame',
    ],
    image: '/images/projects/physica.png',
    // liveUrl: 'https://your-physica.vercel.app',
    codeUrl: 'https://github.com/tworoniak/physica',
    experiment: true,

    problem:
      'Most UI animations use static easing curves — ease-in, ease-out, cubic-bezier — which feel mechanical because they specify duration and shape rather than physical properties. Physics-based animation is fundamentally different: you define mass, stiffness, and damping, and the motion emerges from those values. The difference is immediately perceptible but rarely demonstrated in a way that makes the underlying mechanics tangible.',

    solution:
      'Build a two-section playground and demo app where every interaction is driven by real physics parameters. Three draggable cards with meaningfully different spring configurations make the mass/stiffness/damping tradeoffs immediately tangible. A magnetic button, gravity field, spring menu, liquid button, wobbly tilt card, and ripple stack each isolate a different physics primitive. The particle background — 80 particles with connection lines and mouse repulsion — is built entirely from scratch on Canvas to contrast with the Framer Motion spring layer.',

    features: [
      'Three draggable card variants with distinct spring configs — free throw (low mass, full momentum), elastic tether (low damping, snaps to origin), and heavy mass (mass=4, slow overshoot) — making stiffness/damping/mass differences immediately tangible',
      'Magnetic buttons with cursor attraction — mouse position relative to button center drives independent spring offsets on container and label, creating a parallax pull effect',
      'Gravity field — five spring balls with mass-weighted fall speeds, toggle on to drop, toggle off to spring back to resting positions',
      'Spring stagger menu with AnimatePresence — items enter with staggered spring delays and exit in reverse order',
      'Liquid button — coordinated useSpring values for scaleX, scaleY, and borderRadius produce a squish-and-stretch sequence on press',
      'Wobbly 3D tilt card — useTransform maps drag position to rotateX/rotateY and glare position with no React re-renders between gesture and visual response',
      'Ripple fan stack — four cards spring-fan on hover using motion variants with staggered delays',
      '80-particle Canvas system built from scratch — connection lines within 120px, mouse repulsion within 100px, wrapping at viewport edges, 60fps via requestAnimationFrame',
      'Custom cursor trail — spring-following ring and 12-dot fading trail using AnimatePresence opacity/scale exit animations',
    ],

    architecture:
      'The particle system lives entirely outside React in src/lib/particles.ts — pure functions for createParticle, updateParticle, and drawParticles. The useParticles hook owns the Canvas context, rAF loop, and mouse tracking via refs, never touching React state during the animation loop. The spring layer uses Framer Motion useMotionValue and useSpring as the reactive primitive — useTransform derives rotateX, rotateY, and glare position from drag values without any setState or useEffect. The three DraggableCard variants share a single component with a variant prop that selects from a SPRING_CONFIGS map, keeping the physics parameters explicit and comparable. The elastic return is handled by resetting motion values to zero in onDragEnd and letting the spring animate back — removing the need for dragConstraints refs which caused getBoundingClientRect errors on null elements.',

    lessons:
      'The dragConstraints ref bug was the most instructive error — Motion tries to measure the constraint container before it mounts, causing a null getBoundingClientRect. Removing the ref and using onDragEnd to reset motion values to zero was cleaner anyway, because it decouples the drag gesture from the return animation and lets the spring config control the snap-back feel independently. The particle system reinforced why Canvas is the right tool for high-frequency graphics — 80 particles with connection lines at 60fps in React DOM would mean 80+ component re-renders per frame. On Canvas it is a clearRect and a set of draw calls with no component tree involvement. useTransform was the most powerful Framer Motion primitive — mapping drag position to 3D rotation and glare without any render cycle between gesture and visual response made the interactions feel instant in a way that setState-driven animations cannot match.',
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

    // architecture:
    //   'The app is structured around a strict separation between the UI layer and the state layer. All cart components — ProductGrid, ProductCard, CartSidebar, CartItemRow — accept plain props and have no knowledge of any state library. Three implementation files (ZustandCart, JotaiCart, ReduxCart) act as adapters, each connecting its respective store to the shared UI. This makes the comparison genuinely apples-to-apples. The action log is implemented as a tiny pub/sub event bus in src/lib/actionLog.ts that lives entirely outside React — Zustand and Jotai call it directly inside their action functions, while Redux hooks into it via a custom middleware. This neutral observer pattern means none of the three stores know about each other. The store code drawer reads from src/data/storeSource.ts, a static map of library-to-source-string, and applies lightweight regex-based syntax highlighting with no external dependency.',

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

    // architecture:
    //   'The app is structured around a strict separation between the UI layer and the state layer. All cart components — ProductGrid, ProductCard, CartSidebar, CartItemRow — accept plain props and have no knowledge of any state library. Three implementation files (ZustandCart, JotaiCart, ReduxCart) act as adapters, each connecting its respective store to the shared UI. This makes the comparison genuinely apples-to-apples. The action log is implemented as a tiny pub/sub event bus in src/lib/actionLog.ts that lives entirely outside React — Zustand and Jotai call it directly inside their action functions, while Redux hooks into it via a custom middleware. This neutral observer pattern means none of the three stores know about each other. The store code drawer reads from src/data/storeSource.ts, a static map of library-to-source-string, and applies lightweight regex-based syntax highlighting with no external dependency.',

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

    // architecture:
    //   'The app is structured around a strict separation between the UI layer and the state layer. All cart components — ProductGrid, ProductCard, CartSidebar, CartItemRow — accept plain props and have no knowledge of any state library. Three implementation files (ZustandCart, JotaiCart, ReduxCart) act as adapters, each connecting its respective store to the shared UI. This makes the comparison genuinely apples-to-apples. The action log is implemented as a tiny pub/sub event bus in src/lib/actionLog.ts that lives entirely outside React — Zustand and Jotai call it directly inside their action functions, while Redux hooks into it via a custom middleware. This neutral observer pattern means none of the three stores know about each other. The store code drawer reads from src/data/storeSource.ts, a static map of library-to-source-string, and applies lightweight regex-based syntax highlighting with no external dependency.',

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

    // architecture:
    //   'The app is structured around a strict separation between the UI layer and the state layer. All cart components — ProductGrid, ProductCard, CartSidebar, CartItemRow — accept plain props and have no knowledge of any state library. Three implementation files (ZustandCart, JotaiCart, ReduxCart) act as adapters, each connecting its respective store to the shared UI. This makes the comparison genuinely apples-to-apples. The action log is implemented as a tiny pub/sub event bus in src/lib/actionLog.ts that lives entirely outside React — Zustand and Jotai call it directly inside their action functions, while Redux hooks into it via a custom middleware. This neutral observer pattern means none of the three stores know about each other. The store code drawer reads from src/data/storeSource.ts, a static map of library-to-source-string, and applies lightweight regex-based syntax highlighting with no external dependency.',

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

  // Experiment Projects //
];
