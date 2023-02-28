// Exercise 1 : Checking The BMI
// Instructions
// Hint:
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// Create two objects, each object should hold a person’s details. Here are the details:
// FullName
// Mass
// Height

let person1 = {
    FullName: 'John Doe',
    Mass: 80,
    Height: 1.8,
    BMI: function()  {return this.Mass/(this.Height*this.Height);}
}

let person2 = {
    FullName: 'Mary Ann',
    Mass: 70,
    Height: 1.65,
    BMI: function() {return this.Mass/(this.Height*this.Height);}
}

// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

// Outside of the objects, create a JS function that compares the BMI of both objects.

// Display the name of the person who has the largest BMI.

function compare(val1, val2){
    if (val1.BMI() > val2.BMI())
        return val1.FullName;
    else
        return val2.FullName;
}

console.log(compare(person1,person2));


// Exercise 2 : Grade Average
// Instructions
// Hint:
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

// Create a function called findAvg(gradesList) that takes an argument called gradesList.

// Your function must calculate and console.log the average.

// If the average is above 65 let the user know they passed

// If the average is below 65 let the user know they failed and must repeat the course.


function findAvg(gradesList) {
    let sum = 0;
    for (grade of gradesList)
        sum += grade;

    let avg = sum/gradesList.length;

    console.log(avg);

    if (avg > 65)
        console.log('passed!');
    else
        console.log('Sorry, repeated...');

}

let grades = [50,60,80,80];

findAvg(grades);

// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.