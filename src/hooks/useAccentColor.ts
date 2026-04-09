import { cursorToRgb } from '../utils/color';
import { useGradientCoords } from './useGradientCoords';

export interface AccentColor {
  r: number;
  g: number;
  b: number;
  accent: string;
  accentSoft: string;
  logoColor: string;
}

export const useAccentColor = (): AccentColor => {
  const { xPc, yPc } = useGradientCoords();
  const { r, g, b } = cursorToRgb(xPc, yPc);

  return {
    r,
    g,
    b,
    accent: `rgb(${r} ${g} ${b})`,
    accentSoft: `rgb(${r} ${g} ${b} / 0.72)`,
    logoColor: `rgb(${r} ${g} ${b} / 0.82)`,
  };
};
