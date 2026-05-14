import { motion } from 'framer-motion';
import { ExternalLink, CodeXml } from 'lucide-react';
import { useCardGlow } from '../../hooks/useCardGlow';
import OptimizedImage from '../shared/OptimizedImage';
import type { ProjectIndex } from '../../types/project';

type ProjectCardProps = {
  project: ProjectIndex;
  onOpen: (project: ProjectIndex) => void;
};

const TECH_VISIBLE_COUNT = 5;

const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  const { cardRef, handleMouseMove, handleMouseEnter, handleMouseLeave } =
    useCardGlow();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen(project);
    }
  };

  const visibleTech = project.tech.slice(0, TECH_VISIBLE_COUNT);
  const overflowCount = project.tech.length - TECH_VISIBLE_COUNT;

  const periodMeta = [project.quarter, project.category]
    .filter(Boolean)
    .join(' · ');
  const displayText = project.tagline ?? project.description;

  return (
    <motion.article
      layoutId={`card-${project.slug}`}
      ref={cardRef}
      onClick={() => onOpen(project)}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      className='project-card group cursor-pointer overflow-hidden rounded-lg border border-zinc-200 dark:border-white/10 bg-zinc-50/70 dark:bg-black/15 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-3 hover:bg-zinc-100 dark:hover:bg-black/30 flex flex-col h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:focus-visible:outline-white/50'
    >
      {/* Image */}
      <motion.div className='relative z-10 m-3 aspect-[16/10] overflow-hidden rounded-md bg-zinc-200 dark:bg-zinc-900'>
        <OptimizedImage
          src={project.image}
          alt={project.title}
          className='h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]'
          loading='lazy'
        />
        {(project.role || project.year) && (
          <div className='absolute top-2 left-2 flex items-center gap-1 px-2 py-1 rounded bg-black/50 backdrop-blur-sm text-xs text-white/80'>
            {project.role && <span>{project.role}</span>}
            {project.role && project.year && <span className='text-white/30'>·</span>}
            {project.year && <span>{project.year}</span>}
          </div>
        )}
        {(project.liveUrl || project.codeUrl) && (
          <div
            className='absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded bg-black/50 backdrop-blur-sm text-xs text-white/80'
            onClick={(e) => e.stopPropagation()}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-1 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white/50 rounded-sm'
              >
                <ExternalLink size={11} strokeWidth={1.5} />
                Live
              </a>
            )}
            {project.liveUrl && project.codeUrl && (
              <span className='text-white/30'>·</span>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-1 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white/50 rounded-sm'
              >
                <CodeXml size={11} strokeWidth={1.5} />
                Code
              </a>
            )}
          </div>
        )}
      </motion.div>

      <div className='relative z-10 flex flex-col flex-1 px-4 pb-4 pt-1 gap-3'>
        {/* Title row */}
        <div className='flex items-baseline justify-between gap-2'>
          <h3 className='text-xl font-semibold text-zinc-900 dark:text-white leading-tight'>
            {project.title}
          </h3>
          {periodMeta && (
            <span className='text-xs text-zinc-400 dark:text-zinc-500 flex-shrink-0'>
              {periodMeta}
            </span>
          )}
        </div>

        {/* Tagline */}
        <p className='text-sm leading-6 text-zinc-600 dark:text-zinc-300 line-clamp-2'>
          {displayText}
        </p>

        {/* Tech pills */}
        <div className='flex flex-wrap gap-1.5'>
          {visibleTech.map((item) => (
            <span
              key={item}
              className='text-xs px-2 py-0.5 rounded border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400'
            >
              {item}
            </span>
          ))}
          {overflowCount > 0 && (
            <span className='text-xs px-2 py-0.5 rounded border border-zinc-200 dark:border-white/10 text-zinc-500 dark:text-zinc-500'>
              +{overflowCount}
            </span>
          )}
        </div>

        {/* Stats rail */}
        {project.metrics && project.metrics.length > 0 && (
          <div className='flex items-start gap-0 mt-auto pt-3 border-t border-zinc-200 dark:border-white/10'>
            {project.metrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`flex flex-col flex-1 ${i > 0 ? 'border-l border-zinc-200 dark:border-white/10 pl-3' : ''}`}
              >
                <span className='text-sm font-semibold text-zinc-900 dark:text-white leading-none'>
                  {metric.value}
                </span>
                <span className='text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-tight'>
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
