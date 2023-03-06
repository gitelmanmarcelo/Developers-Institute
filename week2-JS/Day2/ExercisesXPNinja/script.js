// Exercise 1 : Age Difference
// Instruction
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

let year1 = Number(prompt('first year:'));
let year2 = Number(prompt('second year:'));

if (year1 > year2)
    console.log(year1 + (year1-year2));
else
    console.log(year2 + (year2-year1));

    // Exercise 2 : Zip Codes
    // Instruction
    // Harder exercise
    // Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions
    
    // While working in a Post Office you must have the clients’ zip code in order to send them their letters.
    // Ask the client for their zip code and console.log “success” or “error” based on the following rules.
    // Zip codes consists of 5 numbers
    // Must only contain numbers
    // Must not contain any whitespace (spaces)
    // Must not be greater than 5 digits in length

    let zip = prompt("Enter a zip code:");

    if (zip.length != 5)
        console.log('must have 5 digits');

    if (zip.search(' ') != -1)
        console.log('must not have a space');

    if (Number.isNaN(Number(zip.substring(0,1))))
        console.log('must contain only numbers');
    else if (Number.isNaN(Number(zip.substring(1,1))))
        console.log('must contain only numbers');
    else if (Number.isNaN(Number(zip.substring(2,1))))
        console.log('must contain only numbers');
    else if (Number.isNaN(Number(zip.substring(3,1))))
        console.log('must contain only numbers');
    else if (Number.isNaN(Number(zip.substring(4,1))))
        console.log('must contain only numbers');

    // USING REGEX
    if (!(/^\d+$/.test(zip)))
        console.log('Using REGEX - must contain only numbers')

        // Exercise 3 : Secret Word
        // Instruction
        // Harder exercise
        // Hint : Use Regular Expressions
        
        // Prompt the user for a word and save it to a variable.
        let word = prompt('Enter a word:');

        // Delete all the vowels of the word and console.log the result.
        console.log(word.replace(/[aeiou]/gi, ''));

        // Bonus: Replace the vowels with another character and console.log the result 
        console.log(word.replace(/[aeiou]/gi, '#'));