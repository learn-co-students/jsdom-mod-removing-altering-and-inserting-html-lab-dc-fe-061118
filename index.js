/* Enter the code to remove the main node element under this comment */
var main = document.getElementById('main');
main.remove();

/* Create your new element here and assign it to newHeader */
var newHeader = document.createElement('H1');
newHeader.innerText = ('Evan is the champion!');
newHeader.id = 'victory';
document.body.appendChild(newHeader);