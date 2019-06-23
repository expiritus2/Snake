import { Game } from './objects';

function init() {
  const canvas = document.getElementById('canvas');
  document.body.style.padding = '0';
  document.body.style.margin = '0';
  const ctx = canvas.getContext('2d');

  const game = new Game(ctx);
  game.start();
}

init();
