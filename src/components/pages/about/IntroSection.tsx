import { Link } from 'react-router-dom';
import { projectsIndex as projects } from '../../../data/projects-index';
import { useAccentColor } from '../../../hooks/useAccentColor';
import { useGitHubContributions } from '../../../hooks/useGitHubContributions';
import OptimizedImage from '../../shared/OptimizedImage';

const GITHUB_USERNAME = 'tworoniak';
const shippedCount = projects.filter((p) => !p.experiment).length;

function formatCommits(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k+`;
  return String(n);
}

const IntroSection = () => {
  const { accent } = useAccentColor();
  const { data } = useGitHubContributions(GITHUB_USERNAME);
  const commits = data ? formatCommits(data.totalContributions) : null;

  return (
    <section className='mx-auto max-w-7xl px-2 sm:px-6 py-20 sm:py-28'>
      {/* Status row */}
      <div className='mb-8 flex flex-wrap items-center gap-3'>
        <span className='inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-300/10 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-600 dark:text-emerald-400'>
          <span className='h-2 w-2 rounded-full bg-emerald-400/50' />
          Open to senior FE roles &middot; Remote / Kansas City
        </span>
        <span className='text-sm text-zinc-500 dark:text-zinc-400'>
          Last updated &middot; Apr 2026
        </span>
      </div>

      {/* Two-column grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
        {/* Left column */}
        <div>
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white'>
            Thomas Woroniak&thinsp;&mdash;
            <br />
            <em className='font-serif italic' style={{ color: accent }}>
              twelve years
            </em>
            <br />
            <span className='text-zinc-500 dark:text-zinc-500'>
              of front-end craft.
            </span>
          </h1>

          <p className='mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400'>
            {/* React + TypeScript specialist. */}I build fast, accessible UI
            systems for product teams who care about the details&thinsp;&mdash;
            and I ship more side-projects than is reasonable.
          </p>

          <div className='mt-10 flex flex-wrap items-center gap-4'>
            <a
              href='/resume/resume.pdf'
              download
              className='inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100'
            >
              Download résumé &middot; PDF →
            </a>
            <Link
              to='/contact'
              className='inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/5'
            >
              Get in touch
            </Link>
            <a
              href='https://www.linkedin.com/in/thomasworoniak/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm font-semibold text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
            >
              View LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right column — photo with floating chips */}
        <div className='relative aspect-[3/2] overflow-hidden rounded-2xl'>
          <OptimizedImage
            src='/images/profile.jpg'
            alt='Profile picture of Thomas Woroniak'
            className='h-full w-full object-cover'
            fetchPriority='high'
          />

          {/* Projects shipped — top right */}
          <div className='absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-sm px-3 py-1.5 text-sm text-white'>
            <svg
              className='h-3.5 w-3.5 opacity-70'
              viewBox='0 0 14 14'
              fill='currentColor'
              aria-hidden='true'
            >
              <rect x='0' y='6' width='2' height='8' rx='1' />
              <rect x='4' y='3' width='2' height='11' rx='1' />
              <rect x='8' y='1' width='2' height='13' rx='1' />
              <rect x='12' y='4' width='2' height='10' rx='1' />
            </svg>
            {shippedCount} projects shipped
          </div>

          {/* Commits / yr — bottom left */}
          <div className='absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-sm px-3 py-1.5 text-sm text-white'>
            {commits !== null ? (
              <>
                <span className='font-semibold'>{commits}</span>
                commits / yr
              </>
            ) : (
              <span className='opacity-50'>commits / yr</span>
            )}
          </div>

          {/* Location — bottom right */}
          <div className='absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-sm px-3 py-1.5 text-sm text-white'>
            <span className='opacity-70'>⊕</span>
            Kansas City, MO
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
