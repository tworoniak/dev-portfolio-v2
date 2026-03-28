import { projects } from '../data/projects';
import ProjectsList from '../components/projects/ProjectsList';
import IntroSection from '../components/pages/projects/IntroSection';
import PageTitle from '../components/ui/PageTitle';

const ProjectsPage = () => {
  return (
    <div>
      <PageTitle title='Projects' />
      <IntroSection />
      <ProjectsList projects={projects} onOpenProject={() => {}} />
    </div>
  );
};

export default ProjectsPage;
