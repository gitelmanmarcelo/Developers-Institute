// Exercise 1: Sum Elements
// Instructions
// Write a JavaScript program to find the sum of all elements in an array.

let array = [1,2,3,2,4,1,4,5,6,3,10,7,8,9,10];

console.log(array.reduce( (accum,el) => accum+el));

// Exercise 2 : Remove Duplicates
// Instructions
// Write a JavaScript program to remove duplicate items in an array.

let new_array = array.filter( (el,i) => {
    for (let j=0; j<i; j++){
        if (array[j] == el){
            return false;
        }
    }
    return true;
});

// Exercise 3 : Remove Certain Values
// Instructions
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
// Sample 

array = [NaN, 0, 15, false, -22, '',undefined, 47, null];

// Expected result : [15, -22, 47]
new_array = array.filter( el => {
    return el || false;
})

// Exercise 4 : Repeat Please !
// Instructions
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
// console.log(repeat('Ha!',3));
// "Ha!Ha!Ha!"

const repeat = (str, times=1) => {
    let ans = '';
    for (let i=1; i<=times; i++){
        ans += str;
    }
    return ans;
}

// Exercise 5 : Turtle & Rabbit
// For this exercise, look at the lesson More JS methods.

// Using this code :

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
turtle =turtle.padStart(9);
rabbit = rabbit.padStart(9);

// Line up the Turtle and the Rabbit at the start line.
// Expected Output:

//     When you write:

    console.log(startLine);
    console.log(turtle);
    console.log(rabbit);

//     It should look like this:

//     '     ||<- Start line'
//     '       🐢'
//     '       🐇'


// What happens when you run turtle = turtle.trim().padEnd(9, '='); ?
// It will trim the spaces from the begining and add 9 ='s to the end looking like the turtle ran to the finish line