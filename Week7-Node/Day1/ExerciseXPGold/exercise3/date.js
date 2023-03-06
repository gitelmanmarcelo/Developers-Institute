// In a new file called date.js, write a function that returns today’s date 
// and the amount of time left from now until the next holiday,
//  additionally display what holiday that is. Export this function.
// Hint: Start with hardcoding the datetime and name of the holiday.

const time2Holiday = (date) => {
    const ms = new Date(date) - new Date();
    const days = Math.round(ms / (1000 * 60 *60 * 24));
    const hours = Math.round( (ms % (1000 * 60 *60 * 24) ) / (1000 * 60 *60));
    const min = Math.round((ms % (1000 * 60 *60) ) / (1000 * 60));
    const sec = Math.round((ms % (1000 * 60) ) / (1000));
    return (`${days} days and ${hours}:${min}:${sec} hours`);
}

module.exports = { time2Holiday };