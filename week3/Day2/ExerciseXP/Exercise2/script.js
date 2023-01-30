// Retrieve the form and console.log it.
console.log(document.querySelector('form'));

// Retrieve the inputs by their id and console.log them.
console.log(document.querySelector('#fname'));
console.log(document.querySelector('#lname'));

// Retrieve the inputs by their name attribute and console.log them.
console.log(document.getElementsByName('fname')[0]);
console.log(document.getElementsByName('lname')[0]);

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
document.querySelector('form').addEventListener("submit",submitFn);

function submitFn(e) {
    e.preventDefault();
    let fname = document.querySelector('#fname').value;
    let lname = document.querySelector('#lname').value;

    if (fname.length > 0 && lname.length > 0) {
        let li = document.createElement('li');
        li.textContent = fname;

        document.querySelector('ul').appendChild(li);

        li = document.createElement('li');
        li.textContent = lname;

        document.querySelector('ul').appendChild(li);
    }
}