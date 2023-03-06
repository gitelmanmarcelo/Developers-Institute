// Copy the code above, to a structured HTML file.
// In your Javascript file add the functionality which will allow you to drag the box 
// and drop it into the target. Check out the Course Notes named DOM animations.


//Feature detection from Modernizr

var div = document.createElement('div');
 
 
if ('draggable' in div || ('ondragstart' in div && 'ondrop' in div))
    console.log("Drag and Drop API is supported!");
else
console.log("Drag and Drop API is NOT supported!");

let box = document.querySelector('#box');

box.setAttribute('draggable',true);
box.addEventListener('dragstart',onDragStart);

let target = document.querySelector('#target');
target.addEventListener('dragover',onDragOver);
target.addEventListener('drop',onDrop);

function onDragStart(e) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", e.target.id); 
}

function onDragOver(e) {
    e.preventDefault();
 
    // Set the dropEffect to move
    e.dataTransfer.dropEffect = "move"
}
 
function onDrop(e) {
     
    e.preventDefault();
     
    // Get the id of the target and add the moved element to the target's DOM
    var id = e.dataTransfer.getData("text/plain");
    e.target.appendChild(document.getElementById(id));
}
