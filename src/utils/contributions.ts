import type { ContributionData } from '../components/projects/GitHubHeatmap';

export function getLongestStreak(data: ContributionData): number {
  let max = 0,
    cur = 0;
  data.weeks
    .flatMap((w) => w.days)
    .forEach((d) => {
      cur = d.count > 0 ? cur + 1 : 0;
      if (cur > max) max = cur;
    });
  return max;
}
