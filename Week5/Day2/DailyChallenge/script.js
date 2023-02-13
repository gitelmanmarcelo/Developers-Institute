// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.

// In the HTML file, add a form, containing an input and a button. 
// This input is used to fetch gif depending on a specific category.

// In the JS file, create a program to fetch one random gif depending on the search of the user 
// (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. 
// Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

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
            const delBtn = document.createElement('button');
            delBtn.textContent = 'DELETE GIF';
            delBtn.addEventListener('click',onClickDelete);
            div.appendChild(img);
            div.appendChild(delBtn);
            document.querySelector('main').appendChild(div);
        }
}
}

function onClickDelete(evt) {
    const div = evt.target.parentElement;
    div.parentElement.removeChild(div);

}

function onDeleteAllBtnClick() {
    const divs = document.querySelectorAll('div');
    divs.forEach( elem => elem.parentElement.removeChild(elem));
}


