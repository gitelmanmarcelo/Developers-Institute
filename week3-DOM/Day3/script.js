// let timeID = setTimeout(test,2000,'hello');
// clearTimeout(timeID);

let timerID = setInterval(test,1000);
let counter=10;

function test() {
    let div = document.querySelector('div');
    if (counter == 0) {
        div.textContent = 'Sales over!';
        clearTimeout(timerID);
    }
    else
        div.textContent = 'The sales end in' + counter + 'seconds !';
    counter--;
}


    // let timer = setInterval(myTimer, 1000);

    // function myTimer() {
    //   let date = new Date();
    //   let time = date.toLocaleTimeString();
    //   // date.toLocaleTimeString() returns a string with a language sensitive representation of the time portion of this date
    //   document.getElementById("demo").innerHTML = time;
    // }
    
    // function myStopFunction() {
    //   clearInterval(timer);
    // }
