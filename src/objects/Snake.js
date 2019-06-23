import { SnakePart } from "./index";
import { partSize } from "./SnakePart";

class Snake {
  constructor(ctx) {
    this.ctx = ctx;
    this.xDirection = 1;
    this.yDirection = 0;

    this.head = new SnakePart(this.ctx, this.ctx.canvas.width / 2, this.ctx.canvas.height / 2, 'head');
    this.body = [];
  }

  addBody() {
    const offsetX = this.body.length * partSize * this.xDirection;
    const offsetY = this.body.length * partSize * this.yDirection;
    this.body.push(new SnakePart(this.ctx, this.head.x - offsetX, this.head.y - offsetY, 'body'));
  }

  getBody() {
    return this.body;
  }

  move() {
    this.head.move(this.xDirection, this.yDirection);
    this.body.forEach(body => {
      body.move(this.xDirection, this.yDirection);
    });
  }

  draw() {
    this.head.draw();
    this.body.forEach(body => {
      body.draw();
    })
  }

  setXDirection(direction) {
    this.xDirection = direction;
    this.yDirection = 0;
  }

  setYDirection(direction) {
    this.yDirection = direction;
    this.xDirection = 0;
  }
}

export default Snake;
