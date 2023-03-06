// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

let allBooks = [{title: 'Harry Potter and the chamber of secrets', author: 'JK Rowling', image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4088/9781408855669.jpg', alreadyRead: true}, 
{title: 'Art of war', author: 'Sun Tzu', image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/7624/9780762415984.jpg', alreadyRead: true}, 
{title: 'Divergent', author: 'Veronica Roth', image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0074/9780007420421.jpg', alreadyRead: true}, 
{title: 'The Unicorn Project', author: 'Gene Kim', image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9427/9781942788768.jpg', alreadyRead: false}, ];

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
let table = document.createElement('table');
// let thead = document.createElement('thead');
// let tr = document.createElement('tr');
// let td = document.createElement('td');
// tr.appendChild(td);
// td = document.createElement('td');
// tr.appendChild(td);
// td = document.createElement('td');
// tr.appendChild(td);
// td = document.createElement('td');
// tr.appendChild(td);
// thead.appendChild(tr);
// table.appendChild(thead);

tbody = document.createElement('tbody');
let img;

for (let i=0; i<3; i++) {
    tr = document.createElement('tr');
    td = document.createElement('td');
    tr.appendChild(td);
    td = document.createElement('td');
    tr.appendChild(td);
    td = document.createElement('td');
    tr.appendChild(td);
    td = document.createElement('td');
    tr.appendChild(td);
    tbody.appendChild(tr);
    table.appendChild(tbody);
}

document.querySelector('div').appendChild(table);

for (let i=0; i<4; i++) {
    img = document.createElement('img');
    document.querySelectorAll('tr')[2].querySelectorAll('td')[i].appendChild(img);
}

// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

for (let i=0; i<4; i++) {
    document.querySelector('tr').querySelectorAll('td')[i].textContent = allBooks[i].title;
    document.querySelectorAll('tr')[1].querySelectorAll('td')[i].textContent = allBooks[i].author;
    document.querySelectorAll('tr')[2].querySelectorAll('td')[i].querySelector('img').setAttribute('src', allBooks[i].image);
    document.querySelectorAll('tr')[2].querySelectorAll('td')[i].style.width='100px';
    if (allBooks[i].alreadyRead) {
        document.querySelectorAll('tr')[0].querySelectorAll('td')[i].style.backgroundColor='red';
        document.querySelectorAll('tr')[1].querySelectorAll('td')[i].style.backgroundColor='red';
        document.querySelectorAll('tr')[2].querySelectorAll('td')[i].style.backgroundColor='red';
    }
}

