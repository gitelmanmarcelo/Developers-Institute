// Using this object

const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

let usersArray = [];

for (let key in users) {
    const temp = [];
    temp.push(key);
    temp.push(users[key]);
    usersArray.push(temp);
}

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

usersArray = usersArray.map( el => [el[0],2*el[1]]);
