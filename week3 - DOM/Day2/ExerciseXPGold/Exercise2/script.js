// Add a click event listener to the <input type="button">. When clicked on, it should call a function named : removecolor() that removes 
// the selected color from the dropdown list.

document.querySelector('input').addEventListener('click',removecolor);

function removecolor() {
    let select = document.querySelector('select');
    select.removeChild(select[select.selectedIndex]);
}