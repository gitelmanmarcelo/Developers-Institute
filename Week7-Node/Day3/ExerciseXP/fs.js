// Exercise 1 : Reading From A File In Node.JS
// Instructions
// Create a text file and write something inside (example: ‘Some Text To See’)
// Create an fs.js file, and inside use the Node JS File System to read the text file and console.log the output in the terminal


const fs = require('fs');

try {
    const data = fs.readFileSync('data.txt','utf-8');
    console.log(data);
}
catch (err) {
    console.log('error:',err);
}


// Exercise 2 : Writing Files With Node JS
// Instructions
// Create an fs.js file, and use the Node js File System to create a new text file and write to it.

try {
    fs.writeFileSync('newfile.txt','Hello, I am a text');
    console.log('file created!');
} catch (err) {
    console.log(err);
}

// Use the Node js File System to append some other text to the text file. (Example:”Buy orange juice”)

try {
    fs.appendFileSync('newfile.txt','\nBuy orange juice');
    console.log('success!');
} catch (err) {
    console.log(err);
}

// Use the Node js File System to delete the file.

try {
    fs.unlinkSync('newfile.txt');
} catch (err) {
    console.log(err);
}
