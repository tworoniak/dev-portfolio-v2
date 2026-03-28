import IntroSection from '../components/pages/about/IntroSection';
import TechStackSection from '../components/pages/about/TechStackSection';
import TestimonialGrid from '../components/pages/about/TestimonialsGrid';
import GitHubHeatmap from '../components/projects/GitHubHeatmap';
import PageTitle from '../components/ui/PageTitle';

const AboutPage = () => {
  return (
    <>
      <PageTitle title='About' />
      <IntroSection />
      <TechStackSection />
      <TestimonialGrid />
      <GitHubHeatmap username='tworoniak' />
    </>
  );
};

export default AboutPage;
