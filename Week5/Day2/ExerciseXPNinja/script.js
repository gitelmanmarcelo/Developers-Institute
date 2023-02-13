// Exercise 1 : Giphy API #3
// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// Create a program to fetch gifs.
// Create an input and a button, which will allow the user to search for a specific type/category of gif.
// Append the relevant gifs to the page. Hint : to find the URL of the gif, 
// look for the sub-object named “images” inside the data you receive from the API.

document.forms[0].searchBtn.addEventListener('click',onBtnClick);
document.forms[0].deleteAllBtn.addEventListener('click',onDeleteAllBtnClick);

function onBtnClick(evt) {
    evt.preventDefault();
    getData();
}

function getData() {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=" + document.forms[0].category.value + 
    "&offset=" + Math.floor(Math.random() * 1000).toString() + "&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");

    xhr.send();

    xhr.onload = function() {
        console.log("onload");
        if (xhr.status !== 200)
            console.log("ERROR!!!");
        else {
            const data = JSON.parse(xhr.response);
            const div = document.createElement('div');
            div.style.width = '160px';
            div.style.display = 'flex';
            div.style.flexDirection = 'Column'
            div.style.margin = '10px';
            const img = document.createElement('img');
            img.src = data.data[0].images.downsized_medium.url;
            img.style.width = '100%'
            div.appendChild(img);
            document.querySelector('main').appendChild(div);
        }
}
}

function onDeleteAllBtnClick() {
    const divs = document.querySelectorAll('div');
    divs.forEach( elem => elem.parentElement.removeChild(elem));
}

