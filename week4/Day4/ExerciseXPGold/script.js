// Exercise 1 : Print Full Name
// Instructions
// Create a function called printFullName(studentObj) that accepts an object as a parameter.
// For example : printFullName({first: 'Elie', last:'Schoppik'}).
// The function should return a string like the example below
// printFullName({first: 'Elie', last:'Schoppik'}) 
// // 'Your full name is Elie Schoppik`
// Destructure this object DIRECTLY from the parameters (ie. Look at the Advanced Object lesson - Part II : Object destructuring used as an assignment to a function)

// The output of the printFullName() function should be the exact same as the displayStudentInfo function. (Exercise XP)

const printFullName = (studentObj) => {
    const {first, last} = studentObj;
    return `Your full name is ${first} ${last}`;
};

printFullName({first: 'Elie', last:'Schoppik'}); 