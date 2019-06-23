const keys = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

class Controls {
  constructor(snake) {
    this.snake = snake;
    this.bindEvents();
  }

  keyPressEvent(e) {
    if (e.keyCode === keys.LEFT) {
      this.snake.setXDirection(-1);
    } else if (e.keyCode === keys.UP) {
      this.snake.setYDirection(-1);
    } else if (e.keyCode === keys.RIGHT) {
      this.snake.setXDirection(1);
    } else if (e.keyCode === keys.DOWN) {
      this.snake.setYDirection(1);
    }
  }

  bindEvents() {
    window.addEventListener('keydown', this.keyPressEvent.bind(this));
  }
}

export default Controls;
