// Install the faker module, and read the documentation.

// Create an empty array called users. Tip: It’s an array of objects

// Create a function that adds objects to the users array. 
// Each user has the properties: name, address street and country. Use faker to populate them with fake data.
import faker from 'faker';

const users = [];

function addUser() {
  const user = {
    name: faker.name.findName(),
    address: {
      street: faker.address.streetAddress(),
      country: faker.address.country()
    }
  };
  users.push(user);
}

// Bonus : Find a node module that allows to prompt the user 
// for his name, address street and country in order to add this information into the users array.

import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'address',
      message: 'What is your address street?'
    },
    {
      type: 'input',
      name: 'country',
      message: 'What is your country?'
    }
  ])
  .then(answers => {
    users.push({name: answers.name, address: {street: answers.address, country: answers.country}});
  });


//   Exercise 2 : Regular Expression #1
// Use the regular expression module to extract numbers from a string
// Example

const returnNumbers = (str) => {
  const regex = /\d+\.\d+|\d+/g;
  return str.match(regex).join('');
}

console.log(returnNumbers('k5k3q2g5z6x9bn') );
// Excepted output : 532569


// Exercise 3 : Regular Expression #2
// Hint: Use the regex module

// Ask the user for his full name (example: “John Doe”), and check the validity of his answer:
// The name should contain only letters.
// The name should contain only one space.
// The first letter of each name should be upper cased.

inquirer
  .prompt(
    {
      type: 'input',
      name: 'name',
      message: 'What is your full name?'
    }  )
  .then(answers => {
    const regex = /^[A-Z][a-z]*( [A-Z][a-z]*)?$/;
    if (!regex.test(answers.name))
      console.log('Invalid name');
  });
