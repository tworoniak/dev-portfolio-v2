import { cv } from './color';

export const createAmbientBackground = (
  xPc: number,
  yPc: number,
  t: number,
) => {
  const r1 = cv(xPc + Math.sin(t * 0.41) * 20);
  const g1 = cv(yPc + Math.cos(t * 0.33) * 18);
  const b1 = 255 - cv(xPc);

  const r2 = cv(xPc + Math.cos(t * 0.27) * 14);
  const g2 = cv(yPc + Math.sin(t * 0.21) * 16);
  const b2 = 255 - cv(yPc);

  const x1 = (50 + Math.sin(t * 0.31) * 16).toFixed(1);
  const y1 = (0 + Math.abs(Math.sin(t * 0.23)) * 22).toFixed(1);

  const x2 = (85 + Math.cos(t * 0.17) * 10).toFixed(1);
  const y2 = (20 + Math.sin(t * 0.19) * 10).toFixed(1);

  const x3 = (20 + Math.sin(t * 0.13) * 12).toFixed(1);
  const y3 = (78 + Math.cos(t * 0.15) * 8).toFixed(1);

  return `
    radial-gradient(ellipse at ${x1}% ${y1}%, rgb(${r1} ${g1} ${b1} / 0.15), transparent 65%),
    radial-gradient(circle at ${x2}% ${y2}%, rgb(${r2} ${g1} ${b2} / 0.12), transparent 55%),
    radial-gradient(circle at ${x3}% ${y3}%, rgb(${r1} ${g2} ${b1} / 0.10), transparent 60%)
  `;
};
