import StackIcon from 'tech-stack-icons';
import { useTheme } from '../../../context/ThemeContext';

type TechItem = {
  name: string;
  label: string;
  variant?: 'light' | 'dark';
};

const techStack: TechItem[] = [
  { name: 'react', label: 'React' },
  { name: 'reactquery', label: 'React Query' },
  { name: 'reactrouter', label: 'React Router' },
  { name: 'tanstack', label: 'TanStack' },
  { name: 'docker', label: 'Docker' },
  { name: 'typescript', label: 'TypeScript' },
  { name: 'tailwindcss', label: 'Tailwind CSS' },
  { name: 'sass', label: 'Sass (SCSS)' },
  { name: 'html5', label: 'HTML5' },
  { name: 'css3', label: 'CSS3' },
  { name: 'json', label: 'JSON' },
  { name: 'railway', label: 'Railway' },
  { name: 'go', label: 'Go' },
  { name: 'supabase', label: 'Supabase' },
  { name: 'clerk', label: 'Clerk' },
  { name: 'nextjs', label: 'Next.js' },
  { name: 'graphql', label: 'GraphQL' },
  { name: 'nodejs', label: 'Node.js' },
  { name: 'vitejs', label: 'Vite' },
  { name: 'vercel', label: 'Vercel' },
  { name: 'materialui', label: 'Material UI' },
  { name: 'radixui', label: 'Radix UI' },
  { name: 'vscode', label: 'VS Code' },
  { name: 'figma', label: 'Figma' },
  { name: 'claude', label: 'Claude AI' },
  { name: 'cursor', label: 'Cursor AI' },
  { name: 'copilotgithub', label: 'GitHub Copilot' },
  { name: 'copilotms', label: 'Microsoft Copilot' },
] as const;

const TechStackSection = () => {
  const { theme } = useTheme(); // 'light' | 'dark'

  return (
    <section className='mx-auto flex max-w-7xl flex-col gap-2 px-2 sm:px-6 py-12'>
      <p className='text-xs uppercase tracking-[0.3em] text-zinc-500'>
        Tech Stack
      </p>

      <div className='mt-4 grid grid-cols-3 gap-8 rounded-lg border border-zinc-500/20 dark:border-white/10 bg-white/10 dark:bg-black/15 p-4 md:grid-cols-6 lg:flex lg:flex-wrap'>
        {techStack.map((tech) => (
          <figure
            key={tech.name}
            role='img'
            aria-label={`${tech.label} logo`}
            className='group relative flex h-12 w-12 items-center justify-center'
          >
            <div className='transition-transform duration-200 group-hover:scale-110'>
              <StackIcon
                name={tech.name}
                variant={theme}
                // variant={tech.variant}
                aria-hidden='true'
              />
            </div>

            <figcaption className='pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-950 px-2 py-1 text-xs text-zinc-900 dark:text-zinc-100 opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100'>
              {tech.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
