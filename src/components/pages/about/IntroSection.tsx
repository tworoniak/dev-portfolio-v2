const IntroSection = () => {
  return (
    <section className='flex flex-col md:flex-row gap-6 md:gap-12 mx-auto max-w-7xl px-2 sm:px-6 py-12'>
      <div>
        <h1 className='max-w-3xl text-4xl font-bold leading-tight'>
          Front-End Engineer.
        </h1>

        <p className='mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400'>
          I’m a Front-End Developer specializing in building fast, accessible,
          and visually polished web applications using React and TypeScript. I
          enjoy creating clean UI systems, performance-optimized experiences,
          and intuitive user flows that feel modern and responsive. I’m
          currently targeting Senior Frontend Developer / Senior Frontend
          Engineer roles where I can contribute to high-impact products and
          collaborate closely with design and product teams.
        </p>

        <div className='mt-8 flex flex-wrap items-center gap-6 text-sm text-zinc-500'>
          <span>12+ years experience</span>
          <span>React + TypeScript</span>
          <a
            href='/resume/resume.pdf'
            download
            className='inline-flex items-center gap-1.5 rounded-md border border-zinc-300 dark:border-white/15 px-3 py-1.5 text-zinc-700 dark:text-zinc-300 transition-colors hover:border-zinc-400 dark:hover:border-white/30 hover:text-zinc-900 dark:hover:text-white'
          >
            Download Resume
          </a>
        </div>
      </div>
      <div>
        <img
          src='/images/profile.jpg'
          alt='Profile picture of Thomas Woroniak'
          className='mt-12 w-full max-w-xl rounded-lg object-cover'
        />
      </div>
    </section>
  );
};

export default IntroSection;
