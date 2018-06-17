import pic from './images/logo.png'

window.addEventListener('DOMContentLoaded', () => {
  let img = new Image()
  img.src = pic
  document.body.appendChild(img)
}, false)
