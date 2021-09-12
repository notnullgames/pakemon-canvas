import Animation from '../animation.js'
import { loadImages } from '../utils.js'

let images

const inames = [
  'far-buildings',
  'back-buildings',
  'foreground',
  'cat',
  'title',
  'logo-white'
]

let catRunning
let startTime = 0

export default {
  async setup (canvas) {
    images = await loadImages(inames.map(n => `assets/${n}.png`))
    catRunning = new Animation(images[3], [36, 37, 38, 39, 40, 41], 400)
    startTime = 0
  },

  draw (time, ctx, canvas) {
    if (startTime === 0) {
      startTime = time
    }
    const currentTime = time - startTime

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const cx = canvas.width - ((time / 2000) % images[0].width)
    const bx = canvas.width - ((time / 1000) % images[1].width)
    const ax = canvas.width - ((time / 100) % images[2].width)

    ctx.drawImage(images[0], cx, 0)
    ctx.drawImage(images[0], cx - images[0].width, 0)
    ctx.drawImage(images[1], bx, -40)
    ctx.drawImage(images[1], bx - images[1].width, 0)
    ctx.drawImage(images[2], ax, 50)
    ctx.drawImage(images[2], ax - images[2].width, 50)

    catRunning.draw(ctx, time, 150, 200)

    if (currentTime > 5000) {
      ctx.drawImage(images[4], 80, 60)
      if (Math.floor(time / 500) % 2 === 0) {
        ctx.fillText('PRESS START', 120, 130)
      }
    } else {
      const logoY = (currentTime / 1000) % (images[4].height / 5)
      ctx.drawImage(images[4], 80, logoY * 12)
    }
  }
}
