// 13. DOM exercise

//       1. Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM.
//                 * If the number of paragraph added is a multiple of 3, the content of the paragraph is "Hello"
//                 * else the content of the paragraph is "New Paragraph" --> MANDATORY  : use ternary operator
//                     * Example: if the paragraph is the 3rd one added, the content should be "Hello"
//         --> MANDATORY : Use arrow functions.

//       2. Part II : Add to each new paragraph, an event listener of mouse over. When you hover on a paragraph, the paragraph should become red (ie. color of the                        text).

let numParag = 0;

const onMouseOver = (evt) => {
    evt.target.style.color = 'red';
}

const onClickEx13 = (evt) => {
    numParag++;
    const p = document.createElement('p');
    let text;
    text = document.createTextNode((numParag%3 === 0) ? 'Hello' : 'New Paragraph');
    p.appendChild(text);
    p.addEventListener('mouseover',onMouseOver)
    document.querySelector('#div13').appendChild(p);
}

document.querySelector('#ex13btn').addEventListener('click',onClickEx13);

// 28. Use **async await**, and **the fetch API** to fetch a fact on cats and display it. 
// Use this third party API :  `https://catfact.ninja/fact`
//     1. In the HTML file, create a button, everytime you click it you will add a random cat fact on the DOM 
//     2. In the JS file, create 2 functions : one to fetch data from API, 
//      the other one to display it on the page using the DOM
//     3. Make sure to use try and catch

const displayCatInfo = (info) => {
    document.querySelector('#div28 p').textContent = info;
};

const showCatInfo = async () => {
    try {
        const result = await fetch('https://catfact.ninja/fact');
        const info = await result.json();
        displayCatInfo(info.fact);
    } catch (err) {
        alert('Error: ',err);
    }
}

const onClickEx28 = () => {
    showCatInfo();
    
}

document.querySelector('#ex28btn').addEventListener('click',onClickEx28)

// 29. Use **async await**, and **the fetch API** to POST some data.
//     * Retrieve the data from a form (you can use new FormData), and send this data to this API :
//      `https://jsonplaceholder.typicode.com/posts`. 
//     * The server will send you back some dummy data that you will display on the DOM.
//     * Use the documentation of the API : https://jsonplaceholder.typicode.com/guide/
//     * Use the fetch API documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data
//     * Use the new FormData documentation with Object.fromEntries() : https://gomakethings.com/the-object.fromentries-method-in-vanilla-js/

const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: new FormData(mainForm),
            headers: {
              'Content-type': 'Content-Type: multipart/form-data',
            },
          });
        const data = await response.json();   
        document.querySelector('#div29 p').textContent = `id = ${data.id}`;
    } catch (err) {
        alert('Error: ',err);
    }
}

document.querySelector('form').addEventListener('submit',onSubmit);