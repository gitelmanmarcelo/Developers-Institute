// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by youself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

for (let i=1; i<=6; i++){
    console.log('*'.repeat(i));
}

for (let i=1; i<=6; i++){
    let ans = '';
    for (let times=1; times <= i; times++) {
        ans = ans + '*';
    }
    console.log(ans);
}
