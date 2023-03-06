// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
document.querySelector('form').addEventListener('submit',submitFn);

function submitFn(e) {
    e.preventDefault();
    let radius = Number(document.querySelector('#radius').value);
    let volume = (4*3.14/3) * radius * radius * radius;
    document.querySelector('#volume').value = volume.toString();
}
    