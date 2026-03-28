import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import AmbientBackground from '../effects/AmbientBackground';
import ScrollToTopButton from '../ui/ScrollToTopButton';
import ScrollToTop from '../ui/ScrollToTop';
const AppLayout = () => {
  return (
    <>
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black'
      >
        Skip to main content
      </a>

      <ScrollToTop />
      <AmbientBackground />
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default AppLayout;
