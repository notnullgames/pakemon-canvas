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
    catRunning = new Animation(images.cat, [36, 37, 38, 39, 40, 41], 250)
  },

  draw (time, ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const cx = canvas.width - ((time / 2000) % images['far-buildings'].width)
    const bx = canvas.width - ((time / 1500) % images['back-buildings'].width)
    const ax = canvas.width - ((time / 250) % images.foreground.width)

    ctx.drawImage(images['far-buildings'], cx, 0)
    ctx.drawImage(images['far-buildings'], cx - images['far-buildings'].width, 0)
    ctx.drawImage(images['back-buildings'], bx, -40)
    ctx.drawImage(images['back-buildings'], bx - images['back-buildings'].width, -40)
    ctx.drawImage(images.foreground, ax, 50)
    ctx.drawImage(images.foreground, ax - images.foreground.width, 50)

    ctx.drawImage(images.title, 80, 60)

    catRunning.draw(ctx, time, 150, 200)

    if (Math.floor(time / 500) % 2 === 0) {
      ctx.fillText('PRESS START', 120, 130)
    }
  }
}
