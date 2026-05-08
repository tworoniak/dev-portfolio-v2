import { lazy, Suspense, useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../types/project';
import HeroSection from '../components/pages/home/HeroSection';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import PageTitle from '../components/ui/PageTitle';

const ProjectModal = lazy(() => import('../components/projects/ProjectModal'));

const HomePage = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [hasOpenedModal, setHasOpenedModal] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const experimentProjects = projects.filter((p) => p.experiment);

  const handleOpenProject = (project: Project) => {
    setHasOpenedModal(true);
    setActiveProject(project);
  };

  return (
    <>
      <PageTitle />
      <HeroSection />
      <ProjectsGrid
        title='Featured Projects'
        projects={featuredProjects}
        onOpenProject={handleOpenProject}
      />
      <ProjectsGrid
        title='Experiments'
        projects={experimentProjects}
        onOpenProject={handleOpenProject}
      />

      {/* Modal — chunk loads on first open, stays mounted for exit animations */}
      {hasOpenedModal && (
        <Suspense>
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        </Suspense>
      )}
    </>
  );
};

export default HomePage;
