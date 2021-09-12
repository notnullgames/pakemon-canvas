/* global Image */

export const loadImages = (images) => Promise.all(images.map(src => new Promise((resolve, reject) => {
  const i = new Image()
  i.onerr = reject
  i.onload = () => resolve(i)
  i.src = src
})))
