import { useEffect, useRef } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import { motion } from 'framer-motion';
import { CodeXml, ExternalLink } from 'lucide-react';
import { clampPercent, cursorToPastelRgb } from '../../utils/color';
import type { Project } from '../../types/project';

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  const cardRef = useRef<HTMLElement | null>(null);
  const hoveredRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const xPcRef = useRef(50);
  const yPcRef = useRef(50);

  useEffect(() => {
    const animate = () => {
      if (cardRef.current && hoveredRef.current) {
        const t = performance.now() / 1000;

        const animatedXPc = clampPercent(
          xPcRef.current + Math.sin(t * 1.1) * 18,
        );
        const animatedYPc = clampPercent(
          yPcRef.current + Math.cos(t * 0.8) * 16,
        );

        const { r, g, b } = cursorToPastelRgb(animatedXPc, animatedYPc);

        cardRef.current.style.borderColor = `rgb(${r} ${g} ${b} / 70%)`;
        cardRef.current.style.boxShadow = `
          0 0 0 1px rgb(${r} ${g} ${b} / 18%),
          0 10px 30px rgb(${r} ${g} ${b} / 8%)
        `;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: ReactMouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    xPcRef.current = ((e.clientX - rect.left) / rect.width) * 100;
    yPcRef.current = ((e.clientY - rect.top) / rect.height) * 100;
  };

  const handleMouseEnter = () => {
    hoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    hoveredRef.current = false;

    if (cardRef.current) {
      cardRef.current.style.borderColor = '';
      cardRef.current.style.boxShadow = '';
    }
  };

  return (
    <motion.article
      layoutId={`card-${project.slug}`}
      ref={cardRef}
      onClick={() => onOpen(project)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='project-card group cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-black/15 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-3 hover:bg-black/30 flex flex-col h-full'
    >
      {/* <div
        className='pointer-events-none absolute inset-0 z-0 transition-opacity duration-300'
        style={glowStyle}
        aria-hidden='true'
      /> */}

      <motion.div className='relative z-10 m-3 aspect-[16/10] overflow-hidden rounded-md bg-zinc-900'>
        <img
          src={project.image}
          alt={project.title}
          className='h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]'
        />
      </motion.div>

      <div className='relative z-10 flex flex-col flex-1 p-5'>
        <h3 className='text-2xl font-semibold text-white'>{project.title}</h3>

        <p className='mt-2 text-sm text-zinc-400'>{project.tech.join(', ')}</p>

        <p className='my-4 text-base leading-7 text-zinc-300 line-clamp-4'>
          {project.description}
        </p>

        <div className='flex items-center gap-3 mt-auto flex-shrink-0'>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target='_blank'
              rel='noreferrer'
              onClick={(e) => e.stopPropagation()}
              className='inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-4 py-1.5 sm:py-2 border border-black/20 dark:border-white/20 rounded hover:border-black/40 dark:hover:border-white/40 hover:bg-black/5 dark:hover:bg-white/5 transition-all text-xs sm:text-sm font-medium'
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

export default ProjectCard;
