import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CodeXml, ExternalLink, BookOpen } from 'lucide-react';
import { useCardGlow } from '../../hooks/useCardGlow';
import type { Project } from '../../types/project';

type ProjectListItemProps = {
  project: Project;
};

const ProjectListItem = ({ project }: ProjectListItemProps) => {
  const { cardRef, handleMouseMove, handleMouseEnter, handleMouseLeave } = useCardGlow();

  return (
    <motion.article
      layoutId={`card-${project.slug}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='project-list-item group overflow-hidden rounded-lg border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-black/15 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:bg-zinc-100 dark:hover:bg-black/30 flex flex-col lg:flex-row h-full'
    >
      <motion.div className='relative z-10 m-3 lg:max-w-[400px] aspect-[16/10] overflow-hidden rounded-md bg-zinc-200 dark:bg-zinc-900'>
        <img
          src={project.image}
          alt={project.title}
          className='h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]'
        />
      </motion.div>

      <div className='relative z-10 flex flex-col flex-1 p-5'>
        <h3 className='text-2xl font-semibold text-zinc-900 dark:text-white'>{project.title}</h3>

        <p className='mt-2 text-sm text-zinc-500 dark:text-zinc-400'>{project.tech.join(', ')}</p>

        <p className='my-4 text-base leading-7 text-zinc-600 dark:text-zinc-300 line-clamp-4'>
          {project.description}
        </p>

        <div className='flex flex-col md:flex-row gap-3 mt-auto flex-shrink-0'>
          <div className='flex gap-3'>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noreferrer'
                onClick={(e) => e.stopPropagation()}
                className='inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-4 py-1.5 sm:py-2 border border-black/20 dark:border-white/20 rounded hover:border-black/40 dark:hover:border-white/40 hover:bg-black/5 dark:hover:bg-white/5 transition-all text-xs sm:text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:focus-visible:outline-white/50'
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
                className='inline-flex items-center gap-1 rounded-md border border-zinc-200 dark:border-white/10 px-4 py-2 text-sm font-medium transition hover:bg-zinc-100 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:focus-visible:outline-white/50'
              >
                <CodeXml size={16} strokeWidth={1.5} />
                View Code
              </a>
            )}
          </div>
          <Link
            to={`/projects/${project.slug}`}
            className='inline-flex items-center justify-center gap-1 rounded-md border border-zinc-200 dark:border-white/10 px-4 py-2 text-sm font-medium transition hover:bg-zinc-100 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:focus-visible:outline-white/50'
          >
            <BookOpen size={16} strokeWidth={1.5} />
            Read case study
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectListItem;
