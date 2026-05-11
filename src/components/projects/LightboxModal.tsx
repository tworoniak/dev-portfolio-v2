import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type Screenshot = { src: string; alt: string };

type LightboxModalProps = {
  screenshots: Screenshot[];
  initialIndex: number;
  onClose: () => void;
  thumbnailRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  triggerIndex: number;
};

const FOCUSABLE = 'button:not([disabled])';

const LightboxModal = ({
  screenshots,
  initialIndex,
  onClose,
  thumbnailRefs,
  triggerIndex,
}: LightboxModalProps) => {
  const [index, setIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const current = screenshots[index];
  const hasPrev = index > 0;
  const hasNext = index < screenshots.length - 1;

  const goNext = useCallback(() => {
    if (!hasNext) return;
    setDirection(1);
    setIndex((i) => i + 1);
  }, [hasNext]);

  const goPrev = useCallback(() => {
    if (!hasPrev) return;
    setDirection(-1);
    setIndex((i) => i - 1);
  }, [hasPrev]);

  // Focus close button on open; return focus to trigger on close
  useEffect(() => {
    const id = setTimeout(() => closeButtonRef.current?.focus(), 50);
    return () => {
      clearTimeout(id);
      thumbnailRefs.current[triggerIndex]?.focus();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Escape + arrow keys
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, goNext, goPrev]);

  // Focus trap
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusables = modalRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Scroll lock
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalTouch = document.body.style.touchAction;
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouch;
    };
  }, []);

  const imageVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir * 40,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir * -40,
    }),
  };

  return (
    <div className='fixed inset-0 z-[200] flex items-center justify-center p-4'>
      {/* Backdrop */}
      <motion.button
        type='button'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        onClick={onClose}
        className='absolute inset-0 bg-black/85 backdrop-blur-sm'
        aria-label='Close screenshot viewer'
      />

      {/* Modal */}
      <motion.div
        ref={modalRef}
        role='dialog'
        aria-modal='true'
        aria-label='Screenshot viewer'
        initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        className='relative z-10 flex w-full max-w-5xl flex-col items-center gap-4'
      >
        {/* Close */}
        <div className='flex w-full justify-end'>
          <button
            ref={closeButtonRef}
            type='button'
            onClick={onClose}
            aria-label='Close screenshot viewer'
            className='flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-black/60 text-white transition hover:bg-black/80 hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50'
          >
            <X size={20} />
          </button>
        </div>

        {/* Image + nav */}
        <div className='relative flex w-full items-center justify-center'>
          {/* Prev */}
          {screenshots.length > 1 && (
            <button
              type='button'
              onClick={goPrev}
              disabled={!hasPrev}
              aria-label='Previous screenshot'
              className='absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-black/60 text-white transition hover:bg-black/80 disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50'
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Image */}
          <div className='overflow-hidden rounded-xl border border-white/10 w-full'>
            <AnimatePresence mode='wait' custom={direction}>
              <motion.figure
                key={current.src}
                layoutId={`screenshot-${current.src}`}
                custom={direction}
                variants={imageVariants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                className='m-0'
              >
                <img
                  src={current.src}
                  alt={current.alt}
                  className='h-auto max-h-[75vh] w-full object-contain bg-zinc-900'
                />
                <figcaption
                  aria-live='polite'
                  className='sr-only'
                >
                  {`Screenshot ${index + 1} of ${screenshots.length}: ${current.alt}`}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Next */}
          {screenshots.length > 1 && (
            <button
              type='button'
              onClick={goNext}
              disabled={!hasNext}
              aria-label='Next screenshot'
              className='absolute right-0 z-10 flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-black/60 text-white transition hover:bg-black/80 disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50'
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Counter */}
        {screenshots.length > 1 && (
          <p aria-hidden='true' className='text-sm text-zinc-400'>
            {index + 1} / {screenshots.length}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default LightboxModal;
