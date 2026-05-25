import { Link } from 'react-router-dom';
import { projectsIndex } from '../../../data/projects-index';
import { useAccentColor } from '../../../hooks/useAccentColor';
import OptimizedImage from '../../shared/OptimizedImage';
import type { ProjectIndex } from '../../../types/project';

const selected = projectsIndex.filter((p) => p.selected);
const spotlight = selected.find((p) => p.featured) ?? selected[0];
const secondary = selected.filter((p) => p.id !== spotlight?.id).slice(0, 8);

const CARD =
  'project-card card transition-[border-color,box-shadow] duration-300 hover:bg-zinc-100 dark:hover:bg-black/30';

const SpotlightCard = ({ project }: { project: ProjectIndex }) => {
  const { accent } = useAccentColor();
  const badgeNum = String(
    selected.findIndex((p) => p.id === project.id) + 1,
  ).padStart(2, '0');
  return (
    <article className={`${CARD} flex flex-col overflow-hidden rounded-xl`}>
      {/* Image */}
      <div className='relative aspect-[16/10] overflow-hidden bg-zinc-200 dark:bg-zinc-900'>
        <OptimizedImage
          src={project.image}
          alt={project.title}
          className='h-full w-full object-cover'
        />
        <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent' />
        <span
          className='absolute left-4 top-4 border rounded-full px-2.5 py-1 text-xs font-semibold text-black bg-black/70'
          style={{ borderColor: accent, color: accent }}
        >
          {`Featured · ${badgeNum}`}
        </span>
      </div>

      {/* Body */}
      <div className='flex flex-1 flex-col p-6'>
        {/* Title + meta */}
        <div className='flex items-start justify-between gap-4'>
          <h3 className='text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl'>
            {project.title}
          </h3>
          {(project.year || project.role) && (
            <span className='mt-1 shrink-0 text-xs text-zinc-400'>
              {[project.year, project.role].filter(Boolean).join(' · ')}
            </span>
          )}
        </div>

        {/* Tagline */}
        {project.tagline && (
          <p className='mt-2 text-sm text-zinc-500 dark:text-zinc-400'>
            {project.tagline}
          </p>
        )}

        {/* Description */}
        <p className='mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300'>
          {project.description}
        </p>

        {/* Tech pills */}
        <div className='mt-4 flex flex-wrap gap-1.5'>
          {project.tech.slice(0, 6).map((t) => (
            <span
              key={t}
              className='rounded border border-zinc-300 dark:border-white/10 px-2 py-0.5 text-xs text-zinc-500 dark:text-zinc-400'
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className='mt-auto pt-6 flex flex-wrap gap-3'>
          <Link
            to={`/projects/${project.slug}`}
            className='rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200'
          >
            Read case study →
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target='_blank'
              rel='noreferrer'
              className='rounded-md border border-zinc-200 dark:border-white/10 px-4 py-2 text-sm font-medium transition hover:bg-zinc-100 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-white'
            >
              Live ↗
            </a>
          )}

          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target='_blank'
              rel='noreferrer'
              className='rounded-md border border-zinc-200 dark:border-white/10 px-4 py-2 text-sm font-medium transition hover:bg-zinc-100 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-white'
            >
              Code ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const SecondaryCard = ({ project }: { project: ProjectIndex }) => (
  <Link
    to={`/projects/${project.slug}`}
    className={`${CARD} flex items-center gap-4 rounded-lg p-3`}
  >
    {/* Thumbnail */}
    <div className='h-16 w-16 shrink-0 overflow-hidden rounded-md bg-zinc-200 dark:bg-zinc-900'>
      <OptimizedImage
        src={project.image}
        alt={project.title}
        className='h-full w-full object-cover'
        loading='lazy'
      />
    </div>

    {/* Text */}
    <div className='min-w-0 flex-1'>
      <div className='flex items-baseline justify-between gap-2'>
        <p className='truncate font-semibold text-zinc-900 dark:text-white'>
          {project.title}
        </p>
        {project.year && (
          <span className='shrink-0 text-xs text-zinc-400'>{project.year}</span>
        )}
      </div>
      {project.tagline && (
        <p className='mt-0.5 line-clamp-1 text-sm text-zinc-500 dark:text-zinc-400'>
          {project.tagline}
        </p>
      )}
    </div>

    {/* Arrow */}
    <span className='shrink-0 text-zinc-400 transition group-hover:text-zinc-200'>
      →
    </span>
  </Link>
);

const SelectedWork = () => {
  if (!spotlight) return null;

  return (
    <section className='mx-auto max-w-7xl px-2 sm:px-6 pt-10 pb-16'>
      {/* Header row */}
      <div className='mb-4 flex items-center justify-between'>
        <p className='text-xs uppercase tracking-[0.3em] text-zinc-500'>
          / Selected Work
        </p>
        <Link
          to='/projects'
          className='text-xs text-zinc-400 transition hover:text-zinc-200'
        >
          All projects →
        </Link>
      </div>

      <h2 className='mb-8 text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl'>
        Crafted frontend experiences, one project at a time.
      </h2>

      {/* Two-column grid */}
      <div className='grid gap-6 lg:grid-cols-[3fr_2fr]'>
        <SpotlightCard project={spotlight} />

        <div className='flex flex-col gap-3'>
          {secondary.map((p) => (
            <SecondaryCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
