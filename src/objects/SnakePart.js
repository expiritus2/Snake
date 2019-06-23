export const partSize = 10;

class SnakePart {
  constructor(ctx, x, y, type) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.type = type;
  }

  move(xDirection, yDirection) {
    this.x += xDirection;
    this.y += yDirection;

    this.limitMove();
  }

  limitMove(){
    if (this.x + partSize >= this.ctx.canvas.width) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = this.ctx.canvas.width - partSize;
    }

    if(this.y + partSize >= this.ctx.canvas.height) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = this.ctx.canvas.height - partSize;
    }
  }

  draw()  {
    this.ctx.rect(this.x, this.y, partSize, partSize);
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(this.x, this.y, partSize, partSize);
  }
}

export default SnakePart;
