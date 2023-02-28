// Using this array 

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Use the reduce() method to combine all of these into a single string.

const single = epic.reduce((accum,elem) => accum + ' ' + elem,'');