// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, 
// when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

let timerID;

function myMove() {
    timerID = setInterval(moveBox,1);
}

let box = document.querySelector('#animate');
let left = 0;

function moveBox() {
    box.style.left = left.toString() + 'px';
    left++; 
    if (left == 350)
        clearInterval(timerID);
}