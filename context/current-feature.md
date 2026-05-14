# Current Feature: WebP + AVIF Image Conversion (feature/convert-images)

## Status

Complete — pending browser verification and commit approval

## Goals

Convert all 114 PNG/JPG images in `public/images/` to WebP and AVIF format to
reduce image payload and improve LCP, without changing any data paths.

## Notes

- 228 files generated (114 × webp + avif), ~70 MB saved across format pairs
- Build passes clean; `OptimizedImage` chunk is 0.48 kB gzip
- Originals kept as `<img>` fallback inside `<picture>` — no browser breakage
- `motion.picture` used in `ScreenshotGallery` to preserve layoutId + whileHover
- Testimonials got a bonus fix: missing `/` prefix on all 5 `src` attributes
- Script is idempotent — re-running skips already-converted files

## History

### Site Audit Fixes — Low Priority (fix/site-audit-low-priority)

Applied all 8 low-priority suggestions from the 2026-05-13 site audit
(`context/code/site-audit-2026-05-13.md`).

**RAF visibility guards (L1):** Added `visibilitychange` event listener to
`GradientCoordsContext.tsx`, `AmbientBackground.tsx`, and `useCardGlow.ts`.
Each RAF loop now stops scheduling frames when `document.hidden` is true and
resumes on tab focus — zero animation CPU cost on hidden tabs.

**Vitest baseline (L2):** Installed Vitest + Testing Library + jsdom.
Configured `vite.config.ts` with `test: { environment: 'jsdom', globals: true,
setupFiles: ['./src/test/setup.ts'] }`. Added `test` / `test:watch` npm scripts.
15 passing tests across 3 files: `color.test.ts` (7 tests — `clampPercent`,
`cursorToRgb`, `cursorToPastelRgb`), `contributions.test.ts` (5 tests —
`getLongestStreak` edge cases), `useGitHubContributions.test.ts` (3 tests —
success state, HTTP error state, fetch deduplication via unique usernames per
test to avoid module-level cache collisions).

**OG dimensions (L3):** Added `og:image:width` (1200) and `og:image:height`
(630) meta tags to `index.html`.

**CSS layer (L4):** Moved `.dark .card`, `.dark .card-xl`, and `.dark .card-2xl`
overrides from global scope into the `@layer components` block in `index.css` —
prevents specificity conflicts with Tailwind utilities.

**Font preload (L5):** Added `<link rel="preload" as="style">` hint for the
Google Fonts stylesheet URL in `index.html`, ahead of the blocking
`<link rel="stylesheet">` — allows the browser to begin fetching the font CSS
before the parser reaches the stylesheet link.

**Badge number derived (L6):** Replaced hardcoded `"Featured · 01"` in
`SelectedWork.tsx` `SpotlightCard` with
`` `Featured · ${badgeNum}` `` where `badgeNum` is derived from
`selected.findIndex(p => p.id === project.id) + 1` padded to 2 digits.

**Focus-visible on SpotlightCard links (L7):** Added
`focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
focus-visible:outline-zinc-900 dark:focus-visible:outline-white` to the
"Live ↗" and "Code ↗" anchor tags in `SpotlightCard`.

**Sitemap lastmod (L8):** Added `<lastmod>2026-05-13</lastmod>` to all 31
entries in `public/sitemap.xml`.

### Site Audit Fixes — Medium Priority (fix/site-audit-medium-priority)

Applied all 8 medium-priority issues from the 2026-05-13 site audit
(`context/code/site-audit-2026-05-13.md`).

**Dead code (M1):** Deleted `ProjectsGrid.tsx` and removed all commented-out
import/usage blocks in `HomePage.tsx`, `AboutPage.tsx`, `HeroSection.tsx`,
and `ProjectsIndex.tsx`.

**Link fix (M2):** Changed `AboutCTA` "Schedule a 20-min intro" `href` from
`mailto:thomas@woroniak.dev` to `https://cal.com/woroniak-dev`. Added
`external: boolean` flag to the `primaryRows` data array so the link opens
in a new tab with `rel="noopener noreferrer"`.

**Accessibility (M3):** Added `aria-controls="mobile-nav"` to the mobile
menu toggle button and `id="mobile-nav"` to the `<motion.div>` panel in
`Header.tsx`.

**Shared utility (M4):** Extracted the duplicate `longestStreak` calculation
into `src/utils/contributions.ts` as `getLongestStreak(data)`. Imported and
used in both `HeatmapSection.tsx` and `GitHubHeatmap.tsx`.

**Landmark fix (M5):** Changed `GitHubHeatmap` root wrapper from `<section>`
to `<div>` — was creating nested section landmarks, violating ARIA best
practices.

**Redundant listener (M6):** Removed `window.addEventListener('resize', ...)`
from `DesktopNav` — the existing `ResizeObserver` already handles element
resize; the window listener was redundant.

**Sitemap (M7):** Added all 27 project slug entries to `public/sitemap.xml`
at priority 0.6.

**Stale asset (M8):** Deleted `public/resume/resume_OLD.pdf`.

### Site Audit Fixes — High Priority (fix/site-audit-high-priority)

Applied all 7 critical issues from the 2026-05-13 site audit (`context/code/site-audit-2026-05-13.md`).

**Layout:** Removed `px-6 py-20 mx-auto` from `Main.tsx` — every page was stacking 160px of top
padding because `Main` and each section both applied `py-20`.

**Fonts:** Configured `fontFamily` in `tailwind.config.js` — Space Grotesk mapped to `font-sans`,
Berkeley Mono mapped to `font-serif` and `font-mono`. Fonts were loaded via Google Fonts but
never applied; the site was rendering in system-ui.

**Buttons:** Added `type="button"` to 5 action buttons — `ExperimentRow`, `ProjectIndexRow`,
`ContactFooter` (copy-email), and both view-toggle buttons in `ExperimentsIndex`.

**Images:** Added `loading="lazy"` to 9 below-fold images across `ProjectCard`, `SelectedWork`
(secondary thumbnails), `LightboxModal`, `TestimonialsGrid` (×5), and `GitHubHeatmap` avatar.
Added `fetchPriority="high"` to the About page profile photo and `ProjectDetailPage` hero image.
Also improved `GitHubHeatmap` avatar `alt` text from `username` to `${username}'s GitHub avatar`.

**Accent color:** Replaced `style={{ backgroundColor: 'var(--accent)' }}` (static oklch purple)
with `useAccentColor()` in `NowSnapshot` (Building card pulse dot) and `SelectedWork` (`SpotlightCard`
"Featured · 01" badge). Both were diverging from the cursor-driven accent used everywhere else.

**Contact form:** Added env var runtime guard before `emailjs.sendForm` — if any `VITE_EMAILJS_*`
variable is missing, the form now surfaces an error message instead of throwing silently and
losing the user's message.

**Accessibility:** Removed `role="button"` from `<motion.article>` in `ProjectCard` — the
contradictory role on an `<article>` with nested `<a>` links was a WCAG 4.1.2 violation.
`tabIndex` and `onKeyDown` retained for keyboard interaction; `aria-label` retained for
accessible naming.

### Code Split `projects.ts` (feature/projects-data-split)

Created `src/data/projects-index.ts` as a standalone, lightweight data
file with all 27 projects but only the fields needed by listing views —
`id`, `slug`, `title`, `description`, `tech`, `image`, `liveUrl`,
`codeUrl`, `featured`, `selected`, `tagline`, `year`, `role`,
`experiment`, `category`, `quarter`, `metrics`. Detail-only fields
(`features`, `problem`, `solution`, `architecture`, `lessons`,
`screenshots`) are excluded.

Added `ProjectIndex` as `Pick<Project, ...>` to `src/types/project.ts`.

Switched all listing components to import from `projects-index.ts`:
`SelectedWork`, `ExperimentsIndex`, `ExperimentRow`, `ProjectsIndex`,
`ProjectIndexRow`, `ProjectCard`, `projects/IntroSection`,
`about/IntroSection`. Updated `ProjectModal` to accept `ProjectIndex |
null` and removed the optional features "Preview" section (modal is a
preview; full detail is on the case study page). Updated `HomePage` and
`ProjectsPage` state types to `ProjectIndex | null`.

`ProjectDetailPage` is unchanged — it continues to import from
`projects.ts` (already its own lazy route chunk).

Bundle result: full `projects.ts` dataset (37.40 kB gzip) now bundled
only into the `ProjectDetailPage` lazy chunk. The shared initial-load
data chunk drops to `projects-index` at 5.74 kB gzip.

### Code Scan Fixes — All 19 Issues (fix/code-scan-priority)

Applied all 19 fixable items from the 2026-05-10 code scan (issue #19 — `projects.ts`
bundle split — deferred to `FEATURE_CODE_SPLITTING.md`). Fixes span performance,
correctness, accessibility, and code quality:

**Performance:** Replaced `useState` + `setCoords` in `GradientCoordsContext` with a
module-level ref store + `useSyncExternalStore` (rounded 1% snapshot) — eliminates 60fps
React re-renders across all consumers. `AmbientBackground` now writes `style.background`
directly via a DOM ref (zero React re-renders for animation). `useCardGlow` RAF loop moved
from mount to `mouseenter`/`mouseleave` — idle cards cost nothing. `useGitHubContributions`
hook with module-level promise cache deduplicates the GitHub API fetch on the About page.
`useAccentColor` hoisted from 27 `ProjectIndexRow` instances to the parent `ProjectsIndex`.

**Correctness:** `LightboxModal` keydown handler stale closure fixed (`goNext`/`goPrev`
wrapped in `useCallback`, dependency array added). `ContactFooter` `setTimeout` stored in
a ref and cleared on unmount. `GitHubHeatmap` API response guarded with `Array.isArray`
before cast. `ThemeContext` `getInitialTheme` guarded with `typeof window !== 'undefined'`.

**Accessibility:** `ProjectModal` switched from `aria-label` to `aria-labelledby` pointing
to the `h2#modal-title`. `TestimonialCard` fake `cursor-pointer` and hover styles removed.

**CLS / images:** `IntroSection` profile photo wrapper gained `aspect-[3/2] overflow-hidden
rounded-2xl`. `ProjectDetailPage` hero container gained `aspect-video`.

**Code quality:** Typo "pressionalism" fixed. Dead commented-out code removed from
`HomePage.tsx`. Four dead component files deleted (`FeaturedPrimaryCard`, `ProjectFilters`,
`ProjectsList`, `ProjectListItem`). `TechTicker` keys changed to `${tech}-${i}`.
`Suspense` boundaries given `fallback` props. Hardcoded "73 repositories" string removed.

New files: `src/hooks/useGitHubContributions.ts`

### Projects Page Hero Refactor (feature/projects-hero-refactor)

Replaced the minimal `IntroSection.tsx` on the Projects page with an editorial
two-column hero. Left column: monospace eyebrow (`/ SELECTED WORK · {minYear} —
{maxYear}` derived from `projects.ts`), three-line stacked headline at `5xl–7xl`
— bold white "Eighteen projects.", muted "One obsession —" with "obsession" in
`font-serif italic` live accent color from `useAccentColor`, and muted "shipping
good UI." Right column: 2×2 grid of four bordered stat cards (SHIPPED — `18
projects` / non-experiment count; SPANNING — `2 years · 2025–2026`; PRIMARY
STACK — hardcoded "React + TS"; LIVE — `14/27` with deployed previews). All
values derived at module level from `projects.ts` — no hooks, no async. The
LIVE card replaces the originally-specced OPEN SOURCE card because all 27
projects have public `codeUrl` entries, making that fraction meaningless.
`ProjectsPage.tsx` import unchanged. `npm run build` passes.

### Projects Page — Archive Index Table (feature/projects-index-table)

Added `ProjectsIndex` section to the Projects page after `IntroSection`. Two
groups — `/ Projects` (non-experiment entries) and `/ Experiments` — each with
its own sub-label, column header row (`# · PROJECT · YEAR · TYPE · ONE-LINER ·
STACK`), and numbered rows. Each row is a `<button>` that opens the project
modal; hover applies a background shift and arrow nudge. Experiment project
names render in the live accent color from `useAccentColor`. Columns collapse
responsively: mobile shows PROJECT + ONE-LINER + arrow; tablet adds YEAR and
top-3 STACK; desktop shows all columns. `ProjectsPage.tsx` gained modal state
(`activeProject`, `hasOpenedModal`) and a lazy-loaded `ProjectModal` instance,
matching the pattern in `HomePage.tsx`. `ProjectFilters` and `ProjectsList`
remain in the file but are currently commented out.

New files:
- `src/components/pages/projects/ProjectsIndex.tsx`
- `src/components/pages/projects/ProjectIndexRow.tsx`

### Contact Page Intro Section (feature/contact-page-intro)

Replaced the bare `h1`/`p` intro in `ContactPage.tsx` with a new `ContactHero`
component (`src/components/pages/contact/ContactHero.tsx`). Eyebrow `/ PICK YOUR
CHANNEL`, large bold headline with the word `email` rendered in `font-serif italic`
using live accent color from `useAccentColor`, and a sub-copy paragraph. Four channel
cards in a responsive grid (1-col mobile → 2-col tablet → 4-col desktop): EMAIL
(active state — accent border and accent "Open" text), SCHEDULE (Cal.com placeholder),
LINKEDIN, and ANYWHERE ELSE. Cards use `bg-zinc-50/70 dark:bg-black/15` surface and
`group-hover:translate-x-0.5` arrow nudge. Form nudge row below cards ("Open the
form ↓") anchor-scrolls to `#contact-form`, which required adding `id="contact-form"`
to the `ContactForm` wrapper in `ContactPage.tsx`. No section background.

### Gradient & Accent Color Smooth Transition (feature/gradient-smooth-transition)

Replaced the binary `isScrollActive ? scrollCoords : cursorCoords` switch in
`useGradientCoords` with a `blendFactor` ref (0 = scroll-driven, 1 = cursor-driven)
that lerps toward its target each RAF frame (rate 0.06 toward scroll, 0.10 toward
cursor). Output coordinates are always `lerp(scrollCurrent, cursor, blendFactor)`,
producing a smooth ~400–600ms crossfade on both the scroll→cursor and cursor→scroll
handoffs. No visible snap or jump.

Moved the RAF loop and all event listeners into a new `GradientCoordsProvider`
(`src/context/GradientCoordsContext.tsx`) so all 9 consumers share one loop and
2 event listeners instead of 9 independent loops and 18 listeners. `useGradientCoords`
is now a thin `useContext` wrapper. `App.tsx` wraps the tree in
`<GradientCoordsProvider>` alongside `<ThemeProvider>`. No consumer changes.

Deleted `CursorColorBackground.tsx` and `useCursorGlow.ts` (dead code, not imported
anywhere). Fixed `.gitignore` to anchor the `context/` rule to the project root
(`/context/`) so it no longer incorrectly blocks `src/context/`.

### Tech Stack Ranking Section (feature/tech-stack-ranking)

Replaced the icon-grid `TechStackSection` on the About page with an editorial
ranked layout. New `src/data/techStack.ts` defines `TechRankItem`, `TechStackGroup`,
and `techStackGroups` — four groups (Daily Drivers, Backend & Data, Tooling & QA,
AI-Augmented Dev) with 18 techs total. Each item renders a name, `N/5` score, a
5-segment proficiency bar whose filled segments use the live accent color from
`useAccentColor`, and a one-liner note. `GroupCard` and `TechItem` are inlined
into `TechStackSection.tsx`; `AboutPage.tsx` import unchanged. Grid: 1-col mobile
→ 2-col md → 4-col lg+. No section background, no icons, no animations.

Also added global `.card`, `.card-xl`, and `.card-2xl` classes to `index.css`
using oklch hue-aware borders (matching `.project-card`) and standardized
`bg-zinc-50/70 dark:bg-black/15` surfaces. Retrofitted `NowSnapshot`,
`SelectedWork`, `TestimonialCard`, `AboutCTA`, `BackgroundSection`,
`HeatmapSection`, and `GitHubHeatmap` to use the new classes. Added Figma,
Cypress to `apertur`; Claude Code, Cursor, GitHub Copilot to `neurostack`;
Storybook to `ui-design-systems` in `projects.ts`.

### About Page End-of-Page CTA (feature/about-cta)

Added `AboutCTA` closing section to the About page after `HeatmapSection`. Two-column
layout on `lg+` (single-column stacked on mobile): left column has eyebrow `/ END ON INTENT`,
bold headline "Hiring for a senior FE role?", a `font-serif italic` accent line "Let's talk."
driven by `useAccentColor`, and sub-copy; right column has four action rows in a single
rounded bordered card — two primary rows (email and "Schedule a 20-min intro", both
`mailto:thomas@woroniak.dev` as placeholder) with `→` arrow nudge on hover, and two
secondary rows (LinkedIn and GitHub) as external links with `↗` indicator. No section
background; inherits page background consistent with all other About sections.

### About Page Heatmap Refactor (feature/about-heatmap-refactor)

Replaced standalone `<GitHubHeatmap>` on the About page with a new `HeatmapSection`
that frames the chart editorially. Full-width section header with `/ GitHub` eyebrow,
bold headline, and sub-copy. Two-column layout on `lg+`: left column has a large
`font-serif italic` contribution count in live accent color from `useAccentColor`,
`CONTRIBUTIONS · LAST 12 MO` label, narrative paragraph with live `longestStreak`
and accent-colored highlights, and a GitHub link; right column shows the heatmap
chart without its stats row (stats moved left). `GitHubHeatmap` updated to export
`ContributionData`, accept an optional `data` prop (skips internal fetch when
provided), and a `showStats` prop (default `true`). Single API call — data fetched
once in `HeatmapSection` and passed down to the chart. No section background on the
outer wrapper.

### About Page Hero Refactor (feature/about-hero-refactor)

Replaced `IntroSection.tsx` on the About page with an identity-forward two-column
hero. Left column: emerald status pill ("Open to senior FE roles · Remote / Kansas
City") + timestamp badge, stacked headline ("Thomas Woroniak —" / italic `font-serif`
accent line "twelve years" driven by `useAccentColor` / muted "of front-end craft."),
sub-copy paragraph, and three CTAs (Download résumé PDF, Get in touch → `/contact`,
View LinkedIn ↗). Right column: profile photo (`/images/profile.jpg`) with three
`backdrop-blur-sm` floating stat chips — projects shipped count derived dynamically
from `projects.ts` (`projects.filter(p => !p.experiment).length`), commits/yr fetched
from the GitHub contributions API (`github-contributions-api.jogruber.de/v4/tworoniak?y=last`,
same endpoint as `GitHubHeatmap`), and "Kansas City, MO" location. `AboutPage.tsx`
import unchanged.

### Project Card Refactor (feature/project-card-refactor)

Refactored `ProjectCard.tsx` in-place with a new layout. Tech stack now
renders as pill badges (first 5 shown, `+N` overflow badge for the rest).
Description replaced with a single `tagline` line (falls back to
`description`). Added a header bar above the image with `role` + `year`
pills. `Live` / `Code` links moved to a frosted-glass overlay pinned to
the top-right corner of the image (`bg-black/50 backdrop-blur-sm`).
Title row shows `quarter · category` metadata on the right. An optional
stats rail at the bottom renders up to 3 `{ value, label }` metrics when
`project.metrics` is set. Added `quarter?: string` and
`metrics?: { value: string; label: string }[]` to the `Project` type;
populated both fields (plus `category`) on all 9 `selected` projects in
`projects.ts`. No changes to grids, modal, or other homepage sections.

### Contact Footer Section (feature/contact-footer)

Added `ContactFooter` closing section to the homepage after `ExperimentsIndex`.
Two-column layout on `lg+` (single-column stacked on mobile): left column has
eyebrow label, bold headline with `font-serif` italic accent word using
`useAccentColor`, sub-copy, and three CTAs (mailto link, clipboard copy with
"Copied!" feedback, résumé PDF link); right column has four contact rows
(EMAIL, GITHUB, LINKEDIN, LOCATION) with hover states (background shift + arrow
nudge). Full light/dark theme via `zinc-` tokens. Also added `font-serif` to
the HeroSection accent word for consistency, updated the status pill border
classes, and populated `tagline`/`year`/`role` on five `SelectedWork` projects
in `projects.ts`.

### Experiments Index (feature/experiments-index)

Replaced the Experiments `ProjectsGrid` on the homepage with a new
`ExperimentsIndex` section. Editorial table-style list view (default) renders
all 9 `experiment: true` projects as numbered rows with name,
`year · role · category` metadata, tagline, top-3 tech, and an arrow that
opens the project modal. A Grid/List toggle (desktop only) switches to the
existing card layout using `ProjectCard` directly. Added `category` (optional
string) to the `Project` type; populated `year`, `role`, `tagline`, and
`category` on all 9 experiment entries in `projects.ts`. Mobile collapses to
name + tagline + arrow only.

### Selected Work Section (feature/selected-work)

Added `SelectedWork` homepage section between `NowSnapshot` and `ProjectsGrid`.
Two-column spotlight layout: large primary card (CineVault) with accent badge,
image, tagline, tech pills, and three CTAs; four secondary cards (Apertur,
Horizons, NeuroStack, DevStash) with thumbnail, title, year, and tagline.
Responsive single-column on mobile. Added `selected`, `tagline`, `year`, `role`
fields to `Project` type and marked five projects in the data.

### Homepage Hero Refactor (feature/home-hero-refactor)

Replaced the typewriter-based `IntroSection` with an identity-forward hero.
Delivered: `AvatarBlock` (TW initials + green status dot), status pill, headline
with italic accent word, sub-copy with highlighted spans, three-CTA row, and a
full-width CSS-only `TechTicker` marquee. Deleted `IntroSection.tsx`.

### Now Snapshot (feature/now-snapshot)

Added `NowSnapshot` section between hero and Featured Projects grid.
Four-card responsive layout (Building, Reading, Stack Focus, Open To) with
project-card-matched border/background/hover styles, pulsing accent dot on
Building card, emerald availability text on Open To card. All content in a
single `nowData` const for easy updates.
