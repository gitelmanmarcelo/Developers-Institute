// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, 
// for instance - change position x, change position y, change color, change the font size… and more.

let button = document.querySelector('button');

button.addEventListener('click',function() {button.style.backgroundColor = 'red';});
button.addEventListener('mouseover',function() {button.style.fontSize = (100*Math.random()).toString()+'px';});
button.addEventListener('mouseout',function() {button.style.padding = '10rem';});

button.addEventListener('dblclick',function() {
if (button.style.margin == '5rem') 
    button.style.margin = '0';
else
button.style.margin = '5rem';
});