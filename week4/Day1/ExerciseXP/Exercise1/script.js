// nalyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()

// will display inside the funcOne function 3

// #1.2 What will happen if the variable is declared 
// with const instead of let ?

// there will be an error because we cant assign a different value to a constant (line 7)

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
// shows inside the funcThree function 0 because it is a global variable with a value of 0 (line 23)

funcTwo()
funcThree()
// shows inside the funcThree function 5 because it is a global variable that has changed in funcTwo() line 25


// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// there will be an error message because we cant change its value in line 25 


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
// nothing is displayed because there is no display command in this function

funcFive()
// displays inside the funcFive function 5 because it is a global variable that has not been changed

//#4
//*********let a = 1;
// this line (64) will give an error message because we cant declare again a global variable with let
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// it will display inside the funcSix function test because the local variable a overwrites the global a inside the function


// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// it will work the same way as the let. if we dont try to change its value no error will occur

//#5
//**********let a = 2;
// this line (82) will give an error message because we cant declare again a global variable with let

if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// will display in the if block 5, the variable declared inside the if block

// will display outside of the if block 5, this time 5 is the global a variable

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?

// it will work the same way as the let. if we dont try to change its value no error will occur