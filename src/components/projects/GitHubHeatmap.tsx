import { useEffect, useState, useRef } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionWeek {
  days: ContributionDay[];
}

interface ContributionData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

interface GitHubHeatmapProps {
  username: string;
  /** Optional: override the proxy URL if you self-host one */
  proxyUrl?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const MONTH_LABELS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

// Maps GitHub's contribution level (0-4) → CSS variable
const LEVEL_VARS: Record<number, string> = {
  0: 'var(--cell-0)',
  1: 'var(--cell-1)',
  2: 'var(--cell-2)',
  3: 'var(--cell-3)',
  4: 'var(--cell-4)',
};

// ─── Tooltip ──────────────────────────────────────────────────────────────────

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  date: string;
  count: number;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function GitHubHeatmap({
  username,
  proxyUrl,
}: GitHubHeatmapProps) {
  const [data, setData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    date: '',
    count: 0,
  });
  const [hovered, setHovered] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    const url =
      proxyUrl ??
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`;

    fetch(url, { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((json) => {
        const contributions = json.contributions as Array<{
          date: string;
          count: number;
          level: number;
        }>;
        if (!contributions) throw new Error('Unexpected API shape');

        // Group into weeks (Sun → Sat)
        const weeks: ContributionWeek[] = [];
        let week: ContributionDay[] = [];

        contributions.forEach((d, i) => {
          week.push({
            date: d.date,
            count: d.count,
            level: d.level as ContributionDay['level'],
          });
          if (week.length === 7 || i === contributions.length - 1) {
            weeks.push({ days: week });
            week = [];
          }
        });

        const total = contributions.reduce((s, d) => s + d.count, 0);
        setData({ totalContributions: total, weeks });
        setLoading(false);
      })
      .catch((e) => {
        if (e.name === 'AbortError') return; // ignore cleanup cancellations
        setError(e.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
      // Reset for next fetch (e.g. username prop change)
      setData(null);
      setError(null);
      setLoading(true);
    };
  }, [username, proxyUrl]);

  // ── Derive month label positions ──────────────────────────────────────────
  const monthPositions: Array<{ label: string; weekIndex: number }> = [];
  if (data) {
    let lastMonth = -1;
    data.weeks.forEach((week, wi) => {
      const firstDay = week.days[0];
      if (!firstDay) return;
      const month = new Date(firstDay.date).getMonth();
      if (month !== lastMonth) {
        monthPositions.push({ label: MONTH_LABELS[month], weekIndex: wi });
        lastMonth = month;
      }
    });
  }

  const CELL = 12;
  const GAP = 3;
  const STEP = CELL + GAP;

  // ── Hover handlers ────────────────────────────────────────────────────────
  const handleCellEnter = (
    e: React.MouseEvent<SVGRectElement>,
    day: ContributionDay,
  ) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTooltip({
      visible: true,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      date: day.date,
      count: day.count,
    });
    setHovered(day.date);
  };

  const handleCellLeave = () => {
    setTooltip((t) => ({ ...t, visible: false }));
    setHovered(null);
  };

  // ── Streak calculation ────────────────────────────────────────────────────
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

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Scoped styles ─────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Berkeley+Mono:ital,wght@0,100..700;1,100..700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        .gh-heatmap-root {
          --bg:      #0d1117;
          --surface: #161b22;
          --border:  #21262d;
          --text:    #e6edf3;
          --muted:   #8b949e;
          --accent:  #39d353;
          --accent2: #0e4429;
          --cell-0:  #161b22;
          --cell-1:  #0e4429;
          --cell-2:  #006d32;
          --cell-3:  #26a641;
          --cell-4:  #39d353;
          --radius:  10px;
          font-family: 'Berkeley Mono', monospace;
          // background: var(--bg);
          color: var(--text);
          padding: 28px;
          // border-radius: 16px;
          // border: 1px solid var(--border);
          max-width: 100%;
          width: 100%;
          margin: 0 auto;
          position: relative;
        }

        .gh-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
        }

        .gh-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 2px solid var(--border);
          background: var(--surface);
        }

        .gh-username {
          font-family: 'Berkeley Mono', monospace;
          font-size: 15px;
          font-weight: 600;
          color: var(--text);
          letter-spacing: -0.3px;
        }

        .gh-username a {
          color: inherit;
          text-decoration: none;
        }
        .gh-username a:hover { color: var(--accent); }

        .gh-sub {
          font-size: 12px;
          color: var(--muted);
          margin-top: 2px;
          font-family: 'Berkeley Mono', monospace;
        }

        .gh-graph-wrap {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 18px 20px 16px;
          overflow-x: auto;
        }

        .gh-month-labels {
          display: flex;
          margin-left: 32px;
          margin-bottom: 6px;
          position: relative;
          height: 16px;
        }

        .gh-month-label {
          position: absolute;
          font-size: 10px;
          color: var(--muted);
          white-space: nowrap;
          font-family: 'Berkeley Mono', monospace;
        }

        .gh-grid-row {
          display: flex;
          gap: 0;
        }

        .gh-day-labels {
          display: flex;
          flex-direction: column;
          gap: 3px;
          margin-right: 8px;
          padding-top: 0;
        }

        .gh-day-label {
          height: 12px;
          font-size: 9px;
          color: var(--muted);
          line-height: 12px;
          font-family: 'Berkeley Mono', monospace;
          width: 24px;
          text-align: right;
        }

        .gh-cell {
          rx: 2px;
          ry: 2px;
          cursor: pointer;
          transition: filter 0.1s, opacity 0.1s;
        }

        .gh-cell:hover {
          filter: brightness(1.35);
        }

        .gh-stats {
          display: flex;
          gap: 24px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .gh-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .gh-stat-value {
          font-size: 22px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: -1px;
          font-family: 'Berkeley Mono', monospace;
        }

        .gh-stat-label {
          font-size: 10px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          font-family: 'Berkeley Mono', monospace;
        }

        .gh-legend {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 12px;
          justify-content: flex-end;
        }

        .gh-legend-label {
          font-size: 10px;
          color: var(--muted);
          font-family: 'Berkeley Mono', monospace;
        }

        .gh-legend-cell {
          width: 10px;
          height: 10px;
          border-radius: 2px;
        }

        .gh-tooltip {
          position: absolute;
          background: #1c2128;
          border: 1px solid var(--border);
          color: var(--text);
          font-family: 'Berkeley Mono', monospace;
          font-size: 11px;
          padding: 6px 10px;
          border-radius: 6px;
          pointer-events: none;
          white-space: nowrap;
          z-index: 10;
          transform: translate(-50%, -140%);
          box-shadow: 0 4px 16px rgba(0,0,0,0.5);
        }

        .gh-tooltip-count { color: var(--accent); font-weight: 600; }

        .gh-loading, .gh-error {
          padding: 32px;
          text-align: center;
          color: var(--muted);
          font-size: 13px;
          font-family: 'Berkeley Mono', monospace;
        }

        .gh-error { color: #f85149; }

        .gh-divider {
          width: 1px;
          height: 32px;
          background: var(--border);
          margin: 0 4px;
        }
      `}</style>

      <section className='flex flex-col md:flex-row gap-6 md:gap-12 mx-auto max-w-5xl px-6 py-12'>
        <div
          className='gh-heatmap-root border border-white/10 bg-black/15 rounded-lg'
          ref={containerRef}
        >
          {/* Header */}
          <div className='gh-header'>
            <img
              className='gh-avatar'
              src={`https://github.com/${username}.png?size=88`}
              alt={username}
            />
            <div>
              <div className='gh-username'>
                <a
                  href={`https://github.com/${username}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  @{username}
                </a>
              </div>
              <div className='gh-sub'>
                GitHub Contributions · Last 12 months
              </div>
            </div>
          </div>

          {/* Graph */}
          {loading && (
            <div className='gh-loading'>// fetching contributions...</div>
          )}
          {error && (
            <div className='gh-error'>
              ⚠ Could not load contributions: {error}
            </div>
          )}

          {data && (
            <>
              <div className='gh-graph-wrap'>
                {/* Month labels */}
                <div className='gh-month-labels'>
                  {monthPositions.map(({ label, weekIndex }) => (
                    <span
                      key={label + weekIndex}
                      className='gh-month-label'
                      style={{ left: 32 + weekIndex * STEP }}
                    >
                      {label}
                    </span>
                  ))}
                </div>

                {/* Day labels + SVG grid */}
                <div className='gh-grid-row'>
                  <div className='gh-day-labels'>
                    {DAY_LABELS.map((l, i) => (
                      <div key={i} className='gh-day-label'>
                        {l}
                      </div>
                    ))}
                  </div>

                  <svg
                    width={data.weeks.length * STEP}
                    height={7 * STEP - GAP}
                    style={{ display: 'block', overflow: 'visible' }}
                  >
                    {data.weeks.map((week, wi) =>
                      week.days.map((day, di) => (
                        <rect
                          key={day.date}
                          className='gh-cell'
                          x={wi * STEP}
                          y={di * STEP}
                          width={CELL}
                          height={CELL}
                          rx={2}
                          ry={2}
                          fill={LEVEL_VARS[day.level]}
                          opacity={hovered && hovered !== day.date ? 0.55 : 1}
                          onMouseEnter={(e) => handleCellEnter(e, day)}
                          onMouseLeave={handleCellLeave}
                        />
                      )),
                    )}
                  </svg>
                </div>

                {/* Legend */}
                <div className='gh-legend'>
                  <span className='gh-legend-label'>Less</span>
                  {[0, 1, 2, 3, 4].map((l) => (
                    <div
                      key={l}
                      className='gh-legend-cell'
                      style={{
                        background: LEVEL_VARS[l],
                        border: l === 0 ? '1px solid #30363d' : 'none',
                      }}
                    />
                  ))}
                  <span className='gh-legend-label'>More</span>
                </div>
              </div>

              {/* Stats */}
              <div className='gh-stats'>
                <div className='gh-stat'>
                  <span className='gh-stat-value'>
                    {data.totalContributions.toLocaleString()}
                  </span>
                  <span className='gh-stat-label'>Contributions</span>
                </div>
                <div className='gh-divider' />
                <div className='gh-stat'>
                  <span className='gh-stat-value'>{longestStreak}</span>
                  <span className='gh-stat-label'>Longest Streak</span>
                </div>
                <div className='gh-divider' />
                <div className='gh-stat'>
                  <span className='gh-stat-value'>{data.weeks.length}</span>
                  <span className='gh-stat-label'>Weeks Tracked</span>
                </div>
              </div>
            </>
          )}

          {/* Tooltip */}
          {tooltip.visible && (
            <div
              className='gh-tooltip'
              style={{ left: tooltip.x, top: tooltip.y }}
            >
              <span className='gh-tooltip-count'>
                {tooltip.count} contribution{tooltip.count !== 1 ? 's' : ''}
              </span>
              {' · '}
              {new Date(tooltip.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
