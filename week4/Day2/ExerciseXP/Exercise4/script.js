// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user 
// that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.


(function add2Navbar(name) {
    div = document.createElement('div');
    div.style.border = 'solid 2px black';
    div.style.paddingLeft = '10px';
    div.style.marginLeft = '10px';
    p = document.createElement('p');
    p.style.paddingRight = '5px';
    text = document.createTextNode(name);
    p.appendChild(text);
    div.appendChild(text);
    img = document.createElement('img');
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DEwLisS9wp4_CH6pZAUM4apNmJVqVHZ4Ag&usqp=CAU';
    img.style.width = '5vh';
    div.appendChild(img);
    document.querySelector('nav').appendChild(div);
})('John');