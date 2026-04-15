import type { Project } from '../types/project';

export const projects: Project[] = [
  // Featured Projects //
  {
    id: 'apertur',
    slug: 'apertur',
    title: 'Apertur',
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
    // liveUrl: 'https://www.apertur.pro',
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

    screenshots: [
      {
        src: '/images/projects/aperture.png',
        alt: 'Aperture dashboard showing revenue stats, upcoming bookings, and recent clients',
      },
      {
        src: '/images/projects/apertur/screen-00.png',
        alt: 'Aperture sign-in page with Clerk authentication — Google, GitHub, and email options',
      },
      {
        src: '/images/projects/apertur/screen-01.png',
        alt: 'Aperture main dashboard with revenue stats, booking activity chart, and recent clients',
      },
      {
        src: '/images/projects/apertur/screen-02.png',
        alt: 'Aperture clients list with status badges, invoice counts, and last-contact dates',
      },
      {
        src: '/images/projects/apertur/screen-03.png',
        alt: 'Aperture bookings table with session type, date, status, deposit, and total columns',
      },
      {
        src: '/images/projects/apertur/screen-04.png',
        alt: 'Aperture shoots page with active shoot cards grouped by status',
      },
      {
        src: '/images/projects/apertur/screen-05.png',
        alt: 'Aperture gear inventory categorized by camera bodies, lenses, lighting, and accessories',
      },
      {
        src: '/images/projects/apertur/screen-06.png',
        alt: 'Aperture pricing packages grid with quote builder sidebar open',
      },
      {
        src: '/images/projects/apertur/screen-07.png',
        alt: 'Aperture client galleries overview with shareable gallery links per shoot',
      },
    ],
  },
  {
    id: 'voyage-planner',
    slug: 'voyage-planner',
    title: 'Horizons',
    description:
      'A full-stack travel itinerary planner with auth, day-by-day trip planning, drag-and-drop activity reordering, budget tracking, and AI-powered activity suggestions.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'Tailwind CSS',
      'Radix UI',
      'shadcn/ui',
      'Supabase',
      'PostgreSQL',
      'Row Level Security',
      'Supabase Edge Functions',
      'dnd-kit',
      'React Hook Form',
      'Zod',
      'date-fns',
      'Lucide Icons',
      'Recharts',
      'Anthropic Claude API',
    ],
    image: '/images/projects/horizons.png',
    // liveUrl: 'https://travel-itinerary-app-alpha.vercel.app',
    codeUrl: 'https://github.com/tworoniak/travel-itinerary-app',
    featured: true,

    problem:
      'Planning a multi-day trip across multiple tools — notes apps, spreadsheets, booking emails — leaves itineraries fragmented and hard to share or update.',

    solution:
      'Horizons centralizes trip planning into a single structured app with day-by-day timelines, cost tracking, and AI-generated activity suggestions tailored to each destination.',

    features: [
      'Auth with protected routes via Supabase',
      'Create, edit, and delete itineraries',
      'Day-by-day activity timeline',
      'Drag-and-drop activity reordering (dnd-kit)',
      'Budget tracking with cost breakdown chart',
      'AI activity suggestions via Supabase Edge Function + Claude API',
      'Loading skeletons and confirmation dialogs',
      'Responsive layout with mobile nav',
    ],

    architecture:
      'The frontend is a React + TypeScript SPA built with Vite and structured around a feature-first folder layout. All Supabase calls are centralized in a single API module with camelCase/snake_case mappers keeping the app layer decoupled from the database schema. Auth state is managed via a useAuth hook that subscribes to Supabase session changes. Row Level Security policies enforce that users can only read and write their own data. AI suggestions are proxied through a Supabase Edge Function to keep the Anthropic API key server-side, with the function receiving the destination and existing activity titles to generate context-aware recommendations.',

    lessons:
      'Migrating from a self-hosted Express + MongoDB backend to Supabase mid-project reinforced how much architecture decisions early on affect flexibility later. RLS policies replace an entire auth middleware layer, and Edge Functions make it straightforward to add server-side AI calls without maintaining a separate backend service.',

    screenshots: [
      {
        src: '/images/projects/horizons/screen-01.png',
        alt: 'Horizons homepage with hero banner and travel itinerary cards grid',
      },
      {
        src: '/images/projects/horizons/screen-02.png',
        alt: 'Horizons trip detail page with cost breakdown donut chart and activity category stats',
      },
      {
        src: '/images/projects/horizons/screen-03.png',
        alt: 'Horizons day-by-day itinerary with budget tracker and activity timeline',
      },
      {
        src: '/images/projects/horizons/screen-04.png',
        alt: 'Horizons AI-powered activity suggestions modal with curated options for a destination',
      },
      {
        src: '/images/projects/horizons/screen-05.png',
        alt: 'Horizons edit itinerary form with title, destination, dates, budget, and cover image fields',
      },
      {
        src: '/images/projects/horizons/screen-06.png',
        alt: 'Horizons multi-day itinerary with activities listed chronologically per day',
      },
    ],
  },
  {
    id: 'setlist',
    slug: 'setlist',
    title: 'SetList',
    description:
      'A full-stack music festival planner with auth, festival discovery, per-stage schedule browsing, favorites, personal set-time planning, and real-time conflict detection.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'Tailwind CSS v4',
      'Radix UI',
      'shadcn/ui',
      'Framer Motion',
      'Hono',
      'Neon (PostgreSQL)',
      'Drizzle ORM',
      'Better Auth',
      'TanStack Query',
      'TanStack Table',
      'React Hook Form',
      'Zod',
      'Zustand',
      'date-fns',
      'Lucide Icons',
      'Sonner',
    ],
    image: '/images/projects/setlist.png',
    // liveUrl: 'https://setlist.app',
    codeUrl: 'https://github.com/tworoniak/new-festival-planner',
    featured: true,

    problem:
      'Festival-goers juggling multi-stage lineups across multiple days have no dedicated tool to browse schedules, track favorite artists, and build a personal plan — leaving them relying on PDFs, screenshots, and memory.',

    solution:
      'SetList centralizes festival discovery and schedule planning into a single app. Users browse festivals, explore per-stage set times by day, star favorite artists, and build a personal plan with automatic conflict detection when two sets overlap.',

    features: [
      'Auth with protected routes via Better Auth (email/password)',
      'Festival discovery grid with year filtering',
      'Full-bleed hero detail page per festival',
      'Per-stage schedule tabs with day selector for multi-day festivals',
      'Favorite artists persisted per user',
      'Personal plan builder with add/remove set times',
      'Real-time conflict detection when sets overlap across stages',
      'Plan sidebar — right panel on desktop, bottom drawer on mobile',
      'Light/dark mode with persisted preference',
      'Loading skeletons and toast notifications',
      'Admin CRUD panel for festivals, stages, artists, and sets',
      'Fully responsive mobile-first layout',
    ],

    architecture:
      'The frontend is a React + TypeScript SPA built with Vite, structured around a feature-first folder layout with pages, hooks, components, and stores separated by concern. Server state (festivals, plan, favorites) is managed via TanStack Query hooks with credentials-based session cookies. Client-only state (theme, optimistic UI) lives in Zustand stores persisted to localStorage. The backend is a Hono API server running on Node with route-level auth middleware powered by Better Auth sessions. All database access goes through Drizzle ORM against a Neon serverless PostgreSQL instance. The monorepo is organized as a pnpm workspace with a shared package exporting Zod schemas and TypeScript types consumed by both the frontend and API, keeping validation logic in sync across the stack.',

    lessons:
      "Building a monorepo from scratch with pnpm workspaces clarified how much friction shared types eliminate when the frontend and backend evolve together. Conflict detection as a pure function over plan items — comparing ISO time intervals — turned out to be the simplest and most testable part of the whole feature. Better Auth's drizzle adapter made session management feel native to the ORM layer rather than bolted on, though coordinating its required Zod v4 internals against the app's Zod v3 dependency required a targeted pnpm override to keep both working without interference.",

    screenshots: [
      {
        src: '/images/projects/setlist/screen-01.png',
        alt: 'SetList festival discovery homepage with search bar and festival cards',
      },
      {
        src: '/images/projects/setlist/screen-02.png',
        alt: 'SetList festival detail page with per-stage schedule and day selector tabs',
      },
      {
        src: '/images/projects/setlist/screen-03.png',
        alt: 'SetList festival schedule with personal plan sidebar open showing saved sets',
      },
    ],
  },
  {
    id: 'neurostack',
    slug: 'neurostack',
    title: 'NeuroStack',

    description:
      'A self-managing memory dashboard for Claude Code. Solves the blank-slate problem in agentic AI workflows by giving every session — and every parallel agent — shared, structured context. Reads and writes a directory of markdown memory files directly from the browser via the File System Access API, with a live file editor, multi-agent Kanban board, Overview dashboard, decisions timeline, gotchas registry, fuzzy full-text search, and a companion local MCP server that gives Claude agents schema-enforced memory tools instead of raw markdown writes.',

    tech: [
      'React',
      'TypeScript',
      'Vite',
      'CSS Custom Properties',
      'File System Access API',
      'Recharts',
      'react-markdown',
      'Fuse.js',
      'date-fns',
      'Node.js',
      'MCP SDK',
    ],

    image: '/images/projects/neurostack.png',
    // liveUrl: 'https://neurostack-gamma.vercel.app',
    codeUrl: 'https://github.com/tworoniak/neurostack',
    featured: true,

    problem:
      'Every Claude Code session starts with zero context. There is no memory of which branches are active, which bugs were solved yesterday, which architecture decisions were already made, or what other agents running in parallel are currently touching. The built-in MEMORY.md system has a 200-line cap, no structure, and no way to coordinate across multiple simultaneous agents — leading to constant re-explaining, re-solving known problems, and occasional silent overwrites between agents. Even with a structured memory directory, agents writing raw markdown frequently break formatting, produce malformed entries, or skip writes when crashing mid-session.',

    solution:
      'NeuroStack replaces the flat MEMORY.md file with a structured directory of purpose-built markdown files — a routing index, a live agent coordination file, per-project state files, a decisions log, a gotchas registry, and a rolling worklog. A Claude Code protocol enforces continuous writes during sessions rather than batch writes at the end, so parallel agents always see current state. The companion dashboard — a local Vite app using the File System Access API — surfaces this as a live UI with ten purpose-built views: an Overview dashboard with Recharts visualizations, a file editor, a multi-agent Kanban board, a decisions timeline, a gotchas registry, a project status board, an activity feed, an infrastructure view, a metrics display, and fuzzy full-text search. A local Node.js MCP server completes the system by exposing schema-enforced, atomic tools (e.g., append_worklog, add_decision) instead of raw markdown writes — eliminating formatting errors and providing graceful error handling. No cloud service, no database — just markdown files on disk, a browser reading them, and a sidecar process ensuring clean writes.',

    features: [
      'Overview Dashboard — Recharts visualizations: KPI strip (sessions, decisions, active agents), GitHub-style activity heatmap with drill-down, project activity bar chart, agent status donut, and decision velocity line chart',
      'File Editor — recursive file tree, dirty-state tracking, ⌘S to save, inline search with match cycling, file CRUD, navigation history, and MEMORY.md health badge',
      'Agent Tracker — Kanban board (Working / Blocked / Done), stale agent detection (>24h), protocol compliance checks, conflict detection, and worklog auto-drafting',
      'Timeline — chronological decisions/worklog feed with quick-add forms and worklog compaction for entries older than 30 days',
      'Gotchas View — searchable cards with symptoms, fixes, and resolution status plus quick-add form',
      'Decisions View — tag extraction, filter chips, deprecated status badges, and expandable card grid',
      'Project Board — parses project markdown files into Kanban columns with blockers and branch visibility',
      'Activity Feed — last 200 file changes with timestamps, line deltas, and click-to-open behavior',
      'Infra & Metrics Views — structured read-only infra + editable metrics with copy-to-clipboard support',
      'Global Search — Fuse.js fuzzy search across all memory files with contextual results',
      'Cross-project browser — fast switching between multiple memory directories',
      'MCP Server — local Node.js sidecar exposing schema-enforced tools with atomic writes and Zod validation',
      'Directory bootstrap — one-click creation of pre-filled memory templates',
      'MEMORY.md compaction tool — indexed entry management with rewrite support',
      'Configurable refresh interval — 2s / 4s / 10s / 30s / manual with localStorage persistence',
      'Session Guide — collapsible protocol walkthrough, re-triggerable from the UI',
    ],

    architecture:
      'NeuroStack is a zero-backend SPA built with Vite and React 18. The core primitive is the useMemoryFS hook, which wraps the File System Access API to open a directory, persist access via IndexedDB, recursively load markdown files into a Map, and expose typed read/write operations. A useFileWatcher hook polls on a configurable interval (default 4s, paused when hidden) to detect changes and drive the activity feed. The useSearch hook wraps Fuse.js with a memoized index rebuilt on file changes, returning grouped fuzzy matches with contextual lines. Parser modules (parseActiveWork, parseDecisions, parseWorklog, etc.) transform raw markdown into structured data for each view. The dashboard uses Recharts components with derived data from parsed sources. The MCP server is a separate Node.js package using @modelcontextprotocol/sdk over stdio, sharing parser logic as pure functions. All writes are atomic (.tmp → rename), and paths are validated to prevent traversal. Styling uses global CSS with custom properties — no CSS-in-JS or Tailwind — keeping the bundle minimal and theming straightforward.',

    lessons:
      'The key decision was making markdown the source of truth instead of internal state. Because all parsing operates on raw file strings, the system degrades gracefully when files are malformed or edited manually. Polling proved more reliable than filesystem observers for bursty agent writes. Writing the CLAUDE.md protocol alongside the app clarified system design and improved the dashboard’s information hierarchy. The MCP server was the most impactful addition post-MVP — replacing raw markdown writes with schema-enforced tools eliminated formatting bugs and made the system interoperable with any MCP-compatible agent. Keeping the MCP server as a separate package preserved a clean frontend bundle while reusing shared parsing logic.',

    screenshots: [
      {
        src: '/images/projects/neurostack/screen-01.png',
        alt: 'NeuroStack overview dashboard with file count, active agents, sessions logged, and activity charts',
      },
      {
        src: '/images/projects/neurostack/screen-02.png',
        alt: 'NeuroStack file editor showing an MCP server implementation plan with phased checklist',
      },
      {
        src: '/images/projects/neurostack/screen-03.png',
        alt: 'NeuroStack decisions log listing architectural decisions with timestamps',
      },
    ],
  },
  {
    id: 'job-tracker',
    slug: 'job-tracker',
    title: 'JobTrack',
    description:
      'A job tracking app built with React, GraphQL, and NestJS. Keep track of your job applications, interviews, and follow-ups in one place.',

    tech: [
      'React',
      'React Hook Form',
      'TypeScript',
      'Apollo Client',
      'Apollo Server',
      'NestJS',
      'Prisma',
      'GraphQL',
      'Recharts',
      'Zod',
      'TanStack Query',
      'Tailwind CSS',
      'Jest',
    ],

    image: '/images/projects/job-tracker.png',
    codeUrl: 'https://github.com/tworoniak/job-application-tracker',
    featured: true,

    problem:
      'Tracking a job search across spreadsheets, browser tabs, and memory is fragmented and lossy. There’s no lightweight tool purpose-built for developers that provides structured tracking, filtering, and visibility into your pipeline without requiring a paid subscription or a bloated ATS.',

    solution:
      'JobTrack is a full-stack GraphQL application that centralizes every application in one place — with a filterable table, outcome tracking across 9 statuses, salary range logging, interview scheduling, and a live dashboard showing your pipeline health at a glance.',

    features: [
      'Filterable, sortable applications table powered by TanStack Table v8 with server-side GraphQL queries',
      'Relay-style cursor pagination — stable under concurrent inserts, with Apollo fetchMore integration',
      'Dashboard with outcome breakdown (Recharts donut), weekly application volume chart, and upcoming interviews widget',
      'Create/edit forms with React Hook Form + Zod validation and localStorage draft auto-save on blur',
      'Optimistic UI for outcome changes — Apollo InMemoryCache updates instantly and rolls back on error',
      'Keyboard shortcuts: Cmd+K command palette, N to create, E to edit focused row, Delete with confirmation',
      'Bulk select with multi-delete and bulk status update',
      'NestJS code-first GraphQL backend with Prisma ORM and PostgreSQL via Supabase',
    ],

    architecture:
      'The backend is a NestJS monolith using code-first GraphQL via @nestjs/graphql — resolver classes decorated with @ObjectType and @Resolver define the schema, eliminating SDL sync overhead. Prisma handles all database access with a PostgreSQL instance hosted on Supabase. The frontend is a Vite + React 19 app in a pnpm monorepo alongside the API. Apollo Client 3 powers the data layer: queries use cache-and-network for the applications list and cache-first for detail pages, while mutations leverage optimisticResponse for instant updates with automatic rollback on error. Types flow end-to-end via graphql-codegen — .graphql operation files generate fully typed useQuery/useMutation hooks, so no GraphQL types are written manually. The application form lives on a dedicated route rather than a modal because the 10+ field form requires full vertical space and proper browser back-button navigation.',

    lessons:
      'Code-first GraphQL with NestJS decorators eliminated the SDL maintenance problem entirely — the TypeScript class is the schema, so drift is impossible. Investing in Apollo’s normalized InMemoryCache paid off immediately: updates feel instant without loading states, and rollback on error comes for free. Cursor-based pagination proved superior to offset — inserting new applications mid-browse never causes rows to shift or duplicate. The biggest friction point was initial codegen setup, but once configured, the generated typed hooks made every frontend query feel as safe as a REST client.',

    screenshots: [
      {
        src: '/images/projects/job-tracker/screen-01.png',
        alt: 'JobTrack dashboard with application stats, conversion funnel, and weekly applications chart',
      },
      {
        src: '/images/projects/job-tracker/screen-02.png',
        alt: 'JobTrack edit application form with company, position, location, status, and salary fields',
      },
      {
        src: '/images/projects/job-tracker/screen-03.png',
        alt: 'JobTrack applications list with status filters, sort controls, and application rows',
      },
    ],
  },

  {
    id: 'dashtrack',
    slug: 'dashtrack',
    title: 'DashTrack',
    description:
      'A personal finance tracker built for DoorDash drivers. Manages the full lifecycle of gig earnings and deductible expenses — from per-dash income logging to IRS mileage calculations — with a live dashboard, monthly reports, and quarterly self-employment tax estimates.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'SCSS Modules',
      'Supabase',
      'React Query',
      'React Hook Form',
      'Zod',
      'React Router v6',
      'Recharts',
    ],
    image: '/images/projects/dashtrack.png',
    // liveUrl: 'https://your-dashtrack-deployment.vercel.app',
    codeUrl: 'https://github.com/tworoniak/dashtrack',
    featured: true,

    problem:
      'Gig economy drivers have no clear picture of what they actually earn after costs. DoorDash surfaces gross pay, but the real number — net profit after gas, mileage, maintenance, and phone expenses — lives across fuel receipts, the Dasher app, and a mental running total. At tax time, drivers scramble to reconstruct months of mileage logs and expense records, often missing deductions they were entitled to.',

    solution:
      'DashTrack gives DoorDash drivers a single place to log earnings and expenses as they happen, with the calculations done automatically. Gas fill-ups auto-compute total cost from gallons and price per gallon. Mileage entries apply the current IRS standard rate ($0.70/mi for 2025) on the spot and store the deductible amount directly. The dashboard surfaces the four numbers that matter most — gross earnings, total expenses, net profit, and effective hourly rate — across any time window. A monthly reports view breaks the year down into a Schedule C-ready table with CSV export, and a tax estimate page computes quarterly SE tax payments from actual YTD data.',

    features: [
      'Log entry forms for five expense types — earnings, gas (auto-calculates total from gallons × price), mileage (live IRS deduction preview), maintenance, and other — all with React Hook Form + Zod validation',
      'Dashboard KPI strip: gross earnings, total expenses, net profit, and effective $/hr across Day / Week / Month / YTD periods',
      'Earnings vs expenses bar chart by day powered by Recharts, filtered per selected period via React Query cache keys',
      'Expense breakdown panel with proportional bars per category — gas, mileage deduction, maintenance, other',
      'Recent entries table with type-coded badges, signed amounts, and timestamps across all entry types',
      'Full earnings history page with paginated table (20/page), inline edit rows, and delete with confirmation dialog',
      'Monthly reports page — YTD summary strip, full monthly breakdown table with per-category expense columns, totals row, and one-click CSV export for both earnings and expenses (Schedule C ready)',
      'Tax estimate calculator — pulls live YTD net profit, accepts other income and filing status, computes SE tax base at 92.35%, 15.3% SE tax, 50% SE deduction, federal bracket tax, and quarterly payment breakdown with IRS due dates',
      'Magic link (passwordless) authentication via Supabase Auth OTP',
      'Row Level Security on all tables — every user sees only their own data, enforced at the database level',
    ],

    architecture:
      'DashTrack is a single-page application built with Vite and React 18, using React Router v6 for client-side routing and a session-aware AuthGuard in App.tsx that redirects unauthenticated users to the login page. The app follows a feature-based folder structure — dashboard, log, and UI components are independently scoped with co-located SCSS modules. Server state is managed entirely with TanStack React Query v5; dedicated hooks per domain (useDashboard, useReports, useLogEntry, useEntryActions) wrap Supabase queries and expose typed mutation functions. The useDashboard hook accepts a Period parameter and computes all KPIs — gross earnings, net profit, effective hourly rate, expense breakdown, and daily chart series — from raw Supabase rows client-side using pure utility functions, keeping query keys cache-isolated per period. useLogEntry exposes five separate mutation hooks, each responsible for transforming its form schema into the correct Supabase insert shape — the gas hook computes total cost, the mileage hook applies IRS_MILEAGE_RATE_2025 and stores the deductible amount. Edit and delete mutations live in useEntryActions and invalidate shared query keys on success. Supabase Postgres stores data in two tables — earnings and expenses — with a custom expense_type enum and Row Level Security policies scoped to auth.uid(). Styling uses modular SCSS with a CSS custom property token layer (_tokens.scss) that handles both light and dark mode via prefers-color-scheme, keeping all color references out of component files.',

    lessons:
      'DashTrack reinforced that computed values belong as close to the data source as possible. Early on, KPI calculations were scattered across components; consolidating them into pure utility functions (computeKpis, computeExpenseBreakdown, buildDailySeries) that take raw Supabase rows as input made both testing and reuse across the dashboard and reports views trivial. The mileage entry pattern — storing both the raw miles and the computed deductible_amount at write time rather than deriving it at read time — turned out to be the right call: the IRS rate can change year to year, and historical entries should reflect the rate that was active when they were logged, not the current one. The tax estimate page highlighted a meaningful design constraint: the calculator pulls live YTD net profit from the same useReports hook used by the reports page, which meant its accuracy is directly tied to how diligently the driver logs expenses throughout the year — a useful prompt to surface in the UI.',

    screenshots: [
      {
        src: '/images/projects/dashtrack/screen-01.png',
        alt: 'DashTrack dashboard with KPI overview',
      },
      {
        src: '/images/projects/dashtrack/screen-02.png',
        alt: 'DashTrack log entry form for gas expenses',
      },

      {
        src: '/images/projects/dashtrack/screen-03.png',
        alt: 'DashTrack earnings breakdown view',
      },
      {
        src: '/images/projects/dashtrack/screen-04.png',
        alt: 'DashTrack expense breakdown view',
      },
      {
        src: '/images/projects/dashtrack/screen-05.png',
        alt: 'DashTrack tax estimate calculator',
      },
    ],
  },
  {
    id: 'accreditor',
    slug: 'accreditor',
    title: 'Accreditor',
    description:
      'A multi-user concert photography accreditation tracker built for Antihero Magazine. Manages the full lifecycle of photo pit requests — from initial PR outreach to post-shoot gallery delivery — across a shared team of photographers.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'Supabase',
      'React Query',
      'React Hook Form',
      'Zod',
      'React Router v6',
      'Lucide React',
    ],
    image: '/images/projects/accreditor.png',
    // liveUrl: 'https://your-accreditor-deployment.vercel.app',
    codeUrl: 'https://github.com/tworoniak/accreditor',
    featured: true,

    problem:
      'Concert photographers at editorial publications manage accreditation entirely through email threads, browser bookmarks, and memory — tracking which shows have been requested, which PR contacts to follow up with, what the pit restrictions are, and whether galleries have been delivered. With multiple photographers working across dozens of shows a month, things get missed: deadlines pass, contacts get duplicated, and there is no shared visibility across the team.',

    solution:
      'Accreditor gives the full Antihero Magazine photography team a shared, org-scoped accreditation CRM. Shows, PR contacts, and request templates are shared resources across the team. Each show has its own accreditation pipeline — photographers can log requests, track status across nine stages, record pit restrictions after approval, and attach Cloudinary or Dropbox gallery links once images are delivered. A dashboard surfaces approval rates, upcoming deadlines, and recent activity at a glance. All data is isolated per organisation via Supabase Row Level Security, making the app multi-tenant ready.',

    features: [
      'Kanban-style accreditation pipeline with drag-and-drop status updates across 9 stages — Upcoming, Drafted, Submitted, Awaiting Response, Granted, Rejected, Waitlisted, Shot, No Show',
      'Show management with upcoming/past split, per-show detail pages, and direct accreditation request creation from each show',
      'PR contact book — shared org-wide directory with search, email/phone/company fields, and response rate tracking',
      'Request templates with {{token}} interpolation for artist, venue, city, show date, and publication — preview modal included',
      'Deadline tracking with urgency indicators — amber at 3 days out, red at deadline — surfaced on both pipeline cards and the dashboard',
      'Post-approval fields — pit restrictions (first 3 songs, no flash, etc.) and gallery URL stored per request',
      'Dashboard with approval rate stat, 6-month stacked bar chart, status breakdown, upcoming deadlines panel, recent activity feed, and top PR contacts by approval rate',
      'Multi-user org-scoped access — all data isolated by organisation_id via Supabase RLS, photographers share shows/contacts/templates',
      'Magic link (passwordless) authentication via Supabase Auth OTP',
      'Auto-assignment of organization_id on all inserts via Postgres trigger — client never needs to pass it explicitly',
    ],

    architecture:
      "Accreditor is a single-page application built with Vite and React 18, using React Router v6 for client-side routing and a custom AuthGuard for protected routes. The app follows a feature-based folder structure — each domain (shows, requests, contacts, templates, dashboard) owns its components and forms independently. Server state is managed entirely with TanStack React Query v5, with dedicated hooks per resource (useShows, useRequests, useContacts, useTemplates) that wrap Supabase queries and expose typed mutation functions. Auth is split across three files to satisfy React Fast Refresh rules — AuthContext.ts for the context object, AuthProvider.tsx for the component, and useAuth.ts for the hook. Supabase Postgres stores all data across six tables, with Row Level Security policies scoped to organization_id via a get_my_org_id() helper function. A before-insert trigger auto-populates organization_id on every table from the authenticated user's profile, keeping the client-side code clean. Styling uses Tailwind CSS v4 with a custom @theme block in index.css replacing the v3 config file. Forms use React Hook Form with Zod schemas for validation throughout.",

    lessons:
      'Accreditor surfaced several version-specific integration issues in quick succession. Tailwind v4 ships with a fundamentally different configuration model — the tailwind.config.ts is replaced by an @theme block in CSS, and the PostCSS plugin moved to @tailwindcss/postcss. Supabase\'s auth trigger system runs in the auth schema context, which cannot resolve public schema tables without explicit public. prefixes — a subtle issue that produced a generic "Database error saving new user" with no clear indication of the cause. React Fast Refresh enforces strict file-level purity rules that required splitting the auth layer into three separate files (context, provider, hook) and extracting status constants from utils.ts into a dedicated constants.ts. These were all solvable but reinforced the importance of checking schema search paths in Postgres triggers, reading Tailwind v4 migration notes before assuming v3 patterns apply, and understanding Fast Refresh constraints when mixing hooks and components in the same file.',

    screenshots: [
      {
        src: '/images/projects/accreditor/screen-01.png',
        alt: 'Accreditor dashboard with accreditation stats, activity chart, deadlines, and recent activity',
      },
      {
        src: '/images/projects/accreditor/screen-02.png',
        alt: 'Accreditor shows list with upcoming show card and add-show dialog open',
      },
      {
        src: '/images/projects/accreditor/screen-03.png',
        alt: 'Accreditor PR contacts list with add-contact dialog open',
      },
    ],
  },
  {
    id: 'press-portal',
    slug: 'press-portal',
    title: 'PressPilot',
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
    problem:
      'Managing press contacts, outreach, and follow-ups across emails, notes, and spreadsheets leads to fragmented workflows and missed opportunities.',

    solution:
      'PressPilot provides a centralized CRM for managing media contacts, tracking interactions, and organizing relationships with bands and festivals in one streamlined interface.',

    features: [
      'Contact management with detailed profiles (role, company, location, tags)',
      'Interaction timeline for emails, calls, DMs, and notes',
      'Band and festival relationship tracking',
      'Follow-up scheduling and outreach status tracking',
      'Searchable, scalable contact database',
      'Responsive UI optimized for desktop and mobile workflows',
    ],

    architecture:
      'The application is built as a full-stack TypeScript monorepo using React + Vite on the frontend and NestJS with Prisma on the backend. The frontend follows a modular, component-driven architecture with reusable UI primitives (Button, Modal, Avatar, Chip) and feature-based organization for scalability. Server state is managed with React Query, enabling efficient caching, optimistic updates, and mutation handling. The backend exposes a REST API backed by PostgreSQL, with Prisma providing type-safe database access and schema migrations. Relationships between contacts, bands, festivals, and interactions are modeled relationally, allowing flexible querying and future analytics. The system is designed to evolve toward a GraphQL layer and richer data insights over time.',

    lessons:
      'This project reinforced the importance of designing flexible data models for relationship-driven systems, as well as building reusable UI components to maintain consistency and scalability across a growing application. It also highlighted the value of separating concerns between data fetching, state management, and presentation layers in a modern React architecture.',

    screenshots: [
      {
        src: '/images/projects/press-pilot/screen-01.png',
        alt: 'PressPilot sign-in page with email and password form',
      },
      {
        src: '/images/projects/press-pilot/screen-02.png',
        alt: 'PressPilot dashboard with follow-up stats, interactions chart, and recently contacted list',
      },
      {
        src: '/images/projects/press-pilot/screen-03.png',
        alt: 'PressPilot contacts list with search filters and follow-up status badges',
      },
      {
        src: '/images/projects/press-pilot/screen-04.png',
        alt: 'PressPilot follow-ups list filtered by status with subject and outcome columns',
      },
      {
        src: '/images/projects/press-pilot/screen-05.png',
        alt: 'PressPilot bands directory with genre, country, and website details',
      },
      {
        src: '/images/projects/press-pilot/screen-06.png',
        alt: 'PressPilot festivals directory with location and date range entries',
      },
      {
        src: '/images/projects/press-pilot/screen-07.png',
        alt: 'PressPilot bands page with quick-add band modal open',
      },
      {
        src: '/images/projects/press-pilot/screen-08.png',
        alt: 'PressPilot dashboard with command palette open showing quick navigation actions',
      },
      {
        src: '/images/projects/press-pilot/screen-09.png',
        alt: 'PressPilot contact detail page with interaction timeline and band/festival tags',
      },
    ],
  },
  {
    id: 'dev-flow',
    slug: 'dev-flow',
    title: 'DevFlow',
    description:
      'DevFlow is a modern SaaS-style engineering dashboard built with React, TypeScript, and Vite. It is designed for development leads and engineering teams to manage tasks, monitor team workload, visualize skill profiles, and generate skill-based task assignment recommendations. The project showcases a scalable frontend architecture with persistent global state, reusable accessible UI components, interactive data visualization, and a weighted scoring allocation engine.',
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
      'Lucide React',
      'Tailwind Merge',
      'Vitest',
    ],
    image: '/images/projects/dev-flow.png',
    // liveUrl: 'https://team-management-seven-blond.vercel.app',
    codeUrl: 'https://github.com/tworoniak/team-management',
    featured: true,

    problem:
      'Development leads need visibility into team workload, task status, and delivery priorities, but that information is often scattered across disconnected tools or buried in ticket lists. It can be difficult to quickly understand who has capacity, which work is blocked or overdue, and who is the best fit to take on backlog tasks.',

    solution:
      'DevFlow provides a centralized engineering operations dashboard that combines task management, team workload tracking, interactive analytics, and a recommendation engine for skill-based task assignment. Tasks can be searched and filtered by status, and overdue work is surfaced automatically. By bringing these views together into a single persistent interface, the app helps development leads make faster, more informed decisions about planning, prioritization, and team capacity.',

    features: [
      'Interactive engineering dashboard with live task and workload metrics',
      'Task CRUD with priority, status, assignee, tags, required skills, and overdue detection',
      'Text search across tasks by title, assignee, or tag, with combined status filter support',
      'Team member CRUD with availability, workload, role, and full 14-skill assessments',
      'Task status distribution and priority overview charts built with Recharts',
      'Radar chart visualizing all 14 skills per team member including frontend and backend competencies',
      'AI-style allocation engine that recommends the best assignee based on skill match, availability, workload, and role fit',
      'Persistent global state with Zustand and localStorage so data survives page reloads',
      'Accessible modal system with focus trap, Escape key handling, and ARIA attributes',
      'Empty states and contextual CTAs across task and team views',
      'Reusable form system powered by React Hook Form and Zod with full type coercion',
      'Modern SaaS UI with sidebar navigation, dark theme, and a consistent design system',
    ],

    architecture:
      'DevFlow is a frontend-first single-page application built with Vite, React, and TypeScript, using React Router for client-side routing and a feature-based folder structure to keep domains like dashboard, tasks, team, and allocation isolated and scalable. Global application data is managed with Zustand stores wrapped with the persist middleware so task and team state is preserved across sessions. Type safety is enforced from the ground up — TEAM_ROLES and SKILL_KEYS are runtime constants from which all related TypeScript types are derived, ensuring the type system and application logic share a single source of truth. Data mapping between form values and store models is centralized in lib/transforms.ts. Forms use React Hook Form with Zod validation and explicit valueAsNumber coercion for numeric fields. Recharts handles all data visualization with metrics derived through typed utility functions. The UI component library is built on Tailwind CSS with a twMerge-based cn() utility for conflict-safe class composition. The allocation engine is a pure scoring utility that evaluates backlog tasks against team members using weighted factors including skill alignment, availability, workload, and role relevance. The project includes a Vitest test suite covering the allocation engine and analytics utilities.',

    lessons:
      'This project reinforced the value of feature-based architecture and shared persistent state when building dashboard-style applications with multiple connected views. Deriving TypeScript types from runtime constants rather than maintaining parallel definitions eliminated an entire class of type drift bugs. Building the allocation engine was a good exercise in translating product thinking into scoring logic. The accessibility work — particularly implementing a proper focus trap and keyboard navigation pattern — highlighted how much functional behavior is missing from visually correct modals. Writing tests for the pure utility functions first made it easier to reason about the scoring logic and catch edge cases in the allocation engine before they appeared in the UI.',

    screenshots: [
      {
        src: '/images/projects/dev-flow/screen-01.png',
        alt: 'DevFlow engineering dashboard with live task and workload metrics',
      },
      {
        src: '/images/projects/dev-flow/screen-02.png',
        alt: 'DevFlow task management view with priority, status, and overdue indicators',
      },
      {
        src: '/images/projects/dev-flow/screen-03.png',
        alt: 'DevFlow team management view with member profiles and skill radar charts',
      },
      {
        src: '/images/projects/dev-flow/screen-04.png',
        alt: 'DevFlow engineering projects view with live task and workload metrics',
      },
      {
        src: '/images/projects/dev-flow/screen-05.png',
        alt: 'DevFlow task management view with priority, status, and overdue indicators',
      },
      {
        src: '/images/projects/dev-flow/screen-06.png',
        alt: 'DevFlow team management view with member profiles and skill radar charts',
      },
    ],
  },
  {
    id: 'photography-portfolio',
    slug: 'photography-portfolio',
    title: 'Photography Portfolio',
    description:
      'A concert photography portfolio featuring masonry galleries, lightbox viewing, Cloudinary-optimized image delivery, and an animated header navigation.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'Tailwind CSS',
      'Framer Motion',
      'Cloudinary',
    ],
    image: '/images/projects/photography-portfolio.png',
    liveUrl: 'https://photography-portfolio-iota-eight.vercel.app',
    codeUrl: 'https://github.com/tworoniak/photography-portfolio',
    featured: true,

    problem:
      'Concert photographers need a portfolio that loads high-resolution images fast, presents them in a visually compelling layout, and works well on both desktop and mobile — without the overhead of a CMS or backend.',

    solution:
      'Built a React SPA backed by static TypeScript data files and Cloudinary for optimized image delivery. All gallery content lives in typed data files, making it straightforward to add new shoots. React Photo Album handles masonry layout with known aspect ratios, and Yet Another React Lightbox provides full-screen viewing with keyboard navigation.',

    features: [
      'Masonry gallery grid with per-image shimmer skeletons and fade-in on load',
      'Full-screen lightbox with caption display and keyboard navigation',
      'Animated header nav — Framer Motion spring indicator tracks the active route via DOM measurement',
      'Concert galleries filterable by band name and sorted newest-first by date',
      'Featured images and magazine tear sheets pages',
      'Contact / booking form via Formspree with success and error states',
      'Open Graph and Twitter Card meta tags with per-route og:title and canonical URL sync',
      'Responsive mobile design with animated slide-in nav panel',
    ],

    architecture:
      "The site is a client-side SPA deployed on Vercel with a single rewrite rule routing all paths to index.html. All photo data is static TypeScript in src/data/ — galleries are keyed by band slug, making dynamic routes trivial. Images are served from Cloudinary via a cldImage() utility that constructs optimized URLs with auto quality and format. The header nav indicator uses a DOM measurement pattern: a single motion.span sits outside all NavLinks and animates its x position and width to match the active item's getBoundingClientRect(), with a ResizeObserver ensuring accuracy after layout changes. A class-based ErrorBoundary wraps the app root to catch render errors gracefully.",

    lessons:
      "Separating content from presentation through static data files paid off immediately — adding a new gallery is a single data file edit with zero component changes. The DOM measurement approach for the nav indicator is more reliable than layoutId for elements with variable spacing, since it works off actual rendered positions rather than React's reconciler. Cloudinary's on-the-fly transforms (auto quality, format, and crop) removed the need for any manual image processing pipeline.",

    screenshots: [
      {
        src: '/images/projects/photo-portfolio/screen-01.png',
        alt: 'Photography portfolio homepage hero with full-bleed concert photo and site title',
      },
      {
        src: '/images/projects/photo-portfolio/screen-02.png',
        alt: 'Photography portfolio homepage with stats bar and featured work masonry grid',
      },
      {
        src: '/images/projects/photo-portfolio/screen-03.png',
        alt: 'Photography portfolio published-in section with media outlet logos and services offered',
      },
      {
        src: '/images/projects/photo-portfolio/screen-04.png',
        alt: 'Photography portfolio gallery page with Suicidal Tendencies concert photo grid',
      },
    ],
  },
  {
    id: 'lumina',
    slug: 'lumina',
    title: 'Lumina',
    description:
      'A long-form editorial photography platform built for immersive photo essays. Each story combines cinematic parallax heroes, scroll-driven chapter reveals, embedded audio, and behind-the-shot callouts — dark-themed, digital magazine energy.',
    tech: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'Framer Motion',
      'React Router',
      'Cloudinary',
    ],
    image: '/images/projects/lumina.png',
    // liveUrl: 'https://photo-storytelling.vercel.app',
    codeUrl: 'https://github.com/tworoniak/photo-storytelling',
    featured: true,

    problem:
      'Most photography portfolios are static grids — they display images but strip away context, atmosphere, and the story behind the shot. There was no lightweight, editorial-grade format for publishing long-form photo essays with motion and depth.',

    solution:
      'Lumina is a scroll-driven story reader built around a composable block system. Each story is authored as a sequence of typed blocks — prose, single images, split-sticky chapters, horizontal galleries, audio, and behind-the-shot callouts — rendered into a cinematic, magazine-quality reading experience.',

    features: [
      'Full-viewport parallax hero with responsive Cloudinary srcset',
      'Six story block types: text, image, behind-the-shot, audio, split-sticky, horizontal gallery',
      'Desktop TOC sidebar with IntersectionObserver active-section tracking',
      'Story index with search and URL-based tag / year / location filters',
      '3D tilt image cards with Framer Motion spring physics',
      'Lightbox with focus trap and preloaded adjacent images',
      'Scroll-aware site header that transitions from transparent to solid',
      'Estimated read time computed from story word count',
    ],

    architecture:
      "Stories are authored as plain TypeScript objects in src/data/stories.ts — a typed CMS with no backend. Each story's blocks array drives the reader: StoryPage maps over blocks and delegates to the appropriate component (StoryImage, StorySplitSticky, StoryHorizontalGallery, etc.), keeping the renderer stateless and each block component fully self-contained. Images are served via a thin Cloudinary URL helper (cldImage / cldSrcSet) that builds transformation URLs at build time — no SDK, no runtime dependency. Scroll animations are driven by Framer Motion's useScroll + useTransform hooks, scoped to individual section refs so parallax layers are independent and composable. The lightbox is a React context with a focus trap implemented using refs — no external library.",

    lessons:
      "Designing a block-based content model up front made every new feature — read time, TOC, accessibility labels — straightforward to add without touching the reader logic. The biggest gotcha was CSS Grid's min-width: auto default: a 1fr column containing a wide child (sticky image, horizontal gallery) would overflow the page; adding min-w-0 to the grid item was the fix.",

    screenshots: [
      {
        src: '/images/projects/lumina/screen-01.png',
        alt: 'Lumina homepage with cinematic hero section',
      },
      {
        src: '/images/projects/lumina/screen-02.png',
        alt: 'Lumina stories index with image cards and filters',
      },
      {
        src: '/images/projects/lumina/screen-03.png',
        alt: 'Lumina story reader with split-sticky chapter layout',
      },
      {
        src: '/images/projects/lumina/screen-04.png',
        alt: 'Lumina homepage with full-bleed concert photo hero and featured stories section',
      },
    ],
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
    id: 'cartograph',
    slug: 'cartograph',
    title: 'Cartograph',
    description:
      "A US states choropleth map renderer built entirely in pure SVG — no Mapbox, no Google Maps, no Leaflet. Converts TopoJSON to SVG paths using D3's Albers USA projection, with zoom and pan, click-to-focus animation, hover tooltips, animated metric transitions, state abbreviation labels, and a Top 5 / Bottom 5 rank panel.",
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'd3-geo',
      'd3-scale',
      'd3-zoom',
      'd3-transition',
      'topojson-client',
    ],
    image: '/images/projects/cartograph.png',
    liveUrl: 'https://cartograph-ten.vercel.app',
    codeUrl: 'https://github.com/tworoniak/cartograph',
    experiment: true,

    problem:
      'Most developers treat maps as a black box — drop in a Mapbox token and render tiles. This abstracts away everything interesting: geographic projections, coordinate systems, path generation, and color scales that meaningfully represent data. The result is developers who can use map libraries but cannot reason about what they are doing.',

    solution:
      'Build every layer from scratch using individual D3 packages. TopoJSON is fetched from the us-atlas CDN and converted to GeoJSON client-side. The Albers USA projection maps lat/lng to SVG x/y coordinates. geoPath generates SVG path d attributes from GeoJSON polygons. A square root color scale maps population and unemployment data to D3 color interpolators. D3 zoom handles pan and zoom with React state tracking the transform. The result is a fully interactive choropleth with zero map tile dependencies.',

    features: [
      'Pure SVG choropleth — all 50 states rendered as <path> elements from GeoJSON polygons, no map tiles or external map APIs',
      'Albers USA projection — geoAlbersUsa() maps geographic coordinates to SVG x/y, correctly repositioning Alaska and Hawaii',
      'Square root color scale — scaleSequentialSqrt compresses the population range so mid-range states are visible rather than washed out by California and Texas',
      'Two metrics — Population (blue scale) and Unemployment Rate (orange scale) with animated fill transitions between them',
      'Zoom and pan — D3 zoom behavior applied to SVG, scale extent 0.8–8×, border stroke widths divide by zoom scale to stay visually consistent',
      'Click to focus — geoPath.bounds() computes feature bounding box, calculates scale and translation to center it, animates over 750ms via d3-transition',
      'State abbreviation labels — SVG <text> at geoPath.centroid(), zoom-aware font size, luminance-based contrast color, small states hidden below 2× zoom',
      'Hover tooltips and state detail panel showing rank, vs-average comparison, and all metrics',
      'Top 5 / Bottom 5 rank list with proportional bar indicators, updates instantly on metric switch, clicking a row focuses the map',
    ],

    architecture:
      'The geographic pipeline runs fetch → topojson-client feature() → geoAlbersUsa projection → geoPath path generation → scaleSequentialSqrt coloring. D3 zoom behavior fires on scroll/drag and updates a ZoomTransform { x, y, k } in React state, applied to a single <g> group transform attribute so all paths move together without individual re-renders. Click-to-focus uses geoPath.bounds() to get SVG-space bounding box coordinates, computes the required scale as 0.9 / max((x1-x0)/WIDTH, (y1-y0)/HEIGHT), and builds a zoomIdentity transform that is applied via d3-transition. Label contrast uses the same luminance-based algorithm as the Chromatic project — getLuminance(fill) > 0.179 selects dark or light text, correctly handling mid-range hues. Individual D3 packages are used rather than the full bundle to minimize bundle size.',

    lessons:
      'The D3/TypeScript integration was the most frustrating part — D3 zoom types use Selection<Element> internally but select(svgRef.current) returns Selection<SVGSVGElement>, which are incompatible in TypeScript despite working at runtime. The as never cast on the transition call is the accepted workaround for this known D3 typing limitation. The FIPS matching issue revealed that us-atlas includes US territories (FIPS 60, 66, 69, 72, 78) without state data equivalents — rendering them in default gray is the correct cartographic treatment. The square root scale decision came from observing the linear scale in practice: with a linear scale every state except California and Texas renders near-white because the population range is too extreme. Square root compression is the standard cartographic solution and was the right call here.',
  },

  {
    id: 'chatgpt-archive-viewer',
    slug: 'chatgpt-archive-viewer',
    title: 'ChatGPT Archive Viewer',
    description:
      'A privacy-first utility for browsing exported ChatGPT conversation history entirely in the browser. Drop in a conversations.json file and get a clean, searchable interface with full-text search, inline term highlighting, fenced code block rendering, and one-click export to Markdown or plain text. No server, no uploads, no tracking.',
    tech: ['React', 'TypeScript', 'Vite', 'SCSS Modules'],
    image: '/images/projects/chatgpt-archive-viewer.png',
    liveUrl: 'https://chatgpt-archive-viewer.vercel.app',
    codeUrl: 'https://github.com/tworoniak/chatgpt-archive-viewer',
    experiment: true,

    problem:
      "ChatGPT's data export is a single JSON file — technically complete, but completely unusable. The mapping format stores messages as a non-linear graph of nodes with parent and children references, not a readable array. There is no built-in way to search across conversations, jump to a specific thread, or extract a conversation into a portable format. The data exists but is effectively inaccessible without tooling.",

    solution:
      'Build a lightweight client-side viewer that parses the raw export format into a navigable interface. The core challenge is the mapping traversal — finding the root node, following children recursively, and filtering out system messages and null content to produce a clean flat thread. On top of that: a controlled search input that filters the list and highlights matches inline, a code block renderer that detects fenced blocks in assistant messages and wraps them with a language label and clipboard copy, and a Blob-based export that produces clean Markdown or plain text with no extra dependencies.',

    features: [
      'Drag-and-drop file input with FileReader — conversations.json is parsed client-side with no upload or network request',
      'Recursive mapping traversal — finds the root node, walks children depth-first, and filters null messages and system turns to produce a clean flat thread per conversation',
      'Full-text search across conversation titles and all message content — results update on every keystroke via useMemo',
      'Inline search term highlighting — regex splits message content around matches and wraps them in <mark> without re-rendering the full message list',
      'Fenced code block detection — assistant message content is split into prose and code segments, with code rendered as <pre><code> with a language label and one-click clipboard copy',
      'Export to .md and .txt via Blob and object URL — no server, no library, generates a download directly from the parsed conversation',
      'localStorage persistence via a generic useLocalStorage<T> hook — restores the last-opened conversation on reload, with graceful fallback if the ID no longer exists in the loaded file',
    ],

    architecture:
      'The parser lives in src/utils/parseConversations.ts and is entirely decoupled from React — pure functions that take the raw ChatGPTConversation[] and return a flat ParsedConversation[]. The mapping traversal finds the root node by looking for parent: null, then walks children recursively, skipping null messages and system-role turns. useConversations owns all runtime state — raw conversations, search query, and selected ID — and derives the filtered list and selected conversation via useMemo so no filtering logic leaks into components. The code block renderer in parseMessageContent.tsx splits raw content with a fenced block regex, maps segments to either a plain text span (with optional highlight wrapping) or a CodeBlock component, and returns a ReactNode — keeping MessageBubble responsible only for layout. The useLocalStorage hook is fully generic and reusable across the portfolio. Export utilities are pure functions that build a string from a ParsedConversation and trigger a download via Blob + URL.createObjectURL with no side effects beyond the anchor click.',

    lessons:
      "The most instructive part was the mapping format. ChatGPT's export stores conversations as a graph to support branching — a user can edit a message and fork the thread, producing multiple children from one node. The current traversal always follows children[0], which reconstructs the canonical thread but silently drops branches. That limitation is worth documenting and is the natural next feature — detecting multi-child nodes and offering a branch selector. The code block renderer surfaced a subtle HTML constraint: a <p> element cannot contain block-level children like <pre>, so the MessageBubble content wrapper had to change from <p> to <div>. Small fix, but the kind of thing that only shows up when you stop treating the DOM as abstract and start reading what the browser actually enforces.",
  },
  {
    id: 'palette-forge',
    slug: 'palette-forge',
    title: 'PaletteForge',
    description:
      'PaletteForge is a Coolors-inspired color palette generator built with React and TypeScript, featuring harmony-based palette generation, color locking, accessibility checks, and export tools for modern design workflows.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Sass (SCSS)',
      'Chroma JS',
      'Zustand',
      'Lucid React',
    ],
    image: '/images/projects/palette-forge.png',
    // liveUrl: 'https://your-physica.vercel.app',
    codeUrl: 'https://github.com/tworoniak/palette-forge',
    experiment: true,

    // problem:
    //   'Most UI animations use static easing curves — ease-in, ease-out, cubic-bezier — which feel mechanical because they specify duration and shape rather than physical properties. Physics-based animation is fundamentally different: you define mass, stiffness, and damping, and the motion emerges from those values. The difference is immediately perceptible but rarely demonstrated in a way that makes the underlying mechanics tangible.',

    // solution:
    //   'Build a two-section playground and demo app where every interaction is driven by real physics parameters. Three draggable cards with meaningfully different spring configurations make the mass/stiffness/damping tradeoffs immediately tangible. A magnetic button, gravity field, spring menu, liquid button, wobbly tilt card, and ripple stack each isolate a different physics primitive. The particle background — 80 particles with connection lines and mouse repulsion — is built entirely from scratch on Canvas to contrast with the Framer Motion spring layer.',

    // features: [
    //   'Three draggable card variants with distinct spring configs — free throw (low mass, full momentum), elastic tether (low damping, snaps to origin), and heavy mass (mass=4, slow overshoot) — making stiffness/damping/mass differences immediately tangible',
    //   'Magnetic buttons with cursor attraction — mouse position relative to button center drives independent spring offsets on container and label, creating a parallax pull effect',
    //   'Gravity field — five spring balls with mass-weighted fall speeds, toggle on to drop, toggle off to spring back to resting positions',
    //   'Spring stagger menu with AnimatePresence — items enter with staggered spring delays and exit in reverse order',
    //   'Liquid button — coordinated useSpring values for scaleX, scaleY, and borderRadius produce a squish-and-stretch sequence on press',
    //   'Wobbly 3D tilt card — useTransform maps drag position to rotateX/rotateY and glare position with no React re-renders between gesture and visual response',
    //   'Ripple fan stack — four cards spring-fan on hover using motion variants with staggered delays',
    //   '80-particle Canvas system built from scratch — connection lines within 120px, mouse repulsion within 100px, wrapping at viewport edges, 60fps via requestAnimationFrame',
    //   'Custom cursor trail — spring-following ring and 12-dot fading trail using AnimatePresence opacity/scale exit animations',
    // ],

    // architecture:
    //   'The particle system lives entirely outside React in src/lib/particles.ts — pure functions for createParticle, updateParticle, and drawParticles. The useParticles hook owns the Canvas context, rAF loop, and mouse tracking via refs, never touching React state during the animation loop. The spring layer uses Framer Motion useMotionValue and useSpring as the reactive primitive — useTransform derives rotateX, rotateY, and glare position from drag values without any setState or useEffect. The three DraggableCard variants share a single component with a variant prop that selects from a SPRING_CONFIGS map, keeping the physics parameters explicit and comparable. The elastic return is handled by resetting motion values to zero in onDragEnd and letting the spring animate back — removing the need for dragConstraints refs which caused getBoundingClientRect errors on null elements.',

    // lessons:
    //   'The dragConstraints ref bug was the most instructive error — Motion tries to measure the constraint container before it mounts, causing a null getBoundingClientRect. Removing the ref and using onDragEnd to reset motion values to zero was cleaner anyway, because it decouples the drag gesture from the return animation and lets the spring config control the snap-back feel independently. The particle system reinforced why Canvas is the right tool for high-frequency graphics — 80 particles with connection lines at 60fps in React DOM would mean 80+ component re-renders per frame. On Canvas it is a clearRect and a set of draw calls with no component tree involvement. useTransform was the most powerful Framer Motion primitive — mapping drag position to 3D rotation and glare without any render cycle between gesture and visual response made the interactions feel instant in a way that setState-driven animations cannot match.',
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
    liveUrl: 'https://your-physica.vercel.app',
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
  // {
  //   id: 'festival-planner',
  //   slug: 'festival-planner',
  //   title: 'Festival Planner (Deprecated)',
  //   description:
  //     'A planning tool for comparing set times, building schedules, and managing lineup conflicts.',
  //   tech: ['React', 'TypeScript', 'SCSS', 'date-fns'],
  //   image: '/images/projects/festival-planner.png',
  //   liveUrl: 'https://festival-planner-kappa.vercel.app',
  //   codeUrl: 'https://github.com/tworoniak/festival-planner',
  //   featured: false,
  //   // problem:
  //   //   'Tracking cryptocurrency market data across multiple sources can be slow and fragmented.',

  //   // solution:
  //   //   'CryptoDash provides a unified dashboard using the CoinGecko API and optimized client-side data fetching.',

  //   // features: [
  //   //   'Real-time crypto price tracking',
  //   //   'Interactive charts',
  //   //   'Search and sorting',
  //   //   'Responsive dashboard UI',
  //   // ],

  //   // architecture:
  //   //   'The app is structured around a strict separation between the UI layer and the state layer. All cart components — ProductGrid, ProductCard, CartSidebar, CartItemRow — accept plain props and have no knowledge of any state library. Three implementation files (ZustandCart, JotaiCart, ReduxCart) act as adapters, each connecting its respective store to the shared UI. This makes the comparison genuinely apples-to-apples. The action log is implemented as a tiny pub/sub event bus in src/lib/actionLog.ts that lives entirely outside React — Zustand and Jotai call it directly inside their action functions, while Redux hooks into it via a custom middleware. This neutral observer pattern means none of the three stores know about each other. The store code drawer reads from src/data/storeSource.ts, a static map of library-to-source-string, and applies lightweight regex-based syntax highlighting with no external dependency.',

  //   // lessons:
  //   //   'This project reinforced the importance of caching and data normalization when building UI driven by third-party APIs.',
  // },
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
    title: 'ReactWeather',
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
    // featured: true,
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

    screenshots: [
      {
        src: '/images/projects/react-weather/screen-01.png',
        alt: 'ReactWeather local forecast dashboard with 7-day forecast cards and temperature chart',
      },
      {
        src: '/images/projects/react-weather/screen-02.png',
        alt: 'ReactWeather city search with autocomplete dropdown showing results',
      },
      {
        src: '/images/projects/react-weather/screen-03.png',
        alt: 'ReactWeather saved cities page showing four saved locations with coordinates',
      },
    ],
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
    id: 'chromatic',
    slug: 'chromatic',
    title: 'Chromatic',
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
    id: 'pocket-watch',
    slug: 'pocket-watch',
    title: 'PocketWatch',
    description:
      "A mobile movie watchlist app built with React Native and Expo. Search movies via the OMDb API, save them to a watchlist, and log what you've watched — all stored locally with no backend required.",
    tech: [
      'React Native',
      'TypeScript',
      'Expo',
      'Expo Router',
      'AsyncStorage',
      'OMDb API',
      'jest-expo',
    ],
    image: '/images/projects/pocket-watch.png',
    codeUrl: 'https://github.com/tworoniak/pocket-watchlist',
    experiment: true,
    problem:
      "Keeping track of movies you want to watch — and ones you've already seen — is scattered across streaming apps, notes, and memory. There's no lightweight, offline-first mobile tool that just does the job.",
    solution:
      'PocketWatch is a focused React Native app that lets you search any movie, save it to a watchlist, and mark it watched — with the watched date logged automatically. Everything lives on-device via AsyncStorage, so it works without an account or internet after the initial search.',
    features: [
      'Debounced movie search with infinite scroll pagination via OMDb API',
      'Full movie detail screen: plot, cast, rating, runtime, and genre',
      'Watchlist and Watched tabs with persistent local storage',
      '"Saved" and "Watched" badges on search results for at-a-glance library status',
      'Watched date displayed per movie ("Watched Mar 31, 2026")',
      'Light/dark mode toggle that persists across sessions and overrides system setting',
      'Full accessibility: accessibilityRole and accessibilityLabel on all interactive elements',
      '32 unit tests covering storage logic, API layer, and debounce hook',
    ],
    architecture:
      'The app uses Expo Router v6 for file-based navigation — three tabs (Search, Watchlist, Watched) plus a stack-based movie detail screen. All state is managed through a single canonical AsyncStorage store (`library.ts`) with a clean action API: `addToWatchlist`, `markWatched`, `unwatch`, and a one-time migration from a legacy key. Theme preference is handled by a `ThemeContext` that wraps the root layout and overrides the `useColorScheme` hook, so all screens respond to the manual toggle without any prop drilling. The `MovieList` component is shared between the Watchlist and Watched screens, accepting a `getSubtitle` prop to surface per-item metadata like the watched date.',
    lessons:
      'Building around a single canonical store with an explicit migration path paid off — swapping the old key format was safe and invisible to users. Wiring theme persistence through context rather than relying on the OS setting made the manual toggle straightforward to implement consistently across all screens.',
    screenshots: [
      {
        src: '/images/projects/pocket-watch/screen-01.png',
        alt: 'PocketWatch movie search results with poster thumbnails and release years',
      },
      {
        src: '/images/projects/pocket-watch/screen-02.png',
        alt: 'PocketWatch movie detail page with plot summary and cast list',
      },
      {
        src: '/images/projects/pocket-watch/screen-03.png',
        alt: 'PocketWatch watchlist with saved movies and remove buttons',
      },
    ],
  },
  // Experiment Projects //
];
