import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { ExternalLink, CodeXml } from 'lucide-react';

const ProjectDetailPage = () => {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className='mx-auto max-w-4xl px-6 py-20 text-white'>
        <h1 className='max-w-3xl text-4xl text-center font-bold leading-tight'>
          Project not found.
        </h1>
      </div>
    );
  }

  return (
    <main className='mx-auto max-w-6xl px-6 py-20 text-white'>
      {/* HERO IMAGE */}

      <div className='mb-12 max-h-96 overflow-hidden rounded-xl border border-white/10'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full object-cover object-center'
        />
      </div>

      {/* TITLE */}

      <h1 className='text-4xl font-bold'>{project.title}</h1>

      <p className='mt-4 text-zinc-400'>{project.tech.join(' • ')}</p>

      <p className='mt-6 text-lg leading-8 text-zinc-300'>
        {project.description}
      </p>

      {/* LINKS */}

      <div className='mt-8 flex gap-3'>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-1 rounded-md border border-white/10 px-4 py-2 text-sm hover:bg-white/10'
          >
            <ExternalLink size={16} />
            Live Site
          </a>
        )}

        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-1 rounded-md border border-white/10 px-4 py-2 text-sm hover:bg-white/10'
          >
            <CodeXml size={16} />
            Source Code
          </a>
        )}
      </div>

      {/* SECTION DIVIDER */}

      <hr className='my-16 border-white/10' />

      {/* PROBLEM */}

      <section className='space-y-6'>
        <h2 className='text-2xl font-semibold'>The Problem</h2>

        <p className='text-zinc-300 leading-7'>
          Describe the problem the project solves. Explain why the problem
          matters and what limitations existed before building this solution.
        </p>
      </section>

      <hr className='my-16 border-white/10' />

      {/* SOLUTION */}

      <section className='space-y-6'>
        <h2 className='text-2xl font-semibold'>The Solution</h2>

        <p className='text-zinc-300 leading-7'>
          Describe your solution approach and the design decisions that guided
          the implementation.
        </p>
      </section>

      <hr className='my-16 border-white/10' />

      {/* FEATURES */}

      <section className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Key Features</h2>

        <ul className='space-y-3 text-zinc-300'>
          <li>• Feature one</li>
          <li>• Feature two</li>
          <li>• Feature three</li>
        </ul>
      </section>

      <hr className='my-16 border-white/10' />

      {/* ARCHITECTURE */}

      <section className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Architecture Decisions</h2>

        <p className='text-zinc-300 leading-7'>
          Explain technical decisions such as state management, API structure,
          component architecture, or performance considerations.
        </p>
      </section>

      <hr className='my-16 border-white/10' />

      {/* LESSONS */}

      <section className='space-y-6'>
        <h2 className='text-2xl font-semibold'>Lessons Learned</h2>

        <p className='text-zinc-300 leading-7'>
          Reflect on what you learned building the project and what you might do
          differently in the future.
        </p>
      </section>
    </main>
  );
};

export default ProjectDetailPage;
