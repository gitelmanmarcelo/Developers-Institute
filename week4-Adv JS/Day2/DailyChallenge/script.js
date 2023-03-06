// Using this object :

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

const displayGroceries = () => {
    groceries.fruits.forEach( item => {
        console.log(item);
    });
}

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. 
// (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// The user variable will remain the same because string variables are copied by value which means that
// client and user are poniting to different places in memory


// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ?
//  Why ?
// The value will change in the shopping object also because the objects are copied by reference and both
// groceries and shopping point to same place in memory. So when we change one the other is also modified

// Change the value of the payed key to false. Will we also see this modification in the shopping object
//  ? Why ?
// The value will change in the shopping object also because the objects are copied by reference and both
// groceries.other and shopping.other point to same place in memory. So when we change one the other
//  is also modified

const cloneGroceries = () => {
    let user = client;
    client = "Betty";
    console.log(user);

    let shopping = groceries;
    groceries.totalPrice = '35$';
    console.log(shopping.totalPrice);

    groceries.other.payed = false;
    console.log(shopping.other.payed);
}

// Invoke the cloneGroceries function.
cloneGroceries();
