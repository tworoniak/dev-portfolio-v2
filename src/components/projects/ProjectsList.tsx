import type { ReactNode } from 'react';
import type { Project } from '../../types/project';
import ProjectListItem from './ProjectListItem';

type ProjectsListProps = {
  projects: Project[];
  filters?: ReactNode;
};

const ProjectsList = ({ projects, filters }: ProjectsListProps) => {
  return (
    <section className='mx-auto max-w-7xl px-2 sm:px-6 py-16'>
      <div className='mb-6'>
        <p className='text-xs uppercase tracking-[0.3em] text-zinc-500'>
          Projects
        </p>
        {filters && <div className='mt-4'>{filters}</div>}
      </div>

      <div className='grid gap-6 grid-cols-1'>
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectListItem
              key={project.id}
              project={project}
            />
          ))
        ) : (
          <p className='text-sm text-zinc-500'>No projects match the selected filters.</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsList;
