import { describe, it, expect } from 'vitest';
import { getLongestStreak } from './contributions';
import type { ContributionData } from '../components/projects/GitHubHeatmap';

function makeData(counts: number[]): ContributionData {
  const days = counts.map((count, i) => ({
    date: `2025-01-${String(i + 1).padStart(2, '0')}`,
    count,
    level: (count > 0 ? 1 : 0) as 0 | 1 | 2 | 3 | 4,
  }));
  return { totalContributions: counts.reduce((s, c) => s + c, 0), weeks: [{ days }] };
}

describe('getLongestStreak', () => {
  it('returns 0 for all-zero data', () => {
    expect(getLongestStreak(makeData([0, 0, 0]))).toBe(0);
  });

  it('returns 1 for a single active day', () => {
    expect(getLongestStreak(makeData([0, 5, 0]))).toBe(1);
  });

  it('returns the longest run of consecutive active days', () => {
    expect(getLongestStreak(makeData([1, 2, 0, 3, 4, 5, 0, 1]))).toBe(3);
  });

  it('handles a streak at the end of the data', () => {
    expect(getLongestStreak(makeData([0, 0, 1, 2, 3]))).toBe(3);
  });

  it('handles entirely active data', () => {
    expect(getLongestStreak(makeData([1, 1, 1, 1, 1]))).toBe(5);
  });
});
