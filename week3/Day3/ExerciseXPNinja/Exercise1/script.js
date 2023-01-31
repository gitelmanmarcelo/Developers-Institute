// Here is a nice CodePen Animation Example.
// Try to recreate it without looking at the solution.
// Each new box should have a different random background color.

function onClick() {
    let div=document.createElement('div');
    div.classList.add('btn');
    div.style.backgroundColor = 'rgb(' + (Math.random()*255).toString() + ',' + (Math.random()*255).toString() + ',' + (Math.random()*255).toString() + ')';
    document.querySelector('#main').appendChild(div);
} 