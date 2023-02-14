// Exercise 1 : Star Wars API
// Instructions
// Part I

// Using this code:

const urls = [
  'https://www.swapi.tech/api/people/1',
  'https://www.swapi.tech/api/people/2',
  'https://www.swapi.tech/api/people/3',
  'https://www.swapi.tech/api/people/4'
]


// Use Promise.all to fetch all the characters from the array above with only one request.
// Console.log the output and make sure it has a catch block as well.

Promise.all(urls.map(url => fetch(url)))
  .then(res => Promise.all(res.map(res => res.json())))
  .then(data => {
    console.log(data.map( el => el.result.properties)); })
  .catch(error => console.error('Ughhh fix it', error));


//   Part II

//   Change one of the urls in the array provided above. This should cause an error. Make sure your catch block works.