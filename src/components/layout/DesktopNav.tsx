import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

type NavItem = {
  to: string;
  label: string;
  end?: boolean;
};

type DesktopNavProps = {
  navItems: NavItem[];
  pathname: string;
  accent: string;
  accentSoft: string;
};

type Indicator = {
  x: number;
  width: number;
  ready: boolean;
};

const DesktopNav = ({
  navItems,
  pathname,
  accent,
  accentSoft,
}: DesktopNavProps) => {
  const navRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const rafRef = useRef<number | null>(null);

  const [indicator, setIndicator] = useState<Indicator>({
    x: 0,
    width: 0,
    ready: false,
  });

  const isItemActive = useCallback(
    (to: string) =>
      to === '/'
        ? pathname === '/'
        : pathname === to || pathname.startsWith(`${to}/`),
    [pathname],
  );

  const measureIndicator = useCallback(() => {
    const activeItem = navItems.find((item) => isItemActive(item.to));
    const navEl = navRef.current;
    const activeEl = activeItem ? itemRefs.current[activeItem.to] : null;

    if (!navEl || !activeEl) {
      setIndicator((prev) => (prev.ready ? { ...prev, ready: false } : prev));
      return;
    }

    const navRect = navEl.getBoundingClientRect();
    const itemRect = activeEl.getBoundingClientRect();

    const next = {
      x: itemRect.left - navRect.left,
      width: itemRect.width,
      ready: true,
    };

    setIndicator((prev) => {
      if (
        prev.ready === next.ready &&
        prev.x === next.x &&
        prev.width === next.width
      ) {
        return prev;
      }

      return next;
    });
  }, [isItemActive, navItems]);

  const scheduleMeasure = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      measureIndicator();
      rafRef.current = null;
    });
  }, [measureIndicator]);

  useLayoutEffect(() => {
    scheduleMeasure();

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [scheduleMeasure, pathname]);

  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;

    const resizeObserver = new ResizeObserver(() => {
      scheduleMeasure();
    });

    resizeObserver.observe(navEl);

    Object.values(itemRefs.current).forEach((el) => {
      if (el) resizeObserver.observe(el);
    });

    const onResize = () => scheduleMeasure();

    window.addEventListener('resize', onResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, [scheduleMeasure, navItems]);

  return (
    <nav
      ref={navRef}
      className='relative hidden items-center gap-8 text-sm md:flex'
    >
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          ref={(el) => {
            itemRefs.current[item.to] = el;
          }}
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
        </NavLink>
      ))}

      {indicator.ready ? (
        <motion.span
          className='pointer-events-none absolute -bottom-1 left-0 h-[2px] rounded-full'
          animate={{
            x: indicator.x,
            width: indicator.width,
          }}
          transition={{
            type: 'spring',
            stiffness: 420,
            damping: 38,
          }}
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${accent} 15%, ${accent} 85%, transparent 100%)`,
            boxShadow: `0 0 12px ${accentSoft}`,
          }}
          aria-hidden='true'
        />
      ) : null}
    </nav>
  );
};

export default DesktopNav;
