import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useGitHubContributions } from './useGitHubContributions';

const mockContributions = [
  { date: '2025-01-01', count: 3, level: 2 },
  { date: '2025-01-02', count: 0, level: 0 },
  { date: '2025-01-03', count: 5, level: 3 },
];

// Each test uses a unique username so the module-level URL cache never collides.
describe('useGitHubContributions', () => {
  let fetchSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    fetchSpy = vi.spyOn(globalThis, 'fetch');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('fetches and returns contribution data', async () => {
    fetchSpy.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ contributions: mockContributions }),
    } as unknown as Response);

    const { result } = renderHook(() => useGitHubContributions('user-success'));

    expect(result.current.loading).toBe(true);
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.data!.totalContributions).toBe(8);
    expect(result.current.error).toBeNull();
  });

  it('sets error state on HTTP failure', async () => {
    fetchSpy.mockResolvedValueOnce({
      ok: false,
      status: 503,
    } as unknown as Response);

    const { result } = renderHook(() => useGitHubContributions('user-error'));

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.error).toBe('HTTP 503');
    expect(result.current.data).toBeNull();
  });

  it('deduplicates concurrent fetches — fetch called only once per username', async () => {
    fetchSpy.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ contributions: mockContributions }),
    } as unknown as Response);

    const { result: r1 } = renderHook(() => useGitHubContributions('user-dedup'));
    const { result: r2 } = renderHook(() => useGitHubContributions('user-dedup'));

    await waitFor(() => expect(r1.current.loading).toBe(false));
    await waitFor(() => expect(r2.current.loading).toBe(false));

    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });
});
