export const minmax = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const hslToRGB = ({ h, s, l }) => {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return { r, g, b };
};

export const rgbToHex = ({ r, g, b }) => {
  let hex = '#';

  // Converting to hex value
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  hex += r.length === 1 ? '0' + r : r;
  hex += g.length === 1 ? '0' + g : g;
  hex += b.length === 1 ? '0' + b : b;

  return hex;
};

export const getYiqContrast = ({ r, g, b }) => {
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? '#000000' : '#ffffff';
};
