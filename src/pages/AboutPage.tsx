import AboutCTA from '../components/pages/about/AboutCTA';
import BackgroundSection from '../components/pages/about/BackgroundSection';
import HeatmapSection from '../components/pages/about/HeatmapSection';
import IntroSection from '../components/pages/about/IntroSection';
import TechStackSection from '../components/pages/about/TechStackSection';
import TestimonialGrid from '../components/pages/about/TestimonialsGrid';
import PageTitle from '../components/ui/PageTitle';

const AboutPage = () => {
  return (
    <>
      <PageTitle title='About' />
      <IntroSection />
      <TechStackSection />
      <BackgroundSection />
      <TestimonialGrid />
      <HeatmapSection username='tworoniak' />
      <AboutCTA />
    </>
  );
};

export default AboutPage;
