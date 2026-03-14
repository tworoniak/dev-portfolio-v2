import { motion } from 'framer-motion';
import { CodeXml, ExternalLink } from 'lucide-react';
import type { Project } from '../../types/project';

type FeaturedPrimaryCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

const FeaturedPrimaryCard = ({ project, onOpen }: FeaturedPrimaryCardProps) => {
  return (
    <motion.article
      onClick={() => onOpen(project)}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className='group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/10 transition-[border-color,box-shadow,background-color] duration-300 hover:bg-black/20'
    >
      <div className='relative aspect-[16/10] overflow-hidden bg-zinc-900'>
        <img
          src={project.image}
          alt={project.title}
          className='h-full w-full object-cover'
        />

        <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent' />
      </div>

      <div className='flex flex-1 flex-col p-6 md:p-8'>
        <p className='text-xs uppercase tracking-[0.28em] text-zinc-500'>
          Featured Project
        </p>

        <h3 className='mt-3 text-3xl font-bold text-white md:text-4xl'>
          {project.title}
        </h3>

        <p className='mt-3 text-sm text-zinc-400'>{project.tech.join(', ')}</p>

        <p className='mt-6 max-w-2xl text-base leading-8 text-zinc-300'>
          {project.description}
        </p>

        <div className='mt-auto flex flex-wrap gap-3 pt-8'>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target='_blank'
              rel='noreferrer'
              onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
              className='flex items-center gap-1 rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10'
            >
              <CodeXml size={16} strokeWidth={1.5} />
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedPrimaryCard;
