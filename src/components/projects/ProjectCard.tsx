import { useEffect, useRef } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import { CodeXml, ExternalLink } from 'lucide-react';
import { clampPercent, cursorToPastelRgb } from '../../utils/color';

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  codeUrl?: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
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
        cardRef.current.style.boxShadow = `0 0 0 1px rgb(${r} ${g} ${b} / 18%)`;
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
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='project-card group cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-black/5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-black/20'
    >
      <div className='aspect-[16/10] overflow-hidden bg-zinc-900 m-3 rounded-md'>
        <img
          src={project.image}
          alt={project.title}
          className='h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]'
        />
      </div>

      <div className='p-5'>
        <h3 className='text-2xl font-semibold text-white'>{project.title}</h3>

        <p className='mt-2 text-sm text-zinc-400'>{project.tech.join(', ')}</p>

        <p className='mt-4 text-base leading-7 text-zinc-300'>
          {project.description}
        </p>

        <div className='mt-6 flex gap-3'>
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
    </article>
  );
};

export default ProjectCard;
