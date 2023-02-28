colors = ['red','orange','coral','yellow','olive','LightGreen','SeaGreen','SkyBlue','SteelBlue','Turquoise','PowderBlue','Navy',
'MidnightBlue','MediumPurple','DarkViolet','HotPink','Violet','Silver','Grey','Black','White'];

let palette=document.querySelector('#palette').querySelectorAll('div');
let paintColor = 'black';

for(let i=0; i<21; i++) {
    palette[i].style.backgroundColor = colors[i];
    palette[i].addEventListener('click',selectColor)
}

for (let i=0; i<50*100; i++){
    let div = document.createElement('div');
    div.classList.add('drawingPixel');
    div.addEventListener('click',onClick);
    div.addEventListener('mouseover',onMouseover);
    document.querySelector('#drawingGrid').appendChild(div);
}

function onClick(e) {
    e.target.style.backgroundColor = paintColor;
}

function onMouseover(e) {
    if(e.buttons == 1 || e.buttons == 3)
        e.target.style.backgroundColor = paintColor;
}

function selectColor(e) {
    paintColor = e.target.style.backgroundColor;
    for(let i=0; i<21; i++)
        palette[i].style.border = 'solid 1px black';
    e.target.style.border = 'solid 5px black';
}

function clearDrawing(){
    let cache = document.querySelectorAll('#drawingGrid div');
    for (let i=0; i<50*100; i++)
        cache[i].style.backgroundColor = 'white';
}