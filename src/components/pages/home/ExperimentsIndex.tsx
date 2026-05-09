import { useState } from 'react';
import { projects } from '../../../data/projects';
import type { Project } from '../../../types/project';
import ProjectCard from '../../projects/ProjectCard';
import ExperimentRow from './ExperimentRow';

const experiments = projects.filter((p) => p.experiment);

type Props = {
  onOpenProject: (project: Project) => void;
};

const ExperimentsIndex = ({ onOpenProject }: Props) => {
  const [view, setView] = useState<'list' | 'grid'>('list');

  return (
    <section className='mx-auto max-w-7xl px-2 sm:px-6 py-16'>
      {/* Header row */}
      <div className='mb-4 flex items-center justify-between'>
        <p className='text-xs uppercase tracking-[0.3em] text-zinc-500'>
          / Experiments
        </p>

        {/* Toggle — hidden on mobile, list view is always active there */}
        <div className='hidden items-center gap-1 rounded-full border border-white/10 p-1 sm:flex'>
          <button
            onClick={() => setView('grid')}
            className={`rounded-full px-3 py-1 text-xs transition-colors ${
              view === 'grid'
                ? 'bg-white text-black'
                : 'text-white/50 hover:text-white'
            }`}
          >
            Grid view
          </button>
          <button
            onClick={() => setView('list')}
            className={`rounded-full px-3 py-1 text-xs transition-colors ${
              view === 'list'
                ? 'bg-white text-black'
                : 'text-white/50 hover:text-white'
            }`}
          >
            List view
          </button>
        </div>
      </div>

      <h2 className='mb-6 text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl'>
        Built to learn. Shipped to show.
      </h2>

      {view === 'list' ? (
        <div className='divide-y divide-white/10'>
          {experiments.map((project, i) => (
            <ExperimentRow key={project.id} project={project} index={i} onOpen={onOpenProject} />
          ))}
        </div>
      ) : (
        <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
          {experiments.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={onOpenProject}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ExperimentsIndex;
