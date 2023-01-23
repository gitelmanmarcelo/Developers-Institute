/*

// EXERCISE 1
let age = (prompt('How old are you?'));

if (age<18)
    alert("sorry! too young to drive :(");
else if (age == 18)
    alert('congrats on the firs year');
else
    alert('Go ahead: drive safely!');

    // EXERCISE 2
    let a = 2 + 2;

    switch (a) {
      case 3:
        alert( 'Too small' );
        break;
      case 4:
        alert( 'Exactly!' );
        break;
      case 5:
        alert( 'Too large' );
        break;
      default:
        alert( "I don't know such values" );
    }

    // EX 3
    a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}



// EX 1 OBJECTS
let profile = {
    username : 'john',
    password : '1234'
}

console.log(profile);

let database = [profile];

console.log(database);

let news1 = {
    username: 'user1',
    timeline: 'tl1'
}

let news3 = {
    username: 'user3',
    timeline: 'tl3'
}

let news2 = {
    username: 'user2',
    timeline: 'tl2'
}

let feed = [news1,news2,news3];

console.log(feed);*/


// CLASS EXERCISE
const userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

/*
1. Add the lastname Smith to the object
2. Change the username from John to Tom
2. Change the price of the pear, so it will include the Taxes. (17% is 0.17)
3. Ask the user for the fruit he wants between Apple, Banana and Pear. Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"
4. Console.log the price for the specific fruit the user wants
*/

userCart.lastName = "Smith";
userCart.username = "Tom";
userCart.prices.pear *= 1.17;
let choice = prompt('Which fruit do you want: Apple, banana or pear?').toLowerCase();
console.log(userCart.prices[choice]);


const family = {
  lastName : "Smith",
  members : 3,
  names : ["John", "Tom", "Diana"],
  isInVacation: true,
}

/*Change dynamically the isInVacation key.
If the key is true, it should become false and vice versa
Dont use conditionals
*/

family.isInVacation = !family.isInVacation;