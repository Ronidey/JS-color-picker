import elements from './base';
import { rgbToHex, getYiqContrast } from '../helper';

export const displayColor = ({ r, g, b }) => {
  const circles = elements.circles;

  for (let i = 0, len = circles.length; i < len; i++) {
    circles[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
  elements.heroSec.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  elements.heroSec.style.color = getYiqContrast({ r, g, b });
};

export const displayColorValue = ({ r, g, b }, { h, s, l }) => {
  const rgbValue = `rgb(${r}, ${g}, ${b})`;
  const hexValue = rgbToHex({ r, g, b });
  const hslValue = `hsl(${h}, ${s}%, ${l}%)`;

  elements.inputRGB.value = rgbValue;
  elements.inputHex.value = hexValue;
  elements.inputHSL.value = hslValue;
};
