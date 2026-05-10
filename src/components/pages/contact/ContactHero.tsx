import { useAccentColor } from '../../../hooks/useAccentColor';

interface Channel {
  label: string;
  title: string;
  description: string;
  href: string;
  active: boolean;
  icon: React.ReactNode;
}

const EnvelopeIcon = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='2' y='4' width='16' height='12' rx='2' />
    <path d='M2 7l8 5 8-5' />
  </svg>
);

const CalendarIcon = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='2' y='3' width='16' height='15' rx='2' />
    <path d='M14 1v4M6 1v4M2 8h16' />
  </svg>
);

const LinkedInIcon = () => (
  <span className='flex items-center justify-center w-5 h-5 rounded text-[10px] font-bold border border-current leading-none'>
    in
  </span>
);

const GlobeIcon = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='10' cy='10' r='8' />
    <path d='M10 2a12 12 0 0 1 0 16M10 2a12 12 0 0 0 0 16M2 10h16' />
  </svg>
);

const ContactHero = () => {
  const { accent } = useAccentColor();

  const channels: Channel[] = [
    {
      label: 'EMAIL',
      title: 'thomas@woroniak.dev',
      description: 'Best for hiring + JDs',
      href: 'mailto:thomas@woroniak.dev',
      active: true,
      icon: <EnvelopeIcon />,
    },
    {
      label: 'SCHEDULE',
      title: '20-min intro · Cal.com',
      description: 'Best for "let\'s talk"',
      href: 'https://cal.com/tworoniak',
      active: false,
      icon: <CalendarIcon />,
    },
    {
      label: 'LINKEDIN',
      title: '/in/thomasworoniak',
      description: 'Best for warm intros',
      href: 'https://linkedin.com/in/thomasworoniak',
      active: false,
      icon: <LinkedInIcon />,
    },
    {
      label: 'ANYWHERE ELSE',
      title: 'GitHub', //  · X · Bluesky
      description: '@tworoniak everywhere',
      href: 'https://github.com/tworoniak',
      active: false,
      icon: <GlobeIcon />,
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-2 sm:px-6 py-20 sm:py-28'>
      <p className='uppercase tracking-widest text-xs font-mono text-zinc-400 dark:text-zinc-500'>
        / PICK YOUR CHANNEL
      </p>

      <h1 className='mt-4 font-bold text-4xl sm:text-5xl lg:text-6xl text-zinc-900 dark:text-white leading-tight'>
        The fastest way to reach me is{' '}
        <span className='font-serif italic' style={{ color: accent }}>
          email
        </span>
        .
      </h1>

      <p className='mt-5 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400'>
        But I'll meet you wherever you are. Pick whichever channel fits the
        conversation — I reply within 24 hours on weekdays.
      </p>

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {channels.map((channel) => {
          const isExternal = channel.href.startsWith('http');
          return (
            <a
              key={channel.label}
              href={channel.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className='group rounded-xl border p-5 flex flex-col gap-3 transition-colors bg-zinc-50/70 dark:bg-black/15 border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20'
              style={channel.active ? { borderColor: accent } : undefined}
            >
              <div className='w-8 h-8 flex items-center justify-center text-zinc-400 dark:text-zinc-500'>
                {channel.icon}
              </div>

              <div className='flex flex-col gap-1'>
                <span className='text-xs uppercase tracking-widest font-mono text-zinc-400 dark:text-zinc-500'>
                  {channel.label}
                </span>
                <span className='text-sm font-semibold text-zinc-900 dark:text-white'>
                  {channel.title}
                </span>
                <span className='text-xs text-zinc-500 dark:text-zinc-400'>
                  {channel.description}
                </span>
              </div>

              <div className='mt-auto flex items-center gap-1 text-sm font-medium text-zinc-400 dark:text-zinc-500'>
                <span style={channel.active ? { color: accent } : undefined}>
                  Open
                </span>
                <span
                  className='transition-transform group-hover:translate-x-0.5'
                  style={channel.active ? { color: accent } : undefined}
                >
                  →
                </span>
              </div>
            </a>
          );
        })}
      </div>

      <div className='mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4'>
        <p className='text-sm text-zinc-500 dark:text-zinc-400'>
          Prefer a form?{' '}
          <span className='font-semibold text-zinc-700 dark:text-zinc-300'>
            Of course.
          </span>{' '}
          It still goes to my inbox — just one extra click.
        </p>
        <a
          href='#contact-form'
          className='shrink-0 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white underline underline-offset-2 transition-colors'
        >
          Open the form ↓
        </a>
      </div>
    </div>
  );
};

export default ContactHero;
