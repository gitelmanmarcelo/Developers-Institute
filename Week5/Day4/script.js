// a=[];

// urls.forEach(el => {
//   a.push(fetch( el ));
// })

// a.forEach( el => {
//   el.then(data => {
//     return (data.json());
//   })
//   .then (res => {
//     let a = 5;
//     console.log(res.result.properties)})
// });

// Promise.all(a).then(res => Promise.all(res.map(el => el.json()))).then(data => console.log(data.map(el => el.result.properties)));


    // const details = {
    //     title : 'titleInput',
    //     body: 'bodyInput'
    // }

    // const info = {
    //     method: 'POST',
    //     body : JSON.stringify(details),
    //     headers: {'Content-type': 'application/json'}
    // }

    // fetch("https://jsonplaceholder.typicode.com/posts", info)
    // .then((res) => res.json())
    // .then((resTwo) => console.log(resTwo))
    // .catch((err) => console.log(err))


//     Exercise Game - The word game You need to create 4 functions, each of them return a promises

// The 1st function, receives 2 famous persons name from the user - 
// if the names are not a string -> reject 
// else - resolve with the name of the 2 ppl in an array

async function famous() {
    const ans =[];
    const p1 = prompt("enter a famous:");
    if (typeof p1 != 'string')
        throw new Error("not a string!");
    else
        ans.push(p1);
    const p2 = prompt("enter a famous:");
    if (typeof p2 != 'string')
        throw new Error("not a string!");
    else
        ans.push(p2);
    return ans;
    }

// The 2nd function, receives a noun if the noun is less than 3 letters - reject else - resolve with the noun

async function noun() {
    const noun = prompt("enter a noun:");
    if (noun.length < 3)
        throw new Error("short noun!");
    else
        return noun;
    }

// The 3rd function, receives a city if the city doesn't start with an uppercase letter -> reject else - resolve with the city name

async function city() {
    const vcity = prompt("enter a city:");
    if ((vcity[0].toUpperCase() !== vcity[0]))
        throw new Error("not uppercase!");
    else
        return vcity;
    }

// The 4st function, receives a verb (finishing with "ing") if it doesn't end with "ing" -> reject
//  (use the endWith string method) else resolve with the verb

async function verb() {
    const verb = prompt("enter a verb:");
    if (verb.slice(-3) !== 'ing')
        throw new Error("not ing!");
    else
        return verb;
    }


// The last function, is an async function - it receives all the above promises, and return a sentence with it 
// Ex: "Beyonce is playing football with Barack Obama in Paris"
// 11:46

async function mount() {
    try {
        const names = await famous();
        const acity = await city();
        const averb = await verb();
        const anoun = await  noun();
        console.log(`${names[0]} is ${averb} ${anoun} with ${names[1]} in ${acity}`);
    } catch (err) {
        console.log("error:" + err);
    }
}

mount()


