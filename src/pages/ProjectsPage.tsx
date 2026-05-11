import { lazy, Suspense, useState } from 'react';
import type { Project } from '../types/project';
import IntroSection from '../components/pages/projects/IntroSection';
import ProjectsIndex from '../components/pages/projects/ProjectsIndex';
import PageTitle from '../components/ui/PageTitle';
import AboutCTA from '../components/pages/about/AboutCTA';

const ProjectModal = lazy(() => import('../components/projects/ProjectModal'));

const ProjectsPage = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [hasOpenedModal, setHasOpenedModal] = useState(false);

  const handleOpenProject = (project: Project) => {
    setHasOpenedModal(true);
    setActiveProject(project);
  };

  return (
    <>
      <div>
        <PageTitle title='Projects' />
        <IntroSection />
        <ProjectsIndex onOpenProject={handleOpenProject} />
        <AboutCTA />
      </div>

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

export default ProjectsPage;
