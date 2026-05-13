import { projectsIndex as projects } from '../../../data/projects-index';
import { useAccentColor } from '../../../hooks/useAccentColor';

const nonExperimentProjects = projects.filter((p) => !p.experiment);
const nonExperimentCount = nonExperimentProjects.length;

const COUNT_WORD: Record<number, string> = {
  1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five',
  6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten',
  11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen',
  15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen',
  19: 'Nineteen', 20: 'Twenty',
};
const countWord = COUNT_WORD[nonExperimentCount] ?? String(nonExperimentCount);

const years = projects.flatMap((p) => (p.year ? [parseInt(p.year)] : []));
const minYear = Math.min(...years);
const maxYear = Math.max(...years);
const spanYears = maxYear - minYear + 1;

const liveCount = projects.filter((p) => Boolean(p.liveUrl)).length;
const totalCount = projects.length;

const statCards = [
  {
    label: 'SHIPPED',
    value: `${nonExperimentCount} projects`,
    sub: 'across SaaS, tools, and SPAs',
  },
  {
    label: 'SPANNING',
    value: `${spanYears} ${spanYears === 1 ? 'year' : 'years'}`,
    sub: `${minYear} — ${maxYear}`,
  },
  {
    label: 'PRIMARY STACK',
    value: 'React + TS',
    sub: '+ Next.js, Angular, Node',
  },
  {
    label: 'LIVE',
    value: `${liveCount}/${totalCount}`,
    sub: 'with deployed previews',
  },
];

const IntroSection = () => {
  const { accent } = useAccentColor();

  return (
    <section className='mx-auto max-w-7xl px-2 sm:px-6 py-20 sm:py-28'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
        {/* Left column */}
        <div>
          <p className='mb-6 text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400'>
            / Selected Work &middot; {minYear} &mdash; {maxYear}
          </p>

          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight'>
            <span className='text-zinc-900 dark:text-white'>
              {countWord} projects.
            </span>
            <br />
            <span className='text-zinc-500 dark:text-zinc-500'>
              One{' '}
              <em className='font-serif italic' style={{ color: accent }}>
                obsession
              </em>{' '}
              &mdash;
            </span>
            <br />
            <span className='text-zinc-500 dark:text-zinc-500'>
              shipping good UI.
            </span>
          </h1>
        </div>

        {/* Right column — 2×2 stat cards */}
        <div className='grid grid-cols-2 gap-4 lg:gap-5'>
          {statCards.map((card) => (
            <div
              key={card.label}
              className='rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50/70 dark:bg-black/15 px-5 py-5'
            >
              <p className='text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2'>
                {card.label}
              </p>
              <p className='text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white'>
                {card.value}
              </p>
              <p className='mt-1 text-sm text-zinc-500 dark:text-zinc-500'>
                {card.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
