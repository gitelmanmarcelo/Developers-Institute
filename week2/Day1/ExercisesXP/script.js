/**** Exercise 1: Your Favorite Food
Instructions
Store your favorite food into a variable.

Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

Console.log I eat <favorite food> at every <favorite meal> */

let favFood = 'Apple';
let favMeal = 'Lunch';

console.log('I eat ' + favFood + ' at every ' + favMeal);

/**** Exercise 2 : Series
Instructions
Part I
Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
For example : black mirror, money heist, and the big bang theory

Console.log a sentence using both of the variables created above
For example : I watched 3 series : black mirror, money heist, and the big bang theory
*/

const myWatchedSeries = ['black mirror', 'money heist', 'the big bang theory'];

let myWatchedSeriesLength = myWatchedSeries.length;

let myWatchedSeriesSentence = myWatchedSeries.toString();

console.log('I watched ' + myWatchedSeriesLength.toString() + ' series : ' + myWatchedSeriesSentence);



/**** Exercise 2 / Part II
Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
Add, at the end of the array, the name of another series you watched.
Add, at the beginning of the array, the name of your favorite series.
Delete the series “black mirror”.
Console.log the third letter of the series “money heist”.
Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.*/

myWatchedSeries.splice(2,1,'friends');

myWatchedSeries.push('Wednesday');

myWatchedSeries.splice(0,0,'Alias');

myWatchedSeries.splice(1,1);

console.log(myWatchedSeries[1][2]);

console.log(myWatchedSeries);


/****Exercise 3 : The Temperature Converter
Instructions
Store a celsius temperature into a variable.

Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
*/

let celsius = 32;

console.log(celsius + '°C is ' + (((celsius/5)*9)+32) + '°F');

/****Exercise 4 : Guess The Answers #1
Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
*/

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55 because both are numebers and it will show the sum
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23 because both are numebers and it will show the sum but now a equals to 2 then it will show the sum of 2 and 21
// Actual: 23

//What is the value of c?
//the value of c is undefined once it was not initialized to any value

//Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5');
// Since 3 and 4 are numbers it will sum then and display 7
// since '5' is a string it will concatenate it with the previous number resulting in '75'

/****Exercise 5 : Guess The Answers #2
Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
*/

typeof(15)
// Prediction: number because it is not between quotes
// Actual:number

typeof(5.5)
// Prediction: number because it is not between quotes
// Actual: number

typeof(NaN)
// Prediction: number. NaN is of type number by convention
// Actual: number

typeof("hello")
// Prediction: string bacause it is between quotes
// Actual:string

typeof(true)
// Prediction: boolean because it is the reserved word true without quotes
// Actual: boolean

typeof(1 != 2) 
// Prediction: boolean beacause it is an expression with a false (boolean) result
// Actual: boolean

"hamburger" + "s"
// Prediction: 'hamburgers' because it is a concatenation of strings
// Actual: 'hamburgers'

"hamburgers" - "s"
// Prediction: NaN, because in a subtraction JS will convert the string to number and in this case the result will be NaN for both operands
// Actual: NaN

"1" + "3"
// Prediction: '13' because it is a concatenation of strings
// Actual: '13'

"1" - "3"
// Prediction: -2, because in a subtraction JS will convert each string to numbers and we will have 1-3 that is equals to -2
// Actual: -2

"johnny" + 5
// Prediction: 'johnny5' because it is a concatenation of a string and a number
// Actual: 'johnny5'

"johnny" - 5
// Prediction: NaN, because in a subtraction JS converts the string to number. In this case the result is NaN for "johnny" and NaN-5 equals to NaN
// Actual: NaN

99 * "hello"
// Prediction: NaN, because in a multiplication JS converts the string to number. "hello" will become NaN. And 99*NaN equals NaN.
// Actual: NaN

1 != 1
// Prediction: false, because it is a boolean expression and 1 is not different from 1
// Actual: false

1 == "1"
// Prediction: true. JS converts the string "1" to the number 1 and compares with the number 1 that is equal.
// Actual: true

1 === "1"
// Prediction: false, because the types as different: "1" is string and 1 is number.
// Actual: false

/****Exercise 6 : Guess The Answers #3
Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

What is the output of each of the expressions below?
*/

5 + "34"
// Prediction: '534' - in an addition JS converts the number to string and concatenates
// Actual: '534'

5 - "4"
// Prediction: 1 - in a subtraction JS converts the string to number and makes the math 5-4 equals 1 
// Actual: 1

10 % 5
// Prediction: 0 - the remainder of the division of 10 by 5 is 0.
// Actual: 0

5 % 10
// Prediction: 5 - the remainder of the division of 5 by 10 is 5.
// Actual: 5

"Java" + "Script"
// Prediction: 'JavaScript' - JS concatenates the 2 strings
// Actual: 'JavaScript'

" " + " "
// Prediction: '  ' - JS concatenates the 2 spaces
// Actual: '  '

" " + 0
// Prediction: ' 0' -  JS converts the 0 to string and then concatenates
// Actual: ' 0'

true + true
// Prediction: 2 - JS converts the booleans to numbers. Then it becomes 1+1 equals to 2.
// Actual: 2

true + false
// Prediction: 1 - JS converts the booleans to numbers. Then it becomes 1+0 equals to 1.
// Actual: 1

false + true
// Prediction: 1 - JS converts the booleans to numbers. Then it becomes 0+1 equals to 1.
// Actual: 1

false - true
// Prediction: -1 - JS converts the booleans to numbers. Then it becomes 0-1 equals to -1.
// Actual: -1

!true
// Prediction: false - the opposite of true is false
// Actual: false

3 - 4
// Prediction: -1. Its a 2 numbers subtraction
// Actual: -1

"Bob" - "bill"
// Prediction: Nan. In a subtraction JS converts the strings to numbers. In this case both are NaN. NaN-Nan = Nan.
// Actual: Nan
