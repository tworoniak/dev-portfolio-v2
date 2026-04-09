import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useAccentColor } from '../../hooks/useAccentColor';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const isVisible = useScrollPosition(300);
  const { accentSoft } = useAccentColor();

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top z-10 hover:-translate-y-1 transition duration-300 ${isVisible ? 'show' : ''}`}
      style={{ borderColor: accentSoft }}
      aria-label='Scroll to top'
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
