let user;
let computer;
let turn = 0;

startGame();

function startGame() {
    document.querySelector('#board').style.display = 'none';

    for (let i=1; i<=9; i++) {
        document.querySelector('#sq'+i.toString()).style.display = 'none';
    }

    document.querySelector("#restartBtn").style.display = 'none';
}

function onXClick() {
    user = 'X';
    computer = 'O';
    loadBoard();
}

function onOClick() {
    user = 'O';
    computer = 'X';
    loadBoard();
}

function loadBoard() {
    document.querySelector('#xBtn').style.display = 'none';
    document.querySelector('#oBtn').style.display = 'none';

    document.querySelector('#board').style.display = 'grid';

    for (let i=1; i<=9; i++) {
        document.querySelector('#sq'+i.toString()).style.display = 'flex';
    }

    document.querySelector("#restartBtn").style.display = 'flex';

    for (let i=1; i<=9; i++) {
        document.querySelector('#sq'+i.toString()).addEventListener('click',onSqClick);
    }

    document.querySelector('h1').textContent = 'You Play now...'
}

function onSqClick(evt) {
    if (evt.target.textContent !== '')
        return;
    let txt;
    if (turn%2 == 0) { // user
        txt = document.createTextNode(user);
    }
    else  { // computer
        txt = document.createTextNode(computer);
    }
    evt.target.appendChild(txt);
    turn++;
}