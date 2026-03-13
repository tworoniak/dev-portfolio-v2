import { projects } from '../data/projects';
import ProjectsList from '../components/projects/ProjectsList';
import IntroSection from '../components/pages/projects/IntroSection';

const ProjectsPage = () => {
  return (
    <div>
      <IntroSection />
      <ProjectsList projects={projects} onOpenProject={() => {}} />
    </div>
  );
};

export default ProjectsPage;
