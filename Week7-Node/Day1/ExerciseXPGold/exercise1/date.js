// In a new file called date.js, create a function that returns the amount of time
//  left from now until January 1st. Export this function.

const time2Jan = () => {
    const ms = new Date('01-01-2024') - new Date();
    const days = Math.round(ms / (1000 * 60 *60 * 24));
    const hours = Math.round( (ms % (1000 * 60 *60 * 24) ) / (1000 * 60 *60));
    const min = Math.round((ms % (1000 * 60 *60) ) / (1000 * 60));
    const sec = Math.round((ms % (1000 * 60) ) / (1000));
    return (`${days} days and ${hours}:${min}:${sec} hours`);
}

module.exports = { time2Jan };