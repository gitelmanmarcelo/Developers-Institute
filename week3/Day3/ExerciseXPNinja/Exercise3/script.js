document.querySelector('#main').addEventListener('mousemove',onMousemove);



function onMousemove(e) {
    // document.querySelector('#main').textContent = e.x + '  ' + e.y;
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
}