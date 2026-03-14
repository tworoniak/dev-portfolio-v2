import type { Project } from '../../types/project';
import ProjectCard from './ProjectCard';

type ProjectsGridProps = {
  title?: string;
  projects: Project[];
  onOpenProject: (project: Project) => void;
};

const ProjectsGrid = ({
  projects,
  title,
  onOpenProject,
}: ProjectsGridProps) => {
  return (
    <section className='mx-auto max-w-7xl px-6 py-16'>
      <div className='mb-4'>
        <p className='text-xs uppercase tracking-[0.3em] text-zinc-500'>
          {title ?? 'Projects'}
        </p>
      </div>

      <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={onOpenProject}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
