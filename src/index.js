import { displayColor, displayColorValue } from './views/UIController';
import { minmax, hslToRGB } from './helper';
import './scss/main.scss';

const state = {
  hsl: {
    h: minmax(0, 360),
    s: minmax(0, 100),
    l: minmax(0, 100)
  }
};

const rgb = hslToRGB(state.hsl);

displayColor(rgb);
displayColorValue(rgb, state.hsl);

document.querySelectorAll('input[type=range]').forEach((range) => {
  range.addEventListener('input', function () {
    state.hsl[this.dataset.type] = parseInt(this.value, 10);
    const rgb = hslToRGB(state.hsl);

    displayColor(rgb);
    displayColorValue(rgb, state.hsl);
  });
});
