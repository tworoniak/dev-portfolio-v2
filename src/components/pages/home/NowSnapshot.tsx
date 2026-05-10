const nowData = {
  updatedAt: 'May 7, 2026',
  building: {
    name: 'NeuroStack',
    version: 'v0.4',
    description:
      'Memory dashboard for Claude Code. Local-first, MCP server, file system access API.',
  },
  reading: {
    title: 'Refactoring UI',
    authors: 'Adam Wathan & Steve Schoger',
  },
  stackFocus: {
    tech: 'React + TypeScript',
    subtitle: 'Tailwind CSS, Vite, and more',
  },
  openTo: {
    role: 'Senior FE roles',
    availability: 'Available · Q2 2026',
  },
};

const CARD =
  'project-card card p-4 transition-[border-color,box-shadow] duration-300 hover:bg-zinc-100 dark:hover:bg-black/30';

const NowSnapshot = () => (
  <section className='mx-auto max-w-7xl px-2 sm:px-6 pt-10 pb-12'>
    {/* Header row */}
    <div className='mb-4 flex items-center justify-between'>
      <p className='text-xs uppercase tracking-[0.3em] text-zinc-500'>/ Now</p>
      <span className='text-xs text-zinc-400 dark:text-zinc-500'>
        Updated {nowData.updatedAt}
      </span>
    </div>

    <h2 className='mb-6 text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl'>
      What I&rsquo;m up to right now
    </h2>

    {/* Card grid */}
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      {/* Building */}
      <div className={CARD}>
        <div className='mb-3 flex items-center gap-2'>
          <span
            className='h-2 w-2 animate-pulse rounded-full'
            style={{ backgroundColor: 'var(--accent)' }}
            aria-hidden='true'
          />
          <p className='text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500'>
            Building
          </p>
        </div>
        <p className='font-semibold text-zinc-900 dark:text-white'>
          {nowData.building.name}{' '}
          <span className='rounded border border-zinc-300 dark:border-white/15 px-1 py-0.5 text-xs font-normal text-zinc-500 dark:text-zinc-400'>
            {nowData.building.version}
          </span>
        </p>
        <p className='mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400'>
          {nowData.building.description}
        </p>
      </div>

      {/* Reading */}
      <div className={CARD}>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500'>
          Reading
        </p>
        <p className='font-semibold text-zinc-900 dark:text-white'>
          {nowData.reading.title}
        </p>
        <p className='mt-2 text-sm text-zinc-500 dark:text-zinc-400'>
          {nowData.reading.authors}
        </p>
      </div>

      {/* Stack Focus */}
      <div className={CARD}>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500'>
          Stack Focus
        </p>
        <p className='font-semibold text-zinc-900 dark:text-white'>
          {nowData.stackFocus.tech}
        </p>
        <p className='mt-2 text-sm text-zinc-500 dark:text-zinc-400'>
          {nowData.stackFocus.subtitle}
        </p>
      </div>

      {/* Open To */}
      <div className={CARD}>
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500'>
          Open To
        </p>
        <p className='font-semibold text-zinc-900 dark:text-white'>
          {nowData.openTo.role}
        </p>
        <p className='mt-2 text-sm text-emerald-600 dark:text-emerald-400'>
          {nowData.openTo.availability}
        </p>
      </div>
    </div>
  </section>
);

export default NowSnapshot;
