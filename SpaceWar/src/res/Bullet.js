import mCanvas from './Canvas'

var canvas = new mCanvas.Canvas()

const BulletConst = {
  playerVelocity: 3,
  playeSize: 5,
  playerColor1: 'rgb(255,140,0)',
  playerColor2: 'rgb(124,252,0)',
  playerMaxCount: 20
}

function Bullet (x, y, size, color, velocity, img) {
  this.x = x
  this.y = y
  this.size = size
  this.color = color
  this.velocity = velocity
  this.minX = 0
  this.maxX = canvas.screenWidth - img.width
  this.minY = 0
  this.maxY = canvas.screenHeight - img.height
  this.show = true
}

Bullet.prototype.draw = function () {
  canvas.ctx.beginPath()
  canvas.ctx.fillStyle = this.color
  canvas.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
  canvas.ctx.fill()
}

Bullet.prototype.move = function (dx, dy) {
  this.x += dx * this.velocity
  if (this.x < this.minX) {
    this.show = false
  } else if (this.x > this.maxX) {
    this.show = false
  }
  this.y += dy * this.velocity
  if (this.y < this.minY) {
    this.show = false
  } else if (this.y > this.maxY) {
    this.show = false
  }
}

export default {
  BulletConst,
  Bullet
}