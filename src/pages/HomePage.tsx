import { lazy, Suspense, useState } from 'react';
import type { Project } from '../types/project';
import HeroSection from '../components/pages/home/HeroSection';
import NowSnapshot from '../components/pages/home/NowSnapshot';
import SelectedWork from '../components/pages/home/SelectedWork';
import ExperimentsIndex from '../components/pages/home/ExperimentsIndex';
import ContactFooter from '../components/pages/home/ContactFooter';
import PageTitle from '../components/ui/PageTitle';

const ProjectModal = lazy(() => import('../components/projects/ProjectModal'));

const HomePage = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [hasOpenedModal, setHasOpenedModal] = useState(false);

  const handleOpenProject = (project: Project) => {
    setHasOpenedModal(true);
    setActiveProject(project);
  };

  return (
    <>
      <PageTitle />
      <HeroSection />
      <NowSnapshot />
      <SelectedWork />
      {/* <ProjectsGrid
        title='Featured Projects'
        projects={featuredProjects}
        onOpenProject={handleOpenProject}
      /> */}
      <ExperimentsIndex onOpenProject={handleOpenProject} />
      <ContactFooter />

      {/* Modal — chunk loads on first open, stays mounted for exit animations */}
      {hasOpenedModal && (
        <Suspense fallback={null}>
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
