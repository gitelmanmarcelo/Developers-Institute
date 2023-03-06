// Exercise 1: Analyze #2
// Instructions

let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

let sequentialStart = async function () {
    console.log('==SEQUENTIAL START==');
    const slow = await resolveAfter2Seconds();
    console.log(slow);
    const fast = await resolveAfter1Second();
    console.log(fast);
}

sequentialStart()
// Analyse the code provided above before executing it - what will be the outcome?

// first it will console.log('==SEQUENTIAL START==')
// the function will keep waiting for resolveAfter2Seconds() to resolve.
// first it will console.log("starting slow promise");
// after 2 seconds it will console.log("slow promise is done")
// console.log(slow)
// the function will keep waiting for resolveAfter1Second() to resolve.
// first it will console.log("starting fast promise");
// after 1 second it will console.log("fast promise is done")
// console.log(fast)

// Exercise 2: Analyze #3
// Instructions

resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

let concurrentStart = async function () {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();
    console.log(await slow);
    console.log(await fast);
}

setTimeout(concurrentStart, 4000)
// Analyse the code provided above before executing it - what will be the outcome?

// after 4 seconds it will run the concurrentStart function
// console.log('==CONCURRENT START with await==')
// it will call the resolveAfter2Seconds and put the result in slow (pending promise)
// first it will console.log("starting slow promise")
// it will call the resolveAfter1Second and put the result in fast (pending promise)
// then will console.log("starting fast promise")
// the console.log(await slow) will wait for the slow promise to fullfill, but before the fast promise will
// conclude and console.log("fast promise is done");
// once the slow promise concludes, it will console.log("slow promise is done")
// and the console.log that was waiting will console.log("slow");
// the next console.log will display "fast" once its promise is already fullfilled

// Exercise 3 : Modify Fetch With Async/Await
// Instructions
// Using this code:

const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typicode.com/albums"
      ];

const getData = async function() {
    try {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
  ));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}catch (err) {
    console.log("oooooooops");
}
}

// getData()
// Modify the function above. Add async await in place of the following line:
// fetch(url).then(resp => resp.json())
// So there shouldn’t be any .then() calls anymore!
// Don’t get discouraged… this is a really tough one…


const getData2 = async () => {
    try {
    const [ users, posts, albums ] = await Promise.all(urls.map(async url =>  {
        const resp = await fetch(url);
        const ans =  await resp.json();
        return ans;} ));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
}catch (err) {
    console.log("oooooooops");
}
}

getData2();