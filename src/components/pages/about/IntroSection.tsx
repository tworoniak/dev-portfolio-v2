const IntroSection = () => {
  return (
    <section className='flex flex-col md:flex-row gap-6 md:gap-12 mx-auto max-w-7xl px-6 py-12'>
      <div>
        <h1 className='max-w-3xl text-4xl font-bold leading-tight'>
          Senior Front-End Developer. React builder.
        </h1>

        <p className='mt-6 max-w-3xl text-lg leading-8 text-zinc-400'>
          I’m a Senior Front-End Developer specializing in building fast,
          accessible, and visually polished web applications using React and
          TypeScript. I enjoy creating clean UI systems, performance-optimized
          experiences, and intuitive user flows that feel modern and responsive.
          I’m currently targeting Senior Frontend Developer / Senior Frontend
          Engineer roles where I can contribute to high-impact products and
          collaborate closely with design and product teams.
        </p>

        <div className='mt-8 flex gap-8 text-sm text-zinc-500'>
          <span>12+ years experience</span>
          <span>React + TypeScript</span>
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
