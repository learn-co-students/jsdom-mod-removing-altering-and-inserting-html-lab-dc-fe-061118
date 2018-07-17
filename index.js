/* Enter the code to remove the main node element under this comment */

/* Create your new element here and assign it to newHeader */


document.body.querySelector('main').remove()

const newHeader = document.createElement('h1')
newHeader.innerText = 'Donya is the champion'
newHeader.id = 'victory'
document.body.appendChild(newHeader)
