export type TechRankItem = {
  name: string;
  score: number;
  note: string;
};

export type TechStackGroup = {
  category: string;
  items: TechRankItem[];
};

export const techStackGroups: TechStackGroup[] = [
  {
    category: 'Daily Drivers',
    items: [
      { name: 'React', score: 5, note: 'Hooks, Suspense, RSC' },
      { name: 'TypeScript', score: 5, note: 'Strict, generics, branded' },
      { name: 'Tailwind CSS', score: 5, note: 'v3 + v4, design tokens' },
      { name: 'Vite', score: 4, note: 'Plugins, SSR config' },
      { name: 'Next.js', score: 3, note: 'App router, RSC' },
    ],
  },
  {
    category: 'Backend & Data',
    items: [
      { name: 'Supabase', score: 4, note: 'RLS, edge functions' },
      { name: 'PostgreSQL', score: 4, note: 'Schemas, indexes' },
      { name: 'Prisma', score: 4, note: 'Migrations, relations' },
      { name: 'GraphQL', score: 3, note: 'Apollo, federation' },
      { name: 'Hono', score: 2, note: 'Edge-first APIs' },
    ],
  },
  {
    category: 'Tooling & QA',
    items: [
      { name: 'Vitest', score: 4, note: 'Unit + component tests' },
      { name: 'Cypress', score: 3, note: 'E2E, custom commands' },
      { name: 'Storybook', score: 4, note: 'Component docs, play fns' },
      { name: 'Figma', score: 3, note: 'Components, auto-layout' },
      { name: 'Docker', score: 3, note: 'Dev containers, compose' },
    ],
  },
  {
    category: 'AI-Augmented Dev',
    items: [
      { name: 'Claude Code', score: 5, note: 'Agent flows, MCP' },
      { name: 'Cursor', score: 2, note: 'Inline edits, context' },
      { name: 'GitHub Copilot', score: 3, note: 'Tab complete, chat' },
    ],
  },
];
