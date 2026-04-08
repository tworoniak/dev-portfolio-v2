import { useTypewriter } from '../../../hooks/useTypewriter';

const titles = [
  'Senior Front-End Developer',
  'React Builder',
  'TypeScript Engineer',
  'UI / UX Enthusiast',
];

const IntroSection = () => {
  const { displayText, isTyping } = useTypewriter(titles);

  return (
    <section className='mx-auto max-w-7xl px-2 sm:px-6 py-12'>
      <h1 className='max-w-3xl text-4xl font-bold leading-tight'>
        {displayText}
        <span
          aria-hidden='true'
          className={`ml-0.5 inline-block h-[1em] w-0.5 translate-y-0.5 bg-current align-middle ${
            isTyping ? 'opacity-100' : 'animate-pulse'
          }`}
        />
      </h1>

      <p className='mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400'>
        I build polished, scalable web applications with React, TypeScript, and
        modern UI patterns. A mix of product thinking, clean architecture, and
        visual design.
      </p>

      <div className='mt-8 flex gap-8 text-sm text-zinc-500'>
        <span>12+ years experience</span>
        <span>React + TypeScript</span>
        <span>Portfolio projects</span>
      </div>
    </section>
  );
};

export default IntroSection;
