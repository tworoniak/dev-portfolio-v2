# Dev Portfolio v2

A modern **React + TypeScript + Vite** developer portfolio featuring a cursor- and scroll-reactive ambient gradient, dark/light theme, typewriter hero, animated project cards, modal project previews, dedicated case study pages, and a multi-select tech stack filter.

---

## Screenshots

![Dev Portfolio home page.](/src/assets/screen-01.png 'Dev Portfolio home page.')
![Dev Portfolio project modal.](/src/assets/screen-02.png 'Dev Portfolio project modal.')
![Dev Portfolio screen 3.](/src/assets/screen-03.png 'Dev Portfolio screen 3.')
![Dev Portfolio screen 4.](/src/assets/screen-04.png 'Dev Portfolio screen 4.')

---

## Features

- Responsive multi-page layout (Home, Projects, About, Contact) with 404 catch-all
- Scroll- and cursor-reactive ambient gradient background — responds to both mouse position and scroll depth, with smooth lerp transitions and a 1.5s handoff between input sources
- Header accent colors (logo, active indicator, border gradient, mobile menu ring) driven by the same coordinate system via `useAccentColor`
- **Dark/light theme toggle** — Tailwind `class`-based, persisted to `localStorage`, anti-FOUC inline script in `<head>`
- **Typewriter animation** on homepage hero — state machine cycling through role titles
- Animated sticky header with active route indicator and spring-physics underline
- Interactive project cards with cursor-following pastel border glow (`useCardGlow`)
- Project preview modal with focus trap, focus return, and Escape key handling
- Dedicated project detail / case study pages with screenshot gallery + lightbox
- **Projects page tech stack filter** — multi-select pill UI, AND logic, empty state
- GitHub contributions heatmap with streak stats and hover tooltips
- Resume download link (`/resume/resume.pdf`)
- **EmailJS contact form** — no backend required
- Floating scroll-to-top button with accent-colored border
- Code-split routes via `React.lazy` + `Suspense`
- Bundle analysis via `rollup-plugin-visualizer` (`npm run build` → `dist/stats.html`)
- Vercel Analytics
- Dynamic per-route page titles
- WCAG 2.1 AA accessibility — skip link, keyboard navigation, focus indicators, reduced motion support

---

## Tech Stack

| Technology              | Purpose                                        |
| ----------------------- | ---------------------------------------------- |
| **React 19**            | UI framework                                   |
| **TypeScript**          | Static typing (strict mode)                    |
| **Vite 8**              | Build tooling (port 5180)                      |
| **React Router v7**     | Client-side routing                            |
| **Framer Motion 12**    | Animations (`reducedMotion="user"`)            |
| **Tailwind CSS 3**      | Utility-first styling (`darkMode: 'class'`)    |
| **Lucide React**        | Icon system                                    |
| **EmailJS**             | Contact form (no backend)                      |
| **@vercel/analytics**   | Page view tracking                             |
| **rollup-plugin-visualizer** | Bundle analysis (dev)                   |

---

## Project Structure

```
src/
  app/
    App.tsx               MotionConfig wrapper + RouterProvider
    router.tsx            Route definitions (all pages lazy-loaded)
    main.tsx

  components/
    effects/
      AmbientBackground.tsx   Scroll/cursor-reactive gradient layer
    layout/
      AppLayout.tsx           Skip link, layout shell
      Header.tsx              Sticky header with gradient-reactive accent colors
      DesktopNav.tsx          Animated active-route underline indicator
      Footer.tsx              Social links
      Main.tsx                main#main-content landmark
    pages/
      home/               IntroSection (typewriter hero)
      projects/           IntroSection
      about/              IntroSection, TechStackSection, BackgroundSection, TestimonialsGrid
    projects/
      ProjectCard.tsx         Grid card with cursor-glow effect
      ProjectListItem.tsx     List card with cursor-glow effect
      ProjectModal.tsx        Focus-managed modal with focus trap
      ProjectsGrid.tsx
      ProjectsList.tsx
      ProjectFilters.tsx      Multi-select tech stack filter pills
      GitHubHeatmap.tsx       SVG heatmap, fetches github-contributions-api
    ui/
      PageTitle.tsx           Sets document.title per route
      ScrollToTop.tsx         Scroll-to-top on route change
      ScrollToTopButton.tsx   Floating scroll button with accent border

  context/
    ThemeContext.tsx       ThemeProvider + useTheme hook

  data/
    projects.ts           All project entries (featured, experiment flags, screenshots)
    background.ts         Experience and certification entries for About page

  hooks/
    useGradientCoords.ts  Unified cursor + scroll coord hook (one RAF loop)
    useAccentColor.ts     Cursor-driven RGB accent color values
    useCardGlow.ts        RAF pastel border glow for project cards
    useCursorGlow.ts      Raw cursor position hook
    useScrollPosition.ts  Scroll threshold boolean
    useTypewriter.ts      Typewriter state machine hook

  pages/
    HomePage.tsx
    ProjectsPage.tsx
    ProjectDetailPage.tsx
    AboutPage.tsx
    ContactPage.tsx
    NotFoundPage.tsx

  types/
    project.ts

  utils/
    color.ts              cv(), pastelCv(), cursorToRgb(), cursorToPastelRgb()
    gradient.ts           createAmbientBackground() pure function
```

---

## Gradient System

The ambient background and header accent colors share a single coordinate system managed by `useGradientCoords`:

- **Cursor mode** — mouse position drives `xPc`/`yPc` (0–100)
- **Scroll mode** — scroll percentage drives sine/cosine wave functions to derive organic target coordinates, lerped at factor `0.08` per frame
- **Handoff** — scroll takes priority for `1500ms` after the last scroll event, then cursor smoothly retakes control
- `cursor.time` always drives the autonomous drift oscillations regardless of active mode

`useAccentColor` wraps `useGradientCoords` and exposes `{ r, g, b, accent, accentSoft, logoColor }` for use in any component.

`createAmbientBackground(xPc, yPc, time, isDark?)` in `utils/gradient.ts` is a pure function — any input source can drive it.

---

## Accessibility

WCAG 2.1 AA compliant:

- Skip-to-main-content link (visible on focus)
- All interactive elements have visible `focus-visible` indicators
- Modal focus management — focus moves to close button on open, returns to trigger on close, Tab trapped within modal
- Dynamic page titles per route
- `prefers-reduced-motion` respected by Framer Motion (`MotionConfig reducedMotion="user"`) and native scroll APIs
- ARIA landmarks, `aria-label`, `aria-modal`, `aria-hidden` on decorative elements
- Sufficient color contrast throughout

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5180
npm run build     # type-check + Vite production build + bundle stats
npm run preview   # preview production build locally
```

### Contact form setup (EmailJS)

1. Create an account at [emailjs.com](https://emailjs.com)
2. Add an email service (Gmail works)
3. Create a template with variables: `{{from_name}}`, `{{reply_to}}`, `{{message}}`
4. Copy `.env.example` → `.env.local` and fill in:
   ```
   VITE_EMAILJS_SERVICE_ID=
   VITE_EMAILJS_TEMPLATE_ID=
   VITE_EMAILJS_PUBLIC_KEY=
   ```
5. Add the same three variables in Vercel → Project Settings → Environment Variables
