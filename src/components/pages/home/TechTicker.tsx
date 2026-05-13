const TECHS = [
  'TypeScript',
  'Next.js',
  'Vite',
  'Tailwind CSS',
  'Framer Motion',
  'Supabase',
  'Prisma',
  'GraphQL',
  'Node.js',
  'PostgreSQL',
  'Neon',
  'React',
  'Angular',
  'Javascript',
  'Railway',
  'Vercel',
  'HTML5',
  'CSS3',
  'Docker',
  'Lucide Icons',
  'Claude Code',
  'OpenAI',
  'GitHub Copilot',
  'Cursor',
];

const TechTicker = () => (
  <div
    className='-mx-6 overflow-hidden dark:bg-black/15 border-y border-white/5 py-4'
    aria-hidden='true'
  >
    <div className='ticker-track text-sm text-zinc-500'>
      {[...TECHS, ...TECHS].map((tech, i) => (
        <span key={`${tech}-${i}`} className='flex items-center'>
          <span className='px-4'>{tech}</span>
          <span className='text-zinc-700'>/</span>
        </span>
      ))}
    </div>
  </div>
);

export default TechTicker;
