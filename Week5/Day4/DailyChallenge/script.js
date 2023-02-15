// 1st Challenge
// Instructions
// Use Promise.all
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Explain in a comment how Promise.all work and why you receive this output.

// Example

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]

let showAll = async () => {
    try {
        let result = await Promise.all([promise1,promise2,promise3]);
        console.log(result);
    } catch (err) {
        console.log("error:" + err);
    }
};

showAll();

// Promise.all executes all the promises in the array. After all have completed it returns an array with the 
// respective results.
// If some of them fails, it goes to the catch block with the returned error

// 2nd Challenge
// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()


// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242

document.forms[0].addEventListener('submit',onFormSubmit);

function onFormSubmit(evt)  {
    alert('a');
    evt.preventDefault();
    calculateSun();   
}

const calculateSun = async () => {
    const lat1=document.forms[0].lat1.value;
    const lon1=document.forms[0].lon1.value;
    const lat2=document.forms[0].lat2.value;
    const lon2=document.forms[0].lon2.value;

    const promises = [fetch(`https://api.sunrise-sunset.org/json?lat=${lat1}&lng=-${lon1}`),
                            fetch(`https://api.sunrise-sunset.org/json?lat=${lat2}&lng=-${lon2}`)];
   
    try {
        result = await Promise.all(promises);
        result = await Promise.all(result.map(el => el.json()));
        document.forms[0].sunrise1.value = result[0].results.sunrise;
        document.forms[0].sunrise2.value = result[1].results.sunrise;
    } catch (err) {
        console.log("error: " + err);
    }

}