const numbers = [5,0,9,1,7,4,2,6,3,8];

// Using the .toString() method convert the array to a string.
let numStr = numbers.toString();
console.log(numStr);

// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
let numStr2 = numbers.join("-");
console.log(numStr2);

numStr2 = numbers.join(",");
console.log(numStr2);


// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.

for (let i=0; i<numbers.length; i++){
    for (let j=i; j<numbers.length; j++){
        if (numbers[j]>numbers[i]) {
            let temp = numbers[i];
            numbers[i]=numbers[j];
            numbers[j]=temp;
        }

    }
}

console.log(numbers);