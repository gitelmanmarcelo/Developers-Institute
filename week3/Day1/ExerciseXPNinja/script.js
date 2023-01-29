function createCalendar(year, month) {

}

function firstDayOfWeek(year, month) {
    // 0->Saturday 1->sunday 2->monday etc...
    let ans = Number(year.substr(2));
    ans += Math.trunc(ans/4) + 1;
    switch (Number(month)){
        case 1:
            ans += 1;
            break;
        case 2:
            ans += 4;
            break;
        case 3:
            ans += 4;
            break;
        case 4:
            ans += 0;
            break;
        case 5:
            ans += 2;
            break;
        case 6:
            ans += 5;
            break;
        case 7:
            ans += 0;
            break;
        case 8:
            ans += 3;
            break;
        case 9:
            ans += 6;
            break;
        case 10:
            ans += 1;
            break;
        case 11:
            ans += 4;
            break;
        case 12:
            ans += 6;
            break;
        }

        ans--;

        ans %= 7;

        return ans;

}

function daysOfMonth(month) {
    switch (Number(month)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 2:
            return 28;
        default:
            return 30;
    }
}


let year;
let month;

do {
    year = prompt('year');
    month = prompt('month');
} while (year < "2000" || year > "2099")

let firstDay = firstDayOfWeek(year, month);
let cellNum;

if (firstDay == 0)
    cellNum = daysOfMonth(month) + 5;
else if (firstDay == 1)
    cellNum = daysOfMonth(month) + 6;
else
    cellNum = daysOfMonth(month) + firstDay - 2;

let numOfWeeks = Math.ceil(cellNum / 7);

let weekDays = ['MO','TU','WE','TH','FR','SA','SU'];

let table = document.createElement('table');

let thead = document.createElement('thead');
let th;

for (weekday of weekDays){
    th = document.createElement('th');
    th.textContent = weekday;
    thead.appendChild(th);
}
table.appendChild(thead);

let tbody = document.createElement('tbody');
let tr;
let td;
let day=1;
for (let i=0; i<numOfWeeks; i++){
    tr = document.createElement('tr');
    if (i%2 == 0)
        tr.style.background = 'rgb(165, 158, 158)';
    for (j=0; j<7; j++){
        td = document.createElement('td');
        if (day > 1 && day <= daysOfMonth(month)) {
            td.textContent = day;
            day++;
        }
        if (day == 1){
            if (j < 5) {
                if (firstDay == j+2) {
                    td.textContent = day;
                    day++;
                }
            } else {
                if (firstDay == j-5) {
                    td.textContent = day;
                    day++;
                }
            }
                
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

document.body.appendChild(table);