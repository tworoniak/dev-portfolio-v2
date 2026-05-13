import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeXml, ExternalLink, BookOpen, X } from 'lucide-react';
import type { ProjectIndex } from '../../types/project';

type ProjectModalProps = {
  project: ProjectIndex | null;
  onClose: () => void;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Capture trigger, move focus into modal on open; return focus on close
  useEffect(() => {
    if (!project) return;
    triggerRef.current = document.activeElement as HTMLElement;
    const id = setTimeout(() => closeButtonRef.current?.focus(), 50);
    return () => {
      clearTimeout(id);
      triggerRef.current?.focus();
    };
  }, [project]);

  // Escape key
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  // Focus trap
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusables =
        modalRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
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
  }, [project]);

  // Scroll lock
  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    const originalTouch = document.body.style.touchAction;
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouch;
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project ? (
        <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8'>
          <motion.button
            type='button'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className='absolute inset-0 bg-black/70 backdrop-blur-sm'
            aria-label='Close project modal'
          />

          <motion.div
            ref={modalRef}
            role='dialog'
            aria-modal='true'
            aria-labelledby='modal-title'
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 26,
            }}
            className='relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-black/90 shadow-[0_20px_80px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.65)]'
          >
            <button
              ref={closeButtonRef}
              type='button'
              onClick={onClose}
              className='absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 dark:border-white/20 bg-zinc-100 dark:bg-black/60 text-zinc-600 dark:text-white transition hover:bg-zinc-200 dark:hover:bg-black/80 hover:border-zinc-300 dark:hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:focus-visible:outline-white/50'
              aria-label='Close modal'
            >
              <X size={22} />
            </button>

            <div className='max-h-[85vh] overflow-y-auto modal-scroll'>
              <motion.div
                layoutId={`image-wrap-${project.slug}`}
                className='overflow-hidden max-h-[40vh] bg-zinc-200 dark:bg-zinc-900'
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className='h-auto w-full object-cover'
                />
              </motion.div>

              <div className='p-6 md:p-8'>
                <motion.h2 id='modal-title' className='text-3xl font-bold text-zinc-900 dark:text-white'>
                  {project.title}
                </motion.h2>

                <motion.p
                  layoutId={`tech-${project.slug}`}
                  className='mt-3 text-base text-zinc-500 dark:text-zinc-400'
                >
                  {project.tech.join(', ')}
                </motion.p>

                <p className='mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300'>
                  {project.description}
                </p>

                <div className='mt-8 flex flex-wrap gap-3'>
                  <Link
                    to={`/projects/${project.slug}`}
                    className='flex items-center gap-1 rounded-md border border-zinc-200 dark:border-white/10 px-4 py-2 text-sm font-medium transition hover:bg-zinc-100 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:focus-visible:outline-white/50'
                  >
                    <BookOpen size={16} strokeWidth={1.5} />
                    Read case study
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noreferrer'
                      onClick={onClose}
                      className='flex items-center gap-1 rounded-md border border-zinc-200 dark:border-white/10 px-4 py-2 text-sm font-medium transition hover:bg-zinc-100 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:focus-visible:outline-white/50'
                    >
                      <ExternalLink size={16} strokeWidth={1.5} />
                      Open
                    </a>
                  )}

                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target='_blank'
                      rel='noreferrer'
                      onClick={onClose}
                      className='flex items-center gap-1 rounded-md border border-zinc-200 dark:border-white/10 px-4 py-2 text-sm font-medium transition hover:bg-zinc-100 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:focus-visible:outline-white/50'
                    >
                      <CodeXml size={16} strokeWidth={1.5} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};

export default ProjectModal;
