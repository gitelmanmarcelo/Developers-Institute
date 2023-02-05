// Using these arrays :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

// Write a JavaScript program that displays the colors in the following order :
//  “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

colors.forEach( (color,index) => {
    console.log( index < 3 ? (1+index) + ordinal[index+1] + ' choice is ' + color : 
     (1+index) + ordinal[0] + ' choice is ' + color);
});