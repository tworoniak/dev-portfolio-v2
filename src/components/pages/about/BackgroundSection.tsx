import { certifications, experience } from '../../../data/background';

const BackgroundSection = () => {
  return (
    <section className='mx-auto flex max-w-7xl flex-col gap-2 px-2 sm:px-6 py-12'>
      <p className='text-xs uppercase tracking-[0.3em] text-zinc-500'>
        Background
      </p>

      <div className='mt-4 grid grid-cols-1 gap-6 md:grid-cols-2'>
        {/* Left — Experience */}
        <div className='flex flex-col gap-4 rounded-lg border border-zinc-500/20 dark:border-white/10 bg-zinc-50/50 dark:bg-black/15 p-6'>
          <h2 className='text-sm font-semibold uppercase tracking-widest text-zinc-500'>
            Experience
          </h2>

          <ul className='flex flex-col gap-6'>
            {experience.map((item) => (
              <li key={item.company} className='flex flex-col gap-1'>
                <div className='flex items-baseline justify-between gap-4'>
                  <span className='font-medium text-zinc-900 dark:text-white'>
                    {item.role}
                  </span>
                  <span className='shrink-0 text-xs text-zinc-400'>
                    {item.period}
                  </span>
                </div>
                <span className='text-sm text-zinc-500 dark:text-zinc-400'>
                  {item.company}
                </span>
                <p className='mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400'>
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Certifications */}
        <div className='flex flex-col gap-4 rounded-lg border border-zinc-500/20 dark:border-white/10 bg-zinc-50/50 dark:bg-black/15 p-6'>
          <h2 className='text-sm font-semibold uppercase tracking-widest text-zinc-500'>
            Certifications & Courses
          </h2>

          <ul className='flex flex-col gap-6'>
            {certifications.map((item) => (
              <li key={item.name} className='flex flex-col gap-1'>
                <div className='flex items-baseline justify-between gap-4'>
                  {item.url ? (
                    <a
                      href={item.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-medium text-zinc-900 underline-offset-2 hover:underline dark:text-white'
                    >
                      {item.name}
                    </a>
                  ) : (
                    <span className='font-medium text-zinc-900 dark:text-white'>
                      {item.name}
                    </span>
                  )}
                  <span className='shrink-0 text-xs text-zinc-400'>
                    {item.period}
                  </span>
                </div>
                <span className='text-sm text-zinc-500 dark:text-zinc-400'>
                  {item.issuer}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
