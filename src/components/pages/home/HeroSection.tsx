import { Link } from 'react-router-dom';
import { useAccentColor } from '../../../hooks/useAccentColor';
import AvatarBlock from './AvatarBlock';
import TechTicker from './TechTicker';

const HeroSection = () => {
  const { accent } = useAccentColor();

  return (
    <>
      <section className='relative overflow-hidden'>
        <div className='mx-auto max-w-7xl px-6 pt-20 pb-12 sm:pt-28 sm:pb-16'>
          {/* Avatar + status pill */}
          <div className='mb-8 flex flex-wrap items-center gap-4'>
            <AvatarBlock />
            <span className='inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-600 dark:text-emerald-400'>
              <span className='h-2 w-2 rounded-full bg-emerald-400' />
              Available for senior front-end roles · Kansas City, Missouri
            </span>
          </div>

          {/* Headline */}
          <h1 className='max-w-4xl text-5xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-6xl lg:text-7xl'>
            Hi, I&rsquo;m Thomas.
            <br />I design and build{' '}
            <em style={{ color: accent }}>thoughtful</em> digital experiences.
          </h1>

          {/* Sub-copy */}
          <p className='mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400'>
            Front-end engineer focused on building{' '}
            <span className='font-semibold text-zinc-900 dark:text-white'>
              intuitive, scalable interfaces
            </span>{' '}
            with React, TypeScript, and modern design systems. Currently
            building{' '}
            <span className='font-semibold' style={{ color: accent }}>
              NeuroStack
            </span>{' '}
            — a memory dashboard for AI agents.
          </p>

          {/* CTA row */}
          <div className='mt-10 flex flex-wrap items-center gap-4'>
            <Link
              to='/projects'
              className='inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100'
            >
              View selected work →
            </Link>
            <Link
              to='/contact'
              className='inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/5'
            >
              Get in touch
            </Link>
            <a
              href='/resume/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm font-semibold text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
            >
              Résumé ↗
            </a>
          </div>
        </div>
      </section>
      <TechTicker />
    </>
  );
};

export default HeroSection;
