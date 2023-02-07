// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// since the ... expands the arrays the result will be: 
// ['bread', "carrot", "potato", 'chicken', "apple", "orange"]

// ------2------
const country = "USA";
console.log([...country]);
// since the ... expands the string, the result will be:
// ['U','S','A']

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// the result will be [undefined,undefined] bacause JS treats empty arrays as undefined when spreading