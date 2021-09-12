// this is the frame around teh canvas/context
// this is web-specific

import sceneIntro from './scenes/intro.js'

const canvas = document.getElementById('canvas')

function getMousePos (canvas, evt) {
  const rect = canvas.getBoundingClientRect()
  const scaleX = canvas.width / rect.width
  const scaleY = canvas.height / rect.height

  return {
    x: (evt.clientX - rect.left) * scaleX,
    y: (evt.clientY - rect.top) * scaleY
  }
}

const currentScene = sceneIntro
const ctx = canvas.getContext('2d')
ctx.font = '8px sans'

currentScene.setup(canvas)

let pos = { x: 0, y: 0 }

const frame = () => {
  currentScene.draw(ctx, canvas)
  ctx.fillStyle = '#fff'
  ctx.fillText(`${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}`, 0, 10)
  window.requestAnimationFrame(frame)
}

// show where mouse is, for easier pixel-herding
canvas.addEventListener('mousemove', e => {
  pos = getMousePos(canvas, e)
})

window.requestAnimationFrame(frame)
