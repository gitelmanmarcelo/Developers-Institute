// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words

let input=prompt('Enter comma separated words:');
input = input.split(",");
let maxLength = 0;
for (item of input)
    if (item.length > maxLength)
        maxLength = item.length;
console.log('*'.repeat(maxLength+4))
for (item of input)
    console.log('* ' + item + ' '.repeat(maxLength-item.length) + ' *');
console.log('*'.repeat(maxLength+4));
