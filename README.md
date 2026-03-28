# Dev Portfolio v2

A modern **React + TypeScript + Vite** developer portfolio featuring an interactive gradient background, animated project cards, modal project previews, and dedicated case study pages.

---

## Screenshots

![Dev Portfolio screen 1.](/src/assets/screen-01.png 'Dev Portfolio screen 1.')
![Dev Portfolio screen 2.](/src/assets/screen-02.png 'Dev Portfolio screen 2.')
![Dev Portfolio screen 3.](/src/assets/screen-03.png 'Dev Portfolio screen 3.')
![Dev Portfolio screen 4.](/src/assets/screen-04.png 'Dev Portfolio screen 4.')

---

## Features

- Responsive multi-page layout (Home, Projects, About, Contact)
- Scroll- and cursor-reactive ambient gradient background — the gradient responds to both mouse position and scroll depth, with smooth lerp transitions and a 1.5s handoff between input sources
- Header accent colors (logo, active indicator, border, hover underlines) driven by the same gradient coordinate system
- Animated sticky header with active route indicator and spring-physics underline
- Interactive project cards with cursor-following pastel border glow
- Project preview modal with focus trap, focus return, and Escape key handling
- Dedicated project detail / case study pages
- GitHub contributions heatmap with streak stats and hover tooltips
- Dynamic per-route page titles
- WCAG 2.1 AA accessibility — skip link, keyboard navigation, focus indicators, reduced motion support

---

## Tech Stack

| Technology           | Purpose                          |
| -------------------- | -------------------------------- |
| **React 19**         | UI framework                     |
| **TypeScript**       | Static typing (strict mode)      |
| **Vite 8**           | Build tooling (port 5180)        |
| **React Router v7**  | Client-side routing              |
| **Framer Motion 12** | Animations (`reducedMotion="user"`) |
| **Tailwind CSS 3**   | Utility-first styling            |
| **Lucide React**     | Icon system                      |
| **tech-stack-icons** | Technology logo icons            |

---

## Project Structure

```
src/
  app/
    App.tsx               MotionConfig wrapper + RouterProvider
    router.tsx            Route definitions
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
      home/               IntroSection
      projects/           IntroSection
      about/              IntroSection, TechStackSection, TestimonialsGrid
    projects/
      ProjectCard.tsx         Grid card (keyboard accessible)
      ProjectListItem.tsx     List card (keyboard accessible)
      FeaturedPrimaryCard.tsx Featured hero card (keyboard accessible)
      ProjectModal.tsx        Focus-managed modal with focus trap
      ProjectsGrid.tsx
      ProjectsList.tsx
      GitHubHeatmap.tsx       SVG heatmap, fetches github-contributions-api
    ui/
      PageTitle.tsx           Sets document.title per route
      ScrollToTop.tsx         Scroll-to-top on route change
      ScrollToTopButton.tsx   Floating scroll button

  data/
    projects.ts           All project entries (featured, experiment flags)

  hooks/
    useGradientCoords.ts  Unified cursor + scroll coord hook (one RAF loop)
    useCursorGlow.ts      Raw cursor position hook
    useScrollPosition.ts  Scroll threshold boolean

  pages/
    HomePage.tsx
    ProjectsPage.tsx
    ProjectDetailPage.tsx
    AboutPage.tsx
    ContactPage.tsx

  types/
    project.ts

  utils/
    color.ts              cv(), pastelCv(), cursorToRgb() helpers
    gradient.ts           createAmbientBackground() pure function
```

---

## Gradient System

The ambient background and header accent colors share a single coordinate system managed by `useGradientCoords`:

- **Cursor mode** — mouse position drives `xPc`/`yPc` (0–100)
- **Scroll mode** — scroll percentage drives sine/cosine wave functions to derive organic target coordinates, lerped at factor `0.08` per frame
- **Handoff** — scroll takes priority for `1500ms` after the last scroll event, then cursor smoothly retakes control
- `cursor.time` always drives the autonomous drift oscillations regardless of active mode

`createAmbientBackground(xPc, yPc, time)` in `utils/gradient.ts` is a pure function — any input source can drive it.

---

## Accessibility

WCAG 2.1 AA compliant:

- Skip-to-main-content link (visible on focus)
- All project cards keyboard accessible (`tabIndex`, `role="button"`, Enter/Space activation)
- Modal focus management — focus moves to close button on open, returns to trigger on close, Tab trapped within modal
- Dynamic page titles per route
- `prefers-reduced-motion` respected by Framer Motion (`MotionConfig reducedMotion="user"`) and native scroll APIs
- Visible `focus-visible` indicators on all interactive elements
- ARIA landmarks, `aria-label`, `aria-modal`, `aria-hidden` on decorative elements
- Sufficient color contrast throughout (explicit Tailwind color classes, no opacity-only dimming)

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5180
npm run build     # type-check + Vite production build
npm run preview   # preview production build locally
```
