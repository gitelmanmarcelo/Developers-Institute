let row_count = 3;

function insertRow() {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = 'Row' + row_count + ' cell1';
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent = 'Row' + row_count + ' cell2';
    tr.appendChild(td);
    row_count++;
    document.querySelector('table').appendChild(tr);
}

document.querySelector('input').addEventListener("mouseover",mouseOver);
document.querySelector('input').addEventListener("mouseout",mouseOut);

function mouseOver(e) {
    document.querySelector('input').style.backgroundColor='red';
}

function mouseOut(e) {
    document.querySelector('input').style.backgroundColor='white';
}

document.querySelector("input[type='submit']").addEventListener("click",submitClick);

function submitClick(e) {
    alert(document.querySelector("input[name='fname']").getAttribute('Value') + ' ' +
    document.querySelector("input[name='lname']").getAttribute('Value') );

}

let dropdown = document.querySelector("#A");
console.log(dropdown.options[1].value);

let newoption = document.createElement('option');
newoption.value = 'Work';
newoption.textContent = 'Work';
dropdown.appendChild(newoption);

dropdown.selectedIndex = 2;

document.querySelector('#choice').addEventListener('click',sayChoice);

function sayChoice(e) {
    alert(dropdown.value);
}
