// In the file script.js display the result of the function created in date.js.
// (Example: the next holiday is in 30 days and 12:03:45 hours)

const times = require('./date.js');

console.log(`the next holiday is Purim, in ${times.time2Holiday('03-07-2023')}`);


// Bonus : Try to find a node module to get the date of the holidays instead of hardcoding it.

const Holidays = require('date-holidays');

const holidays = new Holidays('IL');

const holidayDates = holidays.getHolidays(2023);

const today = new Date();
let next_holiday;
for (let holiday of holidayDates) {
    if (new Date(holiday.date) > today) {
        next_holiday = holiday;
        break;
    }
}

console.log(`the next holiday is ${next_holiday.name}, in ${times.time2Holiday(next_holiday.date)}`);

