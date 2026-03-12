import { projects } from '../data/projects';

import IntroSection from '../components/layout/IntroSection';
import ProjectsGrid from '../components/projects/ProjectsGrid';

export default function App() {
  return (
    <>
      <IntroSection />
      <ProjectsGrid projects={projects} />
    </>
  );
}
