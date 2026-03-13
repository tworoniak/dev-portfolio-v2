import { useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../types/project';
import IntroSection from '../components/pages/home/IntroSection';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import ProjectModal from '../components/projects/ProjectModal';

const HomePage = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <IntroSection />
      <ProjectsGrid
        projects={projects}
        onOpenProject={(project) => setActiveProject(project)}
      />
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
};

export default HomePage;
