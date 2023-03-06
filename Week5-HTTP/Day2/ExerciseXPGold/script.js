// Exercise 1 : Giphy API #2
// Instructions
// Part I

// Use the Giphy API Documentation for this exercise. Use the API KEY provided in the Exercises XP.
// Create a program to fetch a gif.
// Once the Giphy API has responded with data, append one random GIF to the page.
// Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.


const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.giphy.com/v1/gifs/random" + 
"?offset=" + Math.floor(Math.random() * 1000).toString() + "&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");

xhr.send();

xhr.onload = function() {
    if (xhr.status !== 200)
        console.log("ERROR!!!");
    else {
        const data = JSON.parse(xhr.response);
        const div = document.createElement('div');
        div.style.width = '80vw';
        div.style.display = 'flex';
        div.style.flexDirection = 'Column'
        div.style.margin = '10px';
        const img = document.createElement('img');
        img.src = data.data.images.downsized_medium.url;
        img.style.width = '100%'
        div.appendChild(img);
        document.querySelector('main').appendChild(div);
    }
}

