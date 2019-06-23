import { Snake, SnakePart, Controls } from "./index";
import { partSize } from "./SnakePart";

class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.snake = new Snake(this.ctx);
    new Controls(this.snake);

    this.run = this.run.bind(this);

    this.createRandomPoint();

    this.isCollide = false;
  }

  detectCollision() {
    const distance = Math.sqrt((this.snake.head.x - this.randomPoint.x) ** 2 + (this.snake.head.y - this.randomPoint.y) ** 2);
    this.isCollide = Math.round(distance) < partSize;
  }

  createRandomPoint(){
    const randomX = Math.random() * this.ctx.canvas.width;
    const randomY = Math.random() * this.ctx.canvas.height;

    this.randomPoint = new SnakePart(this.ctx, randomX, randomY, 'point');
  }

  update() {
    this.snake.move();

    if(this.isCollide) {
      this.snake.addBody();
      this.createRandomPoint();
      console.log(this.snake.getBody());
    }
  }

  draw() {
    this.snake.draw();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.beginPath();
  }

  run() {
    this.update();
    this.clear();
    this.draw();
    this.randomPoint.draw();
    this.detectCollision();
    window.requestAnimationFrame(this.run);
  }

  start() {
    window.requestAnimationFrame(this.run);
  }
}

export default Game;
