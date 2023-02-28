// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
console.log(document.querySelector("div"));

// Change the name “Pete” to “Richard”.
document.querySelector('ul').querySelectorAll("li")[1].textContent = 'Richard';

// Change each first name of the two <ul>'s to your name.
document.querySelector("ul").querySelector("li").textContent = 'Marcelo';
document.querySelectorAll("ul")[1].querySelector("li").textContent = 'Marcelo';

// Delete the <li> that contains the text node “Sarah”.
let el = document.querySelectorAll('ul')[1];
el.removeChild(el.querySelectorAll('li')[1]);

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
document.querySelector('ul').classList.add("student_list");
document.querySelectorAll('ul')[1].classList.add("student_list");

// Add the classes university and attendance to the first <ul>.
document.querySelector('ul').classList.add("university","attendance");
