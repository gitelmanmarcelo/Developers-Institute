

// Using a DOM property, retrieve the h1 and console.log it.
console.log(document.querySelector('h1').textContent);

// Using DOM methods, remove the last paragraph in the <article> tag.
document.querySelector('article').removeChild(document.querySelectorAll("p")[3]);

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
document.querySelector('h2').addEventListener("click",function() {document.querySelector('h2').style.backgroundColor='red'})

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
document.querySelector('h3').addEventListener("click",function() {this.style.display='none'});

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let button = document.createElement('button');
button.textContent = 'Bold';
button.addEventListener("click", allPBold);
document.querySelector('article').appendChild(button);

function allPBold() {
    allP = document.querySelectorAll('p');
    for (let i=0; i<allP.length; i++) {
        allP[i].style.fontWeight='bold';
    }
}

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
document.querySelector('h1').addEventListener("mouseover",randomFont);

function randomFont() {
    let fsize = 100*Math.random();
    document.querySelector('h1').style.fontSize=fsize.toString()+'px';
}

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
document.querySelector('h2').addEventListener("mouseover",fadeOut);

function fadeOut() {
    var element = document.querySelector('h2');
    element.style.opacity -= 0.1;
    if(element.style.opacity < 0.0) {
        element.style.opacity = 0.0;
    } else {
        setTimeout("fadeOut(\"" + elementToFade + "\")", 1000);
    }
}