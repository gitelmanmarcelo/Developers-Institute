

// EXERCISE 1
let addressNumber = 19;
let addressStreet = 'shmurat';
let country = 'Israel';

let globalAdress = 'I live in ' + addressStreet + ', ' + addressNumber + ', in ' + country;

console.log(globalAdress);


// EXERCISE 2
let birthYear = 1975;
let currYear = 2023;

console.log('I will be ' + (currYear-birthYear).toString() + " this year.");

// EXERCISE 3
let pets = ['cat','dog','fish','rabbit','cow'];

console.log(pets[1]);

pets.splice(3,1,'horse');

console.log(pets);
console.log(pets.length);

// ALERT - message + ok
alert("Hello");

// PROMPT - message + input + ok + cancel
// RETURNS THE INPUT IDBCursorWithValue
// IF ESC or CANCEL RETURNS null
let result = prompt('How old are you?',20);
alert(result);

// CONFIRM - message + Ok + cancel
// IF OK returns true otherwise returns false
result = confirm('Are you sure?');
alert(result);
