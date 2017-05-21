var respectWomen = [
    'https://media.giphy.com/media/G2k1HJdHvg0G4/giphy.gif',
    'https://media.giphy.com/media/26uf3wT8DPMcmr5L2/giphy.gif',
    'https://media.giphy.com/media/3o72FcskInX1PAQGm4/giphy.gif',
    'https://media.giphy.com/media/26tklCShtKV4XyeL6/source.gif',
    'https://media.giphy.com/media/rcC3nSGuwNDWw/giphy.gif',
    'https://media.giphy.com/media/3oz8xZaYKU1zyArhq8/giphy.gif',
    'https://media.giphy.com/media/pMIZ5wO75HZ60/giphy.gif',
    'https://media.giphy.com/media/3o6ZsU5zjJ4DryMIdG/giphy.gif',
    'https://media.giphy.com/media/l41YamEiIYltJtLUI/giphy.gif',
    'https://media.giphy.com/media/3o6gbghYE0OSGJ8RGM/giphy.gif',
    'https://media.giphy.com/media/8vzopux734Rbi/giphy.gif',
    'https://media.giphy.com/media/l2Sq5ySbOfVAl9OZG/giphy.gif',
    'https://media.giphy.com/media/3osxY7MLrs5wP2wRgc/giphy.gif',
]

var uwu = Math.floor(Math.random() * respectWomen.length)

var img = document.createElement('img')
img.setAttribute('src', respectWomen[uwu])
img.setAttribute('class', 'uwu')

document.body.appendChild(img)
module.exports = img
