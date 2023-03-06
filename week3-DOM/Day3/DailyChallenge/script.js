let input = document.querySelector('#myInput');

input.addEventListener('keydown',onKeyDown);

function onKeyDown(e) {
    let key = e.target.key;

    if (!((e.key >= 'a' && e.key <= 'z') || (e.key >= 'A' && e.key <= 'Z')))
        e.preventDefault();
}