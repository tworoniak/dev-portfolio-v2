import { useEffect, useState } from 'react';
import type { ContributionData } from '../components/projects/GitHubHeatmap';

// Module-level cache — one promise per username, shared across all consumers
const cache = new Map<string, Promise<ContributionData>>();

function fetchContributions(username: string): Promise<ContributionData> {
  const url = `https://github-contributions-api.jogruber.de/v4/${username}?y=last`;
  if (!cache.has(url)) {
    const promise = fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((json) => {
        if (!json || !Array.isArray(json.contributions)) {
          throw new Error('Unexpected API shape');
        }
        const raw = json.contributions as Array<{ date: string; count: number; level: number }>;
        const weeks: ContributionData['weeks'] = [];
        let week: ContributionData['weeks'][0]['days'] = [];
        raw.forEach((d, i) => {
          week.push({ date: d.date, count: d.count, level: d.level as 0 | 1 | 2 | 3 | 4 });
          if (week.length === 7 || i === raw.length - 1) {
            weeks.push({ days: week });
            week = [];
          }
        });
        const total = raw.reduce((s, d) => s + d.count, 0);
        return { totalContributions: total, weeks };
      });
    cache.set(url, promise);
  }
  return cache.get(url)!;
}

export function useGitHubContributions(username: string) {
  const [data, setData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchContributions(username)
      .then((result) => {
        if (!cancelled) { setData(result); setLoading(false); }
      })
      .catch((e) => {
        if (!cancelled) { setError(e.message); setLoading(false); }
      });
    return () => { cancelled = true; };
  }, [username]);

  return { data, loading, error };
}
