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
