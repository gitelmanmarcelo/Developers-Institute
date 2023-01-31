// Create multiple squares/boxes with letters inside. There should be 26 squares/boxes for all the letters (A to Z) next to each other.
// Make all the squares draggable.
// You should be able to drag and drop the letters depending on their coordinates x and y.
for (let i=65; i <= 90; i++) {
    let div = document.createElement('div');
    div.textContent = (String.fromCharCode(i));
    div.style.padding = '20px';
    div.style.border = 'solid 1px black';
    div.style.display = 'inline';
    div.id = String.fromCharCode(i);
    div.setAttribute('draggable',true);
    div.addEventListener('dragstart',onDragStart);
    div.addEventListener('dragover',onDragOver);
    div.addEventListener('drop',onDrop);
    document.querySelector('#main').appendChild(div);
}

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
    e.target.parentElement.insertBefore(document.getElementById(id),document.querySelector('#'+e.target.id));
}
