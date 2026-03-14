import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import type { Project } from '../types/project';
import IntroSection from '../components/pages/home/IntroSection';
import ProjectsGrid from '../components/projects/ProjectsGrid';
// import FeaturedProjectsSection from '../components/projects/FeaturedProjectsSection';
import ProjectModal from '../components/projects/ProjectModal';

const HomePage = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const experimentProjects = projects.filter((p) => p.experiment);

  // const featuredProjects = useMemo(
  //   () => projects.filter((project) => project.featured),
  //   [],
  // );

  // const primaryProject = featuredProjects[0] ?? null;
  // const secondaryProjects = featuredProjects.slice(1, 3);

  return (
    <>
      <IntroSection />
      <ProjectsGrid
        title='Featured Projects'
        projects={featuredProjects}
        onOpenProject={(project) => setActiveProject(project)}
      />
      <ProjectsGrid
        title='Experiments'
        projects={experimentProjects}
        onOpenProject={(project) => setActiveProject(project)}
      />

      {/* {primaryProject ? (
        <FeaturedProjectsSection
          primaryProject={primaryProject}
          secondaryProjects={secondaryProjects}
          onOpenProject={setActiveProject}
        />
      ) : null}

      <section className='mx-auto max-w-7xl px-6 pb-16'>
        <div className='mt-10 text-center'>
          <Link
            to='/projects'
            className='inline-flex items-center rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white'
          >
            View all projects
          </Link>
        </div>
      </section> */}

      {/* Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
};

export default HomePage;
