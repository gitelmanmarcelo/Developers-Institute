// Add the code above, to your HTML file

// Add a “light blue” background color and some padding to the <div>.
document.querySelector('div').style.backgroundColor = 'lightblue';
document.querySelector('div').style.padding = '2rem';

// Do not display the <li> that contains the text node “John”.
document.querySelector('li').style.visibility = 'hidden';

// Add a border to the <li> that contains the text node “Pete”.
document.querySelector('ul').querySelectorAll('li')[1].style.border = 'solid 1px black';

// Change the font size of the whole body.
document.querySelector('body').style.fontSize = '5rem';

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if (document.querySelector('div').style.backgroundColor == 'lightblue') {
    el = document.querySelectorAll('li');
    alert('Hello ' + el[0].textContent + ' and ' + el[1].textContent);
}