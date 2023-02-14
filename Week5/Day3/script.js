// EXERCISE 1
// Create a function that takes in a single parameter and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// If the input is a string, the promise resolves with that same string uppercased.
// If the input is anything but a string it rejects with that same input.
// Use then to repeat the string twice use catch to console.log the error finally call a function that console.log ("congratulation")

// function foo(input) {
//     return new Promise( (resolve,reject) => {
//         setTimeout(() => {
//             if (typeof input === 'string')
//                 resolve(input.toUpperCase());
//             else
//                 reject(input);
//         }, 2000); 
//     });
// }


// foo(1).then( res => {
//     console.log(res);
//     return foo('strign2');
// })
// .then ( res2 => {
//     console.log(res2);
//     return foo(123);
// })
// .then ( res3 => {
//     console.log(res3);
//     return foo('abc123');
// })
// .catch( err => {
//     console.log('err: ',err);
// })
// .finally ( () => {
//     console.log('congrats!');
// });

