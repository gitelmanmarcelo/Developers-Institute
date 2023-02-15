// Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

const getData = async () => {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    const objectStarWars = await response.json();
    console.log(objectStarWars.result);
}

getData();


// Exercise 2: Analyze
// Instructions

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// Analyse the code provided above before executing it - what will be the outcome?
// first it will console.log('calling')
// then it will call resolveAfter2Seconds() and wait until it resolves which means it will wait 2seconds 
// and return 'resolved' to the variable result
// then it will console.log(result)