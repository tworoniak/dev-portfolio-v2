const IntroSection = () => {
  return (
    <section className='mx-auto max-w-7xl px-6 py-12'>
      <h1 className='max-w-3xl text-4xl font-bold leading-tight'>
        Things I've Built. Lessons Learned.
      </h1>

      <p className='mt-6 max-w-3xl text-lg leading-8 text-zinc-400'>
        A collection of front-end applications and experiments exploring modern
        React architecture, interactive UI patterns, and thoughtful engineering
        decisions behind each build.
      </p>

      {/* <div className='mt-8 flex gap-8 text-sm text-zinc-500'>
        <span>12+ years experience</span>
        <span>React + TypeScript</span>
        <span>Portfolio projects</span>
      </div> */}
    </section>
  );
};

export default IntroSection;
