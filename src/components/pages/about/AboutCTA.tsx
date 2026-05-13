import { useAccentColor } from '../../../hooks/useAccentColor';

const primaryRows = [
  { label: 'thomas@woroniak.dev', href: 'mailto:thomas@woroniak.dev', external: false },
  { label: 'Schedule a 20-min intro', href: 'https://cal.com/woroniak-dev', external: true },
];

const secondaryRows = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thomasworoniak/' },
  { label: 'GitHub', href: 'https://github.com/tworoniak' },
];

const AboutCTA = () => {
  const { accent } = useAccentColor();

  return (
    <section className='mx-auto max-w-7xl px-2 sm:px-6 py-16 sm:py-24'>
      <div className='grid gap-16 lg:grid-cols-2 lg:items-center'>
        {/* Left column */}
        <div>
          <p className='mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500'>
            / Contact
          </p>
          <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white'>
            Hiring for a senior FE role?
          </h2>
          <p
            className='mb-6 text-3xl sm:text-4xl md:text-5xl font-serif italic leading-tight'
            style={{ color: accent }}
          >
            Let&rsquo;s talk.
          </p>
          <p className='max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400'>
            I reply within 24 hours. Bring a JD, a Loom, or just a vague problem
            &mdash; I&rsquo;m easy to talk to and quick to send a sample plan.
          </p>
        </div>

        {/* Right column — action rows */}
        <div className='card-xl overflow-hidden'>
          {primaryRows.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className='group flex items-center justify-between border-b border-zinc-200 px-6 py-5 transition-colors hover:bg-zinc-100 dark:border-white/10 dark:hover:bg-white/5'
            >
              <span className='text-sm font-medium text-zinc-800 dark:text-white/80'>
                {label}
              </span>
              <span className='text-zinc-300 transition-all group-hover:translate-x-1 group-hover:text-zinc-900 dark:text-white/30 dark:group-hover:text-white'>
                →
              </span>
            </a>
          ))}
          {secondaryRows.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='group flex items-center justify-between border-b border-zinc-200 px-6 py-4 last:border-b-0 transition-colors hover:bg-zinc-100 dark:border-white/10 dark:hover:bg-white/5'
            >
              <span className='text-sm text-zinc-500 transition-colors group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-white'>
                {label} ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
