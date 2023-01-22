/****Exercise 1 : Evaluation
Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

Evaluate the comparisons found below:

Look at this link for help

    5 >= 1 t
    0 === 1 f
    4 <= 1 f
    1 != 1 f
    "A" > "B" f
    "B" < "C" t
    "a" > "A" f
    "b" < "A" f
    true === false f
    true != true f
    */


 /****    Exercise 2 : Ask For Numbers
Instructions
Ask the user for a string of numbers separated by commas
Console.log the sum of the numbers.
Hint: use some string methods
Examples
"2,3"➞ 5
*/

let input = prompt("enter 2 comma separeted numbers:");
let numArray = input.split(",");
alert("the sum is " + ( Number(numArray[0]) + Number(numArray[1]) ));

/****Exercise 3 : Find Nemo
Instructions
Hint: if statement (tomorrow’s lesson)

Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
Find the word “Nemo”
Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
If you can’t find Nemo, console.log “I can’t find Nemo”.
*/

input = prompt("enter a sentence");
let pos = input.search("Nemo");
if (pos == -1)
    alert("didnt find!");
else
    alert("found at position " + pos);


 /****   Exercise 4 : Boom
    Instructions
    Hint: if statement (tomorrow’s lesson)
    
    Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:
    
    If the number given is less than 2 : return “boom”
    If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
    If the number given is evenly divisible by 2, add a exclamation mark to the end.
    If the number given is evenly divisible by 5, return the string in ALL CAPS.
    If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
    */

    input = prompt("enter a number:");
    input = Number(input);
    let ans;
    if (input < 2)
        ans = "boom";
    if (input >= 2)
        ans = "b" + 'o'.repeat(input) + "m";
    if ((input%2)==0)
        ans += "!";
    if ((input%5)==0)
        ans = ans.toUpperCase();
    console.log(ans);