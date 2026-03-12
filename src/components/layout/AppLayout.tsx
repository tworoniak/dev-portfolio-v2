import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AmbientBackground from '../effects/AmbientBackground';
import ScrollToTopButton from '../ui/ScrollToTopButton';
// import CursorBloom from '../effects/CursorBloom';

const AppLayout = () => {
  return (
    <main className='relative min-h-screen text-white'>
      <AmbientBackground />
      {/* <CursorBloom /> */}
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
};

export default AppLayout;
