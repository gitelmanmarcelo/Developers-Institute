// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

setTimeout(function() {alert('Hello World');}, 2000);

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

setTimeout(myFn, 2000);

function myFn() {
    let p = document.createElement('p');
    p.textContent = 'Hello World';
    document.querySelector('#container').appendChild(p);
}

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared 
// (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

let counter=0;

let timerID = setInterval(myFn2,2000);

document.querySelector('#clear').addEventListener('click', function() {clearInterval(timerID);});

function myFn2() {
    myFn();
    counter++;
    if (counter == 5)
        clearInterval(timerID);
}