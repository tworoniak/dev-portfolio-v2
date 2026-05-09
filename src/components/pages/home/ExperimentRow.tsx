import type { Project } from '../../../types/project';

type Props = {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
};

const ExperimentRow = ({ project, index, onOpen }: Props) => {
  const topTech = project.tech.slice(0, 3);
  const indexLabel = String(index + 1).padStart(2, '0');

  return (
    <button
      onClick={() => onOpen(project)}
      className='group flex w-full items-center gap-4 rounded-md p-4 text-left transition-colors hover:bg-zinc-100 dark:hover:bg-white/[0.03]'
    >
      {/* Index */}
      <span className='hidden w-8 shrink-0 font-mono text-xs text-zinc-400 dark:text-white/30 lg:block'>
        {indexLabel}
      </span>

      {/* Name */}
      <span className='w-36 shrink-0 text-sm font-semibold text-zinc-900 dark:text-white sm:w-44 sm:text-base'>
        {project.title}
      </span>

      {/* Metadata: year · role / category */}
      <span className='hidden w-36 shrink-0 flex-col leading-5 lg:flex'>
        <span className='text-xs text-zinc-400 dark:text-white/40'>
          {project.year} · {project.role}
        </span>
        {project.category && (
          <span className='text-xs text-zinc-400 dark:text-white/40'>
            {project.category}
          </span>
        )}
      </span>

      {/* Tagline */}
      <span className='min-w-0 flex-1 truncate text-sm text-zinc-500 dark:text-white/60'>
        {project.tagline ?? project.description}
      </span>

      {/* Tech — tablet+ */}
      <span className='hidden w-44 shrink-0 truncate text-right text-xs text-zinc-400 dark:text-white/40 md:block'>
        {topTech.join(' · ')}
      </span>

      {/* Arrow */}
      <span className='shrink-0 text-zinc-400 transition-[transform,color] duration-200 group-hover:translate-x-1 group-hover:text-zinc-900 dark:text-white/40 dark:group-hover:text-white'>
        →
      </span>
    </button>
  );
};

export default ExperimentRow;
