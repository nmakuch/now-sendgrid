const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Raleway&display=swap" rel="stylesheet'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const roboto = new FontFaceObserver('Raleway')

  roboto.load().then(() => {
    document.documentElement.classList.add('raleway')
  })
}

export default Fonts