import { useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../types/project';
import IntroSection from '../components/pages/home/IntroSection';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import ProjectModal from '../components/projects/ProjectModal';

const HomePage = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const experimentProjects = projects.filter((p) => p.experiment);

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
      {/* Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
};

export default HomePage;
