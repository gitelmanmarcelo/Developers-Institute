// Create a js file name main.js.

// Create a function called calculateTip() that takes no parameter.
function calculateTip() {

    // Create a variable called billAmount that fetches the value of the input, which id is billAmt (check the HTML file) 
// –> It’s the amount of the bill.
let billAmount = Number(document.querySelector('#billamt').value);

// Create a variable called serviceQuality that fetches the value of the input, which id is serviceQual 
// (check the HTML file) –> It’s the quality of the service.
let serviceQuality = Number(document.querySelector('#serviceQual').value);

// Create a variable called numberOfPeople that fetches the value of the input, which id is numOfPeople
//  (check the HTML file) –> It’s the number of people sitting at the table.
let numberOfPeople = Number(document.querySelector('#peopleamt').value);

// Create a condition :
// If serviceQuality is equal to zero, or billAmount is empty, alert the user to enter these values.
if (serviceQuality == 0 || billAmount == 0)
    alert('Fill in quality and bill amount!')

// Create another condition after the first one :
// If the input numberOfPeople is empty or is smaller than 1, set a default value of 1 to numberOfPeople and make sure that 
// the tag which id is each, is not displayed (check the end of the HTML file).
if (numberOfPeople < 1){
    numberOfPeople = 1;
    document.querySelector('#each').style.display = 'none';
}

// Create a variable named total: the value should be ( billAmount * serviceQuality ) / numberOfPeople
//  (the outcome is the average tip each person should pay)
// Use the toFixed method to round total to two decimal points.
let total = (( billAmount * serviceQuality ) / numberOfPeople).toFixed(2);

// Add the CSS property “display:block” to the tag which id is totalTip.
document.querySelector('#totalTip').style.diplay = 'block';

// Display the variable total in the tag which id is tip.
document.querySelector('#tip').textContent = total.toString();
}

document.querySelector('#calculate').addEventListener('click',calculateTip);
// Second Part:
// To avoid displaying the total if the function calculateTip() is not called, add the CSS property “display:none” to the tag which id is totalTip.
// Call the function calculateTip() when the tag which id is calculate is clicked.
// Hint : use the method onclick.