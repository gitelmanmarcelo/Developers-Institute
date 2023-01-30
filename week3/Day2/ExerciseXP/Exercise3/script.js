// Declare a global variable named allBoldItems.
let allBoldItems = [];

// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside 
// the paragraph and assign them to the allBoldItems variable.
function getBold_items() {
    let bold = document.querySelectorAll('strong');
    for (item of bold)
        allBoldItems.push(item.textContent);
}

// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
    let bold = document.querySelectorAll('strong');
    for (item of bold)
        item.style.color = 'blue';
}

// Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal() {
    let bold = document.querySelectorAll('strong');
    for (item of bold)
        item.style.color = 'black';
}
// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), 
// and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

document.querySelector('p').addEventListener("mouseover",highlight);
document.querySelector('p').addEventListener("mouseout",return_normal);