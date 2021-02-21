import anime from 'animejs/lib/anime.es.js';

const anime = require('animejs');
const elem = document.getElementsByClassName('el')

anime({
    auto: true,
    targets: '.staggering-from-demo .el',
    translateX: 270,
    delay: anime.stagger(100, {from: 'center'})
  });