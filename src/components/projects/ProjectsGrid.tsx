import ProjectCard from './ProjectCard';

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  codeUrl?: string;
};

const ProjectsGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <section className='mx-auto max-w-7xl px-6 py-16'>
      <div className='mb-8'>
        <p className='text-xs uppercase tracking-[0.3em] text-zinc-500'>
          Projects
        </p>
      </div>

      <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
