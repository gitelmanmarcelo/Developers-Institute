// Exercise 1 : Is_Blank
// Instructions
// Write a program to check whether a string is blank or not.

function isBlank(text){
    if (text.length == 0)
        return true;
    else
        return false;
}

console.log(isBlank(''));
console.log(isBlank('abc'));

// Exercise 2 : Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."

function abbrevName(name){
    let arr = name.split(" ");
    return(arr[0] + ' ' + arr[1][0] + '.');
}

console.log(abbrevName("Robin Singh"));

// Exercise 3 : SwapCase
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.

function isUpper(c) {
    if (c == c.toUpperCase())
        return true;
    else    
        return false;
}

function swapCase(text) {
    let ans = '';
    for (c of text){
        if (isUpper(c))
            ans += c.toLowerCase();
        else
            ans += c.toUpperCase();
    }
    console.log(ans);
}

swapCase('The Quick Brown Fox');

// Exercise 4 : Omnipresent Value
// Instructions
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Examples

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false

function isOmnipresent(arr,num){
    for (item of arr){
        let present = false;
        for (i of item){
            if (i == num)
                present = true;
        }
        if (present == false)
            return false;
    }
    return true;
}

 console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
 console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));
