// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.

function foo() {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            resolve("success");
        }, 4000);
    });
}

foo().then( res => {
    console.log(res);
});

const foo2 = Promise.resolve("success");

foo2.then( res => {
    console.log(res);
    console.log(a); // throws an exception
})
.catch(err => {
    console.log(`Ooops something went wrong`);
});
