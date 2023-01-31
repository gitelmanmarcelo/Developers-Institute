setInterval(loading,500);

function loading() {
    let msg = document.querySelector('#loading').textContent;
    if (msg == '')
        msg = 'Loading';
    else if (msg == 'Loading')
        msg = 'Loading.';
    else if (msg == 'Loading.')
        msg = 'Loading..';
    else if (msg == 'Loading..')
        msg = 'Loading...';
    else if (msg == 'Loading...')
        msg = 'Loading';
    document.querySelector('#loading').textContent = msg;
    
}

setInterval(loading2,500);

let count = 0;

function loading2() {
    document.querySelectorAll('#loading2 div')[count].style.color = 'transparent';
    count++;
    if (count == 7) count = 0;
    document.querySelectorAll('#loading2 div')[count].style.color = 'rgb(' + (Math.random()*255).toString() + ',' + (Math.random()*255).toString() + ',' + (Math.random()*255).toString() + ')';
    document.querySelectorAll('#loading2 div')[count].style.backgroundColor = 'rgb(' + (Math.random()*255).toString() + ',' + (Math.random()*255).toString() + ',' + (Math.random()*255).toString() + ')';
}