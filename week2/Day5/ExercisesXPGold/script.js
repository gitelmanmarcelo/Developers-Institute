// Make A Complete Calculator In Javascript.
// Introduction:
// Today we will be creating a fully functional calculator. In order to do this, we must have our HTML and Javascript files interact with each other.
// We will be using Javascript to dynamically calculate the outcome of the buttons that were clicked on the HTML.
// We will be adding an attribute called onclick to each button. The onclick attribute allows us to call a function from our Javascript file when the button is clicked.
// For example, if you click on the number 2 on the calculator (ie. seen below in the assets), the function number(2) will be called. The argument is the value of the button.

// Use HTML CSS for the visual.

// Instructions:
// Create a HTML file for your calculator and a JS file for the calculator’s functionality.
// You must create 3 functions in the js file:
// number(num)
// operator(operator)
// equal()
// Hint : you can use the eval() method to help with your calculations.
// Before coding, take your time to understand all the parts to the exercise and their process. You can write it down somewhere if it helps (recommended).
// Bonus : create the RESET and CLEAR buttons.

let expression = "";
let operation;
let buffer;

function number(num){
    expression = expression + num;
    document.getElementById("screen").value = expression;
}

function operator(operator) {
    if (operator == 'R'){   // RESET
        buffer=0;
        expression="";
        document.getElementById("screen").value = "0";
        return;
    }
    if (operator == 'C'){    // CLEAR
        expression="";
        document.getElementById("screen").value = "0";
        return;
    }
    operation = operator;
    buffer = Number(expression);
    expression = "";
    document.getElementById("screen").value = "0";
}

function equal() {
    switch (operation){
        case '+':
            expression = buffer + Number(expression);
            break;
        case '-':
            expression = buffer - Number(expression);
            break;
        case '/':
            expression = buffer / Number(expression);
            break;
        case '*':
            expression = buffer * Number(expression);
            
            break;
    }
    document.getElementById("screen").value = expression;
}