const _$ = (id) => document.getElementById(id);

const elements = {
  hero: _$('hero'),
  title: _$('title'),
  subtitle: _$('subtitle'),
  circles: document.querySelectorAll('.circle'),
  inputHex: _$('inp-hex'),
  inputRGB: _$('inp-rgb'),
  inputHSL: _$('inp-hsl'),
  heroSec: _$('hero')
};

export default elements;
