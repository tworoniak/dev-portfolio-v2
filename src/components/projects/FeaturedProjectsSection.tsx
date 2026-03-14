import type { Project } from '../../types/project';
import FeaturedPrimaryCard from './FeaturedPrimaryCard';
import ProjectCard from './ProjectCard';

type FeaturedProjectsSectionProps = {
  primaryProject: Project;
  secondaryProjects: Project[];
  onOpenProject: (project: Project) => void;
};

const FeaturedProjectsSection = ({
  primaryProject,
  secondaryProjects,
  onOpenProject,
}: FeaturedProjectsSectionProps) => {
  return (
    <section className='mx-auto max-w-7xl px-6 py-16'>
      <div className='mb-6'>
        <p className='text-xs uppercase tracking-[0.3em] text-zinc-500'>
          Featured Projects
        </p>
        <h2 className='mt-2 text-3xl font-bold text-white'>Selected Work</h2>
      </div>

      <div className='grid gap-6 lg:grid-cols-[1.4fr_1fr]'>
        <FeaturedPrimaryCard project={primaryProject} onOpen={onOpenProject} />

        <div className='grid gap-6'>
          {secondaryProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
