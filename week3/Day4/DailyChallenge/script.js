// Recreate the todo list above:

// Create an HTML, CSS and a JS file.

// In the HTML file
// create a form with one input type="text", and a “Submit” button.
// add an empty div below the form
// <div class="listTasks"></div>

// In the js file, you must add the following functionalities:
// Create an empty array : const tasks = [];

// Create a function called addTask(). As soon as the user clicks on the button:
// check that the input is not empty,
// then add it to the array (ie. add the text of the task)
// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have (starting from left to right - check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added by the user.



const tasks = [];
let counter = 0;

document.querySelector('#btn').addEventListener('click',addTask);


function addTask(e) {
    e.preventDefault();
    let task = document.querySelector('#inputTask').value;
    if (task == '')
        return;
    tasks.push({ task_id: counter, text: task, done: false});
    let newtask = document.createElement('div');
    newtask.classList.add('taskItem');
    let icon = document.createElement('i');
    icon.classList.add("fa-solid")
    icon.classList.add("fa-rectangle-xmark");
    icon.addEventListener('click',deleteTask);
    let check = document.createElement('input');
    check.type = 'checkbox';
    check.name = 'check' + counter.toString();
    check.addEventListener('click',doneTask);
    let lbl = document.createElement('label');
    lbl.for = check.name;
    lbl.textContent = task;
    newtask.appendChild(icon);
    newtask.appendChild(check);
    newtask.appendChild(lbl);
    document.querySelector(".listTasks").appendChild(newtask);
    counter++;
    document.querySelector('#inputTask').value = '';

}

// BONUS I (not mandatory):
// Change the variable tasks to an array of task objects.
// Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
// Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value is the same as the task_id. 
// Check out data-* attributes here.
// Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, the done property should change 
// from false to true in the object, and from black to crossed out red in the DOM.

function doneTask(e) {
    let lbl = e.target.parentElement.querySelector('label');
    if (lbl.style.textDecoration == 'line-through') {
        e.preventDefault();
        return;
    }
    lbl.style.textDecoration = 'line-through';
    lbl.style.color = 'red';
    tasks[Number(lbl.for.substring(5))].done = true;


}

// BONUS II (not mandatory):
// Create a function named deleteTask(), that as soon as the user clicks on the “X” button, 
// delete that specific task from the array listTasks.

function deleteTask(e) {
    e.target.parentElement.parentElement.removeChild(e.target.parentElement);
}