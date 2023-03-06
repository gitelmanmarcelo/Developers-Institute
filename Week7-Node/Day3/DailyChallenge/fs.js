// Instructions
// Download this Github repository.

// Create an fs.js file and use the Node js File System to read the RightLeft file. In the file, you will see a list of symbols : > and <. Each one of this symbol has a meaning:
// > means that you move 1 step to the right
// < means that you move 1 step to the left

// Example:

// When you start reading the file, you start at the position 0
// If the file begins like this ">>>" after 3 steps you would be in position 3
// If the file begins like this ">>><<" after 5 steps you would be in position 1


// Use the corresponding operations to calculate the final position at the end of the file - The answer should be: 74 steps to the right.


// Use the corresponding operations to calculate the number of steps needed to hit position the -1 for the first time - The answer should be: 1795 steps.

const fs = require('fs');

fs.readFile('rightleft.txt','utf-8', (err,data) => {
    if (err)
        console.log(err);
    else {
        let pos = 0;
        let beenThere = false;

        for (let i=0; i<data.length; i++) {
            if (pos <0 && !beenThere) {
                console.log('first time in left side is ' + i + ' steps');
                beenThere = true;
            }
            if (data[i] === '>')
                pos++;
            else if (data[i] === '<')
                pos--;
        }
        if (pos > 0)
            console.log(`you are ${pos} steps to the right`);
        else
            console.log(`you are ${-pos} steps to the left`);
    }
})