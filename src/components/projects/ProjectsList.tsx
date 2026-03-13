import type { Project } from '../../types/project';
import ProjectListItem from './ProjectListItem';

type ProjectsListProps = {
  projects: Project[];
  onOpenProject: (project: Project) => void;
};

const ProjectsList = ({ projects, onOpenProject }: ProjectsListProps) => {
  return (
    <section className='mx-auto max-w-7xl px-6 py-16'>
      <div className='mb-4'>
        <p className='text-xs uppercase tracking-[0.3em] text-zinc-500'>
          Projects
        </p>
        {/* <h2 className='mt-2 text-3xl font-bold text-white'>Selected Work</h2> */}
      </div>

      <div className='grid gap-6 grid-cols-1'>
        {projects.map((project) => (
          <ProjectListItem
            key={project.id}
            project={project}
            onOpen={onOpenProject}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
