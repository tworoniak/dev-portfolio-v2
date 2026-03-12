import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cv } from '../../utils/color';
import { useCursorGlow } from '../../hooks/useCursorGlow';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const { xPc, yPc } = useCursorGlow();
  const { pathname } = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMobileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMobileOpen]);

  useEffect(() => {
    if (!isMobileOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      const clickedInsidePanel = panelRef.current?.contains(target);
      const clickedButton = buttonRef.current?.contains(target);

      if (!clickedInsidePanel && !clickedButton) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [isMobileOpen]);

  const r = cv(xPc);
  const g = cv(yPc);
  const b = 255 - r;

  const accent = `rgb(${r} ${g} ${b})`;
  const accentSoft = `rgb(${r} ${g} ${b} / 0.72)`;
  const logoColor = `rgb(${r} ${g} ${b} / 0.82)`;

  const isItemActive = (to: string) =>
    to === '/'
      ? pathname === '/'
      : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <header
      className={[
        'relative sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300',
        isScrolled
          ? 'border-b border-white/10 bg-black/75 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-xl'
          : 'border-b border-white/10 bg-black/45 backdrop-blur',
      ].join(' ')}
    >
      <div
        className='pointer-events-none absolute inset-x-0 bottom-0 h-px'
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${accentSoft} 18%, ${accentSoft} 82%, transparent 100%)`,
        }}
        aria-hidden='true'
      />

      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
        <NavLink
          to='/'
          end
          className='text-xl font-bold tracking-tight transition-colors duration-300'
          style={{ color: logoColor }}
        >
          Woroniak.dev
        </NavLink>

        <nav className='hidden items-center gap-8 text-sm md:flex'>
          {navItems.map((item) => {
            const active = isItemActive(item.to);

            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  [
                    'group relative pb-1 transition-colors duration-300',
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white',
                  ].join(' ')
                }
              >
                {item.label}

                <span
                  className='pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100'
                  style={{ backgroundColor: accentSoft }}
                  aria-hidden='true'
                />

                {active ? (
                  <motion.span
                    layoutId='active-nav-indicator'
                    className='pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] rounded-full'
                    style={{
                      background: `linear-gradient(90deg, transparent 0%, ${accent} 15%, ${accent} 85%, transparent 100%)`,
                      boxShadow: `0 0 12px ${accentSoft}`,
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                    aria-hidden='true'
                  />
                ) : null}
              </NavLink>
            );
          })}
        </nav>

        <button
          ref={buttonRef}
          type='button'
          onClick={() => setIsMobileOpen((open) => !open)}
          className='inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden'
          style={{
            boxShadow: isMobileOpen ? `0 0 0 1px ${accentSoft}` : undefined,
          }}
          aria-expanded={isMobileOpen}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/20 md:hidden'
              aria-hidden='true'
            />

            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className='border-t border-white/10 bg-black/90 backdrop-blur-xl md:hidden'
            >
              <nav className='mx-auto flex max-w-7xl flex-col px-6 py-4'>
                {navItems.map((item) => {
                  const active = isItemActive(item.to);

                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.end}
                      onClick={() => setIsMobileOpen(false)}
                      className={({ isActive }) =>
                        [
                          'relative rounded-md px-3 py-3 text-sm transition-colors duration-300',
                          isActive
                            ? 'text-white'
                            : 'text-zinc-400 hover:bg-white/5 hover:text-white',
                        ].join(' ')
                      }
                    >
                      <span className='relative z-10'>{item.label}</span>

                      {active ? (
                        <motion.span
                          layoutId='mobile-active-nav-indicator'
                          className='absolute inset-0 rounded-md'
                          style={{
                            background: `linear-gradient(90deg, rgb(${r} ${g} ${b} / 0.14), transparent 85%)`,
                            boxShadow: `inset 0 0 0 1px rgb(${r} ${g} ${b} / 0.24)`,
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 40,
                          }}
                          aria-hidden='true'
                        />
                      ) : null}
                    </NavLink>
                  );
                })}
              </nav>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Header;
