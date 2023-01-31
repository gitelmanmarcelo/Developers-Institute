// Create a paragraph and make it draggable.
// You should be able to drag and drop the paragraph.
// Change the font size of the paragraph according to the screen coordinates.

let p = document.querySelector('p');
let div = document.querySelector('div'); 

p.setAttribute('draggable',true);
p.addEventListener('dragstart',onDragStart);
div.addEventListener('dragover',onDragOver);
div.addEventListener('drop',onDrop);

function onDragStart(e) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", e.target.id); 
}

function onDragOver(e) {
    e.dataTransfer.dropEffect = "move"
    p.style.fontSize = ((Number(e.clientX))/10).toString() + 'px';
    e.preventDefault();
}

function onDrop() {

}