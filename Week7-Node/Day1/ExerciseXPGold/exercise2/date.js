// In a new file called date.js, create a function that accepts a birthdate as an argument 
// (in the format of your choice), and then return the number of minutes the user lived in his life.
//  Export this function.
// Hint: Hardcode the value of the argument, don’t ask a user for it.
 
const minLived = (birthday) => {
    const ms = new Date() - new Date(birthday);
    return Math.round(ms / (1000 * 60));
}

module.exports = {minLived};