import { lazy, Suspense, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, CodeXml } from 'lucide-react';
import PageTitle from '../components/ui/PageTitle';
import ScreenshotGallery from '../components/projects/ScreenshotGallery';

const LightboxModal = lazy(
  () => import('../components/projects/LightboxModal'),
);

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className='mx-auto max-w-4xl px-6 py-20'>
        <h1 className='max-w-3xl text-4xl text-center font-bold leading-tight'>
          Project not found.
        </h1>
      </div>
    );
  }

  return (
    <main className='mx-auto max-w-6xl px-6 py-20'>
      <PageTitle title={project.title} />
      {/* HERO IMAGE */}

      <div className='mb-12 aspect-video max-h-96 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10'>
        <img
          src={project.image}
          alt={project.title}
          className='h-full w-full object-cover object-center'
        />
      </div>

      {/* TITLE */}

      <h1 className='text-4xl font-bold'>{project.title}</h1>

      <p className='mt-4 text-zinc-500 dark:text-zinc-400'>
        {project.tech.join(' • ')}
      </p>

      <p className='mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300'>
        {project.description}
      </p>

      {/* LINKS */}

      <div className='mt-8 flex gap-3'>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-1 rounded-md border border-zinc-200 dark:border-white/10 px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:focus-visible:outline-white/50'
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
            className='flex items-center gap-1 rounded-md border border-zinc-200 dark:border-white/10 px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:focus-visible:outline-white/50'
          >
            <CodeXml size={16} />
            Source Code
          </a>
        )}
      </div>

      {/* SECTION DIVIDER */}

      <hr className='my-16 border-zinc-200 dark:border-white/10' />

      {/* SCREENSHOTS GALLERY */}
      {project.screenshots && project.screenshots.length > 0 && (
        <>
          <ScreenshotGallery
            screenshots={project.screenshots}
            onOpen={(i) => setLightboxIndex(i)}
            thumbnailRefs={thumbnailRefs}
          />
          <hr className='my-16 border-zinc-200 dark:border-white/10' />
        </>
      )}

      {/* PROBLEM */}
      {project.problem && (
        <>
          <section className='space-y-6'>
            <h2 className='text-2xl font-semibold'>The Problem</h2>

            <p className='text-zinc-600 dark:text-zinc-300 leading-7'>
              {project.problem}
            </p>
          </section>

          <hr className='my-16 border-zinc-200 dark:border-white/10' />
        </>
      )}

      {/* SOLUTION */}
      {project.solution && (
        <>
          <section className='space-y-6'>
            <h2 className='text-2xl font-semibold'>The Solution</h2>

            <p className='text-zinc-600 dark:text-zinc-300 leading-7'>
              {project.solution}
            </p>
          </section>

          <hr className='my-16 border-zinc-200 dark:border-white/10' />
        </>
      )}

      {/* FEATURES */}
      {project.features && (
        <>
          <section className='space-y-6'>
            <h2 className='text-2xl font-semibold'>Key Features</h2>

            <ul className='space-y-3 text-zinc-600 dark:text-zinc-300 list-disc list-outside'>
              {(project.features ?? []).map((feature) => (
                <li key={feature} className='ml-8'>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <hr className='my-16 border-zinc-200 dark:border-white/10' />
        </>
      )}

      {/* ARCHITECTURE */}
      {project.architecture && (
        <>
          <section className='space-y-6'>
            <h2 className='text-2xl font-semibold'>Architecture Decisions</h2>

            <p className='text-zinc-600 dark:text-zinc-300 leading-7'>
              {project.architecture}
            </p>
          </section>

          <hr className='my-16 border-zinc-200 dark:border-white/10' />
        </>
      )}

      {/* LESSONS */}
      {project.lessons && (
        <>
          <section className='space-y-6'>
            <h2 className='text-2xl font-semibold'>Lessons Learned</h2>

            <p className='text-zinc-600 dark:text-zinc-300 leading-7'>
              {project.lessons}
            </p>
          </section>
        </>
      )}

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && project.screenshots && (
          <Suspense>
            <LightboxModal
              screenshots={project.screenshots}
              initialIndex={lightboxIndex}
              onClose={() => setLightboxIndex(null)}
              thumbnailRefs={thumbnailRefs}
              triggerIndex={lightboxIndex}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ProjectDetailPage;
