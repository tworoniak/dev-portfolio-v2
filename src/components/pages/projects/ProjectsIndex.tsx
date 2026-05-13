import { projectsIndex } from '../../../data/projects-index';
import type { ProjectIndex } from '../../../types/project';
import { useAccentColor } from '../../../hooks/useAccentColor';
import ProjectIndexRow from './ProjectIndexRow';

type Props = {
  onOpenProject: (project: ProjectIndex) => void;
};

const columnHeaders = (
  <div className='flex items-center gap-4 px-4 text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-white/25'>
    <span className='hidden w-8 shrink-0 lg:block'>#</span>
    <span className='w-36 shrink-0 sm:w-44'>Project</span>
    <span className='hidden w-12 shrink-0 sm:block'>Year</span>
    <span className='hidden w-24 shrink-0 lg:block'>Type</span>
    <span className='min-w-0 flex-1'>One-Liner</span>
    <span className='hidden w-44 shrink-0 text-right lg:block'>Stack</span>
    <span className='hidden w-36 shrink-0 text-right sm:block lg:hidden'>
      Stack
    </span>
    <span className='w-4 shrink-0' />
  </div>
);

const shipped = projectsIndex.filter((p) => !p.experiment);
const experiments = projectsIndex.filter((p) => p.experiment);

const ProjectsIndex = ({ onOpenProject }: Props) => {
  const { accent } = useAccentColor();

  return (
    <section className='mx-auto max-w-7xl px-2 sm:px-6 py-16'>
      {/* Section header */}
      <p className='text-xs uppercase tracking-[0.3em] text-zinc-500'>
        / Projects
      </p>
      <h2 className='mt-3 text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl'>
        Every build, condensed into a single view.
      </h2>
      <p className='mt-3 max-w-2xl text-sm text-zinc-500 dark:text-white/50'>
        The details are there when you want them.
      </p>

      {/* Projects group */}
      <div className='mt-12'>
        {columnHeaders}
        <div className='mt-1 divide-y divide-zinc-200 dark:divide-white/10'>
          {shipped.map((project, i) => (
            <ProjectIndexRow
              key={project.id}
              project={project}
              index={i}
              accent={accent}
              onOpen={onOpenProject}
            />
          ))}
        </div>
      </div>

      {/* Experiments group */}
      <div className='mt-14'>
        <p className='mb-8 ml-4 text-xs uppercase tracking-[0.3em] text-zinc-500'>
          / Experiments
        </p>
        {columnHeaders}
        <div className='mt-1 divide-y divide-zinc-200 dark:divide-white/10'>
          {experiments.map((project, i) => (
            <ProjectIndexRow
              key={project.id}
              project={project}
              index={i}
              accent={accent}
              onOpen={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsIndex;
