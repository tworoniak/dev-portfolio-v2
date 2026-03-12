import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CodeXml, ExternalLink, X } from 'lucide-react';

type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  codeUrl?: string;
};

const ProjectModal = ({ project }: { project: Project }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') navigate(-1);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [navigate]);

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8'>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        type='button'
        onClick={() => navigate(-1)}
        className='absolute inset-0 bg-black/70 backdrop-blur-sm'
        aria-label='Close project modal'
      />

      <motion.div
        layoutId={`card-${project.slug}`}
        className='relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-[0_20px_80px_rgba(0,0,0,0.65)]'
      >
        <div className='relative'>
          <motion.div
            layoutId={`image-wrap-${project.slug}`}
            className='aspect-[16/8] overflow-hidden bg-zinc-900'
          >
            <motion.img
              layoutId={`image-${project.slug}`}
              src={project.image}
              alt={project.title}
              className='h-full w-full object-cover'
            />
          </motion.div>

          <button
            type='button'
            onClick={() => navigate(-1)}
            className='absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-black/60 text-white transition hover:bg-black/80'
            aria-label='Close modal'
          >
            <X size={22} />
          </button>
        </div>

        <div className='p-6 md:p-8'>
          <motion.h2
            layoutId={`title-${project.slug}`}
            className='text-3xl font-bold text-white'
          >
            {project.title}
          </motion.h2>

          <motion.p
            layoutId={`tech-${project.slug}`}
            className='mt-3 text-base text-zinc-400'
          >
            {project.tech.join(', ')}
          </motion.p>

          <p className='mt-6 max-w-3xl text-lg leading-8 text-zinc-300'>
            {project.description}
          </p>

          <div className='mt-8 border-t border-white/10 pt-6'>
            <h3 className='text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500'>
              How it works
            </h3>

            <ul className='mt-4 space-y-3 text-zinc-300'>
              <li>— Expand this area with project highlights</li>
              <li>— Core features, decisions, and implementation notes</li>
              <li>— Anything you want to preview before the case study page</li>
            </ul>
          </div>

          <div className='mt-8 flex flex-wrap gap-3'>
            <Link
              to={`/projects/${project.slug}`}
              className='rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10'
            >
              Read case study
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-1 rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10'
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
                className='flex items-center gap-1 rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10'
              >
                <CodeXml size={16} strokeWidth={1.5} />
                View Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
