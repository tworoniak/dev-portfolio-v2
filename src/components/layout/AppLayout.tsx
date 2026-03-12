import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AmbientBackground from '../effects/AmbientBackground';

const AppLayout = () => {
  return (
    <main className='relative min-h-screen text-white'>
      <AmbientBackground />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default AppLayout;
