// Exercise 1: Random Number
// Instructions
// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.

let num = (Math.random() * 100) + 1;
for (let i=0; i <= num; i++){
    if (i%2 == 0)
        console.log(i);
}

// Exercise 2: Capitalized Letters
// Instructions
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:

// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example,

// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']

function capitalize(text) {
    let ans1 = '';
    let ans2 = '';
    for (c of text) {
        if (ans1.length%2 == 0) {
            ans1 += c.toUpperCase();
            ans2 += c;
        }
        else {
            ans2 += c.toUpperCase();
            ans1 += c;
        }
    }
    return [ans1,ans2];
}

console.log(capitalize("abcdef"));

// Exercise 3 : Is Palindrome?
// Instructions
// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward,
//  e.g., madam, bob or kayak.

function isPalindrome(text) {
    let ans = true;
    for (let i=0; i<text.length/2; i++) {
        if (text[i] != text[text.length-i-1])
            ans = false;
    }
    return ans;
}

console.log(isPalindrome('reviver'));
console.log(isPalindrome('revivere'));
console.log(isPalindrome('123454321'));
console.log(isPalindrome('12345654321'));
console.log(isPalindrome('jdhkfkja'));

// Exercise 4 : Biggest Number
// Instructions
// Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and 
// returns the biggest number.
// Note : This function should work with any array;

function biggestNumberInArray(arrayNumber) {
    let biggest = 0;
    for (num of arrayNumber)
        if (num > biggest)
            biggest = num;
    return biggest;
}

console.log(biggestNumberInArray([-1,0,3,100, 99, 2, 99]));
console.log(biggestNumberInArray(['a', 3, 4, 2]));
console.log(biggestNumberInArray([]));

// Exercise 5: Unique Elements
// Instructions
// Write a JS function that takes an array and returns a new array with only unique elements.

function unique(arr) {
    arr.sort();
    let ans = [];
    for (item of arr){
        if (ans == [])
            ans.push(item);
        else
            if (ans[ans.length-1] != item)
                ans.push(item);
    }
    return ans;
}
  
    console.log(unique([1,2,3,3,3,3,4,5]));    
    console.log(unique([1,2,3,3,3,3,4,5]));
    console.log(unique([1,2,3,3,2,1,2,4,3,3,4,5]));