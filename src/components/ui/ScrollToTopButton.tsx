import { useScrollPosition } from '../../hooks/useScrollPosition';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const isVisible = useScrollPosition(300);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top z-10 hover:-translate-y-1 transition duration-300 hover:border hover:border-white/60 ${isVisible ? 'show' : ''}`}
      aria-label='Scroll to top'
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
