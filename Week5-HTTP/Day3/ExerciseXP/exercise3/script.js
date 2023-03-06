// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const foo = Promise.resolve(3);

const foo2 = Promise.reject('Boo!');

foo.then( res => {
    console.log(res);
});

foo2.then ( res => {}, rej => {
    console.log(rej);
});