/* global Image */

export default class Animation {
  constructor (image, frames = [0], duration = 10, width = 32, height = 32) {
    if (typeof image === 'string') {
      this.image = new Image()
      this.image.src = image
    } else {
      this.image = image
    }
    this.playing = true
    this.frames = frames
    this.duration = duration
    this.width = width
    this.height = height
  }

  draw (x, y) {}
}
