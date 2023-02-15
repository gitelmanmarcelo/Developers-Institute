
// PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then append the gif to the page.
//  Use this documentation https://developers.giphy.com/docs/api/endpoint#random
//  https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My


// fetch('https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
//     .then (res => {
//         if (res.status !== 200)
//             reject("error");
//         else
//             return res.json();
//     })
//     .then (res => {
//         let img = document.createElement('img');
//         img.src=res.data.images.original.url;
//         document.querySelector('main div').appendChild(img);        
//     })

async function getRandomGif() {
    try {
        res = await fetch('https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
        if (res.status !== 200)
            throw new Error("bad status");
        res = await res.json();
        let img = document.createElement('img');
        img.src=res.data.images.original.url;
        document.querySelector('main div').appendChild(img);    
    } catch (err) {
        console.log("error: " + err);
    }

}

// Part II
// Instead of having a fixed category of gif. First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
//  You will then fetch 1 random gif, depending on the word. The word will be the gif category Display the word and the gif on the page
// For example: you will fetch the random-word-api. This api will return a random word - for example : "happy" Using this word as a category, 
// you will fetch one random gif with the category of "happy" and display it on the page
// Part III
// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"
// let word;
// fetch('http://random-word-api.herokuapp.com/word?number=1')
//     .then( res => {
//         if (res.status != 200)
//             reject("error");
//         else 
//             return res.json();
//     })
//     .then( res => {
//         word = res[0];
//         return res[0];
//     })
//     .then ( res => {
//         fetch('https://api.giphy.com/v1/gifs/random?tag=' + res + '&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
//             .then( res => {
//                 if (res.status !== 200)
//                     reject("error");
//                 else
//                     return res.json();
//             })
//             .then (res => {
//                 if (res.data.images === undefined) {
//                     fetch('https://api.giphy.com/v1/gifs/random?tag=error404&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
//                     .then( res => {
//                         return res.json();
//                     })
//                     .then (res => {
//                         img = document.createElement('img');
//                         img.src = res.data.images.original.url;
//                         document.querySelectorAll('main div')[1].appendChild(img);
//                         let title = document.createTextNode(word);
//                         document.querySelectorAll('main div')[2].appendChild(title);
//                     })
//                 }
//                 img = document.createElement('img');
//                 img.src = res.data.images.original.url;
//                 document.querySelectorAll('main div')[1].appendChild(img);
//                 let title = document.createTextNode(word);
//                 document.querySelectorAll('main div')[2].appendChild(title);
//             });
//     })

const wordGif = async () => {
    let word;
    let res = await fetch('http://random-word-api.herokuapp.com/word?number=1');
    if (res.status >= 300)
        throw new Error("bad status");
    word = await res.json();
    word = word[0];
    res = await fetch('https://api.giphy.com/v1/gifs/random?tag=' + word + '&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
    res = await res.json();
    if (res.status >= 300)
        throw new Error("bad status");
    if (res.data.images === undefined) {
        res = await fetch('https://api.giphy.com/v1/gifs/random?tag=error404&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
        res = await res.json();
        img = document.createElement('img');
        img.src = res.data.images.original.url;
        document.querySelectorAll('main div')[1].appendChild(img);
        let title = document.createTextNode(word);
        document.querySelectorAll('main div')[2].appendChild(title);
    }
    img = document.createElement('img');
    img.src = res.data.images.original.url;
    document.querySelectorAll('main div')[1].appendChild(img);
    let title = document.createTextNode(word);
    document.querySelectorAll('main div')[2].appendChild(title);
}

getRandomGif() 
wordGif()