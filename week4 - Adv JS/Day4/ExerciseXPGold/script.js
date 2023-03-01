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
    
    const new_obj = Object.fromEntries(entries);

    const keys = Object.keys(new_obj);
    const values = Object.values(new_obj);

    return [keys,values];
};

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// ➞ [["a", "b", "c"], [1, 2, 3]]

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

// Exercise 3 : Counter Class
// Instructions
// Analyze the code below, what will be the output?

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);

// the result will be 3 because counter start=0 in the constructor, we incremented twice.
// We make counterTwo = counterOne. It means they point to the same address in the heap, is the same object
// when we increment counterTwo, counts becomes 3
