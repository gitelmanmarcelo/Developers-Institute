// Exercise 1 : Print Full Name
// Instructions
// Create a function called printFullName(studentObj) that accepts an object as a parameter.
// For example : printFullName({first: 'Elie', last:'Schoppik'}).
// The function should return a string like the example below
// printFullName({first: 'Elie', last:'Schoppik'}) 
// // 'Your full name is Elie Schoppik`
// Destructure this object DIRECTLY from the parameters (ie. Look at the Advanced Object lesson - 
// Part II : Object destructuring used as an assignment to a function)

// The output of the printFullName() function should be the exact same as the displayStudentInfo function. 
// (Exercise XP)

const printFullName = (studentObj) => {
    const {first, last} = studentObj;
    return `Your full name is ${first} ${last}`;
};

printFullName({first: 'Elie', last:'Schoppik'}); 

// Exercise 2 : Keys And Values
// Instructions
// Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order.
// Examples

const keysAndValues = (obj) => {
    const entries = Object.entries(obj).sort((a,b) => a[0]-b[0]);
    
    const a2 = Object.values(obj).sort((a,b) => a-b);
    return [a1,a2];
};

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// ➞ [["a", "b", "c"], [1, 2, 3]]

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

