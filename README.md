# 🌌 Dev Portfolio v2

A modern **React + TypeScript + Vite** developer portfolio featuring animated project cards, ambient cursor-reactive backgrounds, modal project previews, and dedicated case study pages.

Built to showcase front-end engineering work with a polished UI, reusable component structure, and an interactive visual system inspired by modern portfolio experiences.

---

## ✨ Features

- Responsive multi-page portfolio
- Animated sticky header with active route indicator
- Ambient cursor-reactive background
- Interactive project cards with cursor-following border glow
- Project preview modal with overlay
- Dedicated project detail / case study pages
- React Router-based navigation
- Framer Motion animations
- Tailwind CSS styling

---

## 🧰 Tech Stack

| Technology        | Purpose                      |
| ----------------- | ---------------------------- |
| **React**         | UI framework                 |
| **TypeScript**    | Static typing                |
| **Vite**          | Build tooling                |
| **React Router**  | Client-side routing          |
| **Framer Motion** | Animation and UI transitions |
| **Tailwind CSS**  | Utility-first styling        |
| **Lucide React**  | Icon system                  |

---

## 📁 Project Structure

````text
src/
  app/
    router.tsx

  components/
    effects/
      AmbientBackground.tsx
    layout/
      AppLayout.tsx
      Header.tsx
      Footer.tsx
      IntroSection.tsx
    projects/
      ProjectCard.tsx
      ProjectModal.tsx
      ProjectsGrid.tsx

  data/
    projects.ts

  hooks/
    useCursorGlow.ts

  pages/
    HomePage.tsx
    ProjectsPage.tsx
    ProjectDetailPage.tsx
    AboutPage.tsx
    ContactPage.tsx

  types/
    project.ts

  utils/
    color.ts
    gradient.ts


    ```

````
