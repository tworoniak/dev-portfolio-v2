export const clampPercent = (n: number) => Math.max(0, Math.min(100, n));

export const cv = (n: number) =>
  Math.min(255, Math.floor((255 / 100) * clampPercent(n)));

export const pastelCv = (n: number) =>
  140 + Math.floor((115 / 100) * clampPercent(n));

export const cursorToRgb = (xPc: number, yPc: number) => {
  const r = cv(xPc);
  const g = cv(yPc);
  const b = 255 - r;

  return { r, g, b };
};

export const cursorToPastelRgb = (xPc: number, yPc: number) => {
  const r = pastelCv(xPc);
  const g = pastelCv(yPc);
  const b = pastelCv(100 - xPc);

  return { r, g, b };
};
