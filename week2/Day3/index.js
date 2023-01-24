for (let i=0; i<=15; i++){
    if (i%2)
        console.log(i + ' is even');
    else
        console.log(i + ' is odd');
}


const prices = [23, 15, 34, 10];

// Create a variable sum equals to 0
// Loop over this array, to get the sum of all the numbers
// Where should you console log the sum ?

let sum = 0;

for (let i=0; i <prices.length; i++){
    sum += prices[i];
}

console.log(sum);

function f(item){
    console.log('callback function' + item);
}

prices.forEach(a => {console.log('arrow function ' + a); });

prices.forEach(f);

prices.forEach(function(a) {console.log('inline callback function' + a); });
