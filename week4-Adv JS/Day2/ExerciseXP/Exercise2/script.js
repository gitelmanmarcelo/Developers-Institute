// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

function kg2g(kg) {
    return kg*1000;
}

console.log(kg2g(5));

console.log((function kg2g2(kg) {
    return kg*1000;
})(10));

// in the declaration you first declare the function but do not invoke it - it stays stored for future use

// in the expression you declare the function and immediately use it

const kg2g3 = kg => 1000*kg;

console.log(kg2g3(25));

