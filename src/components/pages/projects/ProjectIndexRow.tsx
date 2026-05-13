import type { ProjectIndex } from '../../../types/project';

type Props = {
  project: ProjectIndex;
  index: number;
  accent: string;
  onOpen: (project: ProjectIndex) => void;
};

const ProjectIndexRow = ({ project, index, accent, onOpen }: Props) => {
  const indexLabel = String(index + 1).padStart(2, '0');
  const topTech = project.tech.slice(0, 4);
  const topTechTablet = project.tech.slice(0, 3);

  const titleStyle = project.experiment ? { color: accent } : undefined;
  const titleClass = project.experiment
    ? 'text-sm font-semibold'
    : 'text-sm font-semibold text-zinc-900 dark:text-white';

  return (
    <button
      type='button'
      onClick={() => onOpen(project)}
      className='group flex w-full items-center gap-4 rounded-md p-4 text-left transition-colors hover:bg-zinc-100 dark:hover:bg-white/[0.03]'
    >
      {/* # */}
      <span className='hidden w-8 shrink-0 font-mono text-xs text-zinc-400 dark:text-white/30 lg:block'>
        {indexLabel}
      </span>

      {/* PROJECT */}
      <span className='w-36 shrink-0 sm:w-44' style={titleStyle}>
        <span className={titleClass}>{project.title}</span>
      </span>

      {/* YEAR */}
      <span className='hidden w-12 shrink-0 text-xs text-zinc-400 dark:text-white/40 sm:block'>
        {project.year}
      </span>

      {/* TYPE */}
      <span className='hidden w-24 shrink-0 text-xs text-zinc-400 dark:text-white/40 lg:block'>
        {project.category}
      </span>

      {/* ONE-LINER */}
      <span className='min-w-0 flex-1 truncate text-sm text-zinc-500 dark:text-white/60'>
        {project.tagline ?? project.description.split('.')[0] + '.'}
      </span>

      {/* STACK */}
      <span className='hidden w-44 shrink-0 truncate text-right text-xs text-zinc-400 dark:text-white/40 lg:block'>
        {topTech.join(' · ')}
      </span>
      <span className='hidden w-36 shrink-0 truncate text-right text-xs text-zinc-400 dark:text-white/40 sm:block lg:hidden'>
        {topTechTablet.join(' · ')}
      </span>

      {/* → */}
      <span className='shrink-0 text-zinc-400 transition-[transform,color] duration-200 group-hover:translate-x-1 group-hover:text-zinc-900 dark:text-white/40 dark:group-hover:text-white'>
        →
      </span>
    </button>
  );
};

export default ProjectIndexRow;
