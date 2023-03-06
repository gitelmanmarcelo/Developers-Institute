// In the file script.js display the result of the function created in date.js.

const times = require('./date.js');

console.log(`You have lived ${times.minLived('05-05-1975')} minutes.`);

// Bonus: Try to find a node module that allows to prompt the user for his birthdate.

const readlineSync = require('readline-sync');

const birthday = readlineSync.question('What is your birthdate (mm=dd=yyyy) ?');

console.log(`You have lived ${times.minLived(birthday)} minutes.`);

