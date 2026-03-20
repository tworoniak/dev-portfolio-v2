import IntroSection from '../components/pages/about/IntroSection';
import TechStackSection from '../components/pages/about/TechStackSection';
import TestimonialGrid from '../components/pages/about/TestimonialsGrid';
import GitHubHeatmap from '../components/projects/GitHubHeatmap';

const AboutPage = () => {
  return (
    <>
      <IntroSection />
      <TechStackSection />
      <TestimonialGrid />
      <GitHubHeatmap username='tworoniak' />
    </>
  );
};

export default AboutPage;
