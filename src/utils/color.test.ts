import { describe, it, expect } from 'vitest';
import { cursorToRgb, cursorToPastelRgb, clampPercent } from './color';

describe('clampPercent', () => {
  it('clamps below 0 to 0', () => expect(clampPercent(-10)).toBe(0));
  it('clamps above 100 to 100', () => expect(clampPercent(110)).toBe(100));
  it('passes through values in range', () => expect(clampPercent(50)).toBe(50));
});

describe('cursorToRgb', () => {
  it('returns all-zero rgb at (0, 0)', () => {
    expect(cursorToRgb(0, 0)).toEqual({ r: 0, g: 0, b: 255 });
  });

  it('returns near-max rgb at (100, 100) — floor of 254.99 = 254', () => {
    // cv(100) = floor((255/100) * 100) = floor(254.999...) = 254
    expect(cursorToRgb(100, 100)).toEqual({ r: 254, g: 254, b: 1 });
  });

  it('produces mid-range values at (50, 50)', () => {
    const { r, g, b } = cursorToRgb(50, 50);
    expect(r).toBe(g);
    expect(r + b).toBe(255);
  });
});

describe('cursorToPastelRgb', () => {
  it('all channels are in the pastel range [140, 255]', () => {
    for (const x of [0, 50, 100]) {
      for (const y of [0, 50, 100]) {
        const { r, g, b } = cursorToPastelRgb(x, y);
        expect(r).toBeGreaterThanOrEqual(140);
        expect(g).toBeGreaterThanOrEqual(140);
        expect(b).toBeGreaterThanOrEqual(140);
        expect(r).toBeLessThanOrEqual(255);
        expect(g).toBeLessThanOrEqual(255);
        expect(b).toBeLessThanOrEqual(255);
      }
    }
  });
});
