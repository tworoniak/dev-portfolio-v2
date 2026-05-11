import { useAccentColor } from '../../../hooks/useAccentColor';
import { useGitHubContributions } from '../../../hooks/useGitHubContributions';
import GitHubHeatmap from '../../projects/GitHubHeatmap';

interface HeatmapSectionProps {
  username: string;
}

export default function HeatmapSection({ username }: HeatmapSectionProps) {
  const { accent } = useAccentColor();
  const { data, loading, error } = useGitHubContributions(username);

  const longestStreak = (() => {
    if (!data) return 0;
    let max = 0,
      cur = 0;
    data.weeks
      .flatMap((w) => w.days)
      .forEach((d) => {
        cur = d.count > 0 ? cur + 1 : 0;
        if (cur > max) max = cur;
      });
    return max;
  })();

  return (
    <section className='mx-auto max-w-7xl px-2 sm:px-6 py-16 sm:py-24'>
      {/* Section header */}
      <p className='text-xs uppercase tracking-[0.3em] text-zinc-500'>
        / GitHub
      </p>
      <h2 className='mt-3 text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white'>
        The projects are the highlights. This is the habit.
      </h2>
      <p className='mt-3 max-w-2xl text-base leading-7 text-zinc-500 dark:text-zinc-400'>
        Progress measured in small improvements over time.
      </p>

      {/* Two-column content */}
      <div className='mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start'>
        {/* Left — stat + narrative */}
        <div className='lg:col-span-1'>
          {loading && !error && (
            <div className='text-7xl sm:text-8xl font-serif italic leading-none text-zinc-400 dark:text-zinc-600'>
              —
            </div>
          )}
          {error && (
            <div className='text-sm text-red-500'>
              Could not load contributions.
            </div>
          )}
          {data && (
            <div
              className='text-7xl sm:text-8xl font-serif italic leading-none'
              style={{ color: accent }}
            >
              {data.totalContributions.toLocaleString()}
            </div>
          )}

          <p className='mt-3 text-xs uppercase tracking-[0.3em] text-zinc-500'>
            Contributions · Last 12 Mo
          </p>

          <p className='mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400'>
            Across <span style={{ color: accent }}>73 repositories</span>.
            Longest streak{' '}
            <span style={{ color: accent }}>
              {loading ? '—' : longestStreak} days
            </span>
            . I treat side-projects like ongoing rehearsal — pace matters more
            than peaks.
          </p>

          <a
            href={`https://github.com/${username}`}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-6 inline-block text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors'
          >
            github.com/{username} →
          </a>
        </div>

        {/* Right — chart (only rendered once data is ready to avoid a second fetch) */}
        <div className='lg:col-span-2'>
          {data ? (
            <GitHubHeatmap username={username} data={data} showStats={false} />
          ) : (
            <div className='card h-48 animate-pulse' />
          )}
        </div>
      </div>
    </section>
  );
}
