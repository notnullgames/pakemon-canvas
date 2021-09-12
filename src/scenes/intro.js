/* global Image */
import Animation from '../animation.js'

const images = {}

const inames = [
  'back-buildings',
  'cat',
  'far-buildings',
  'foreground',
  'logo-white',
  'title'
]

let catRunning

export default {
  setup (canvas) {
    inames.forEach(n => {
      images[n] = new Image()
      images[n].src = `assets/${n}.png`
    })
    catRunning = new Animation(images.cat, [36, 37, 38, 39, 40, 41], 10)
  },

  draw (ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(images.title, 80, 40)
    catRunning.draw(10, 190)
  }
}
