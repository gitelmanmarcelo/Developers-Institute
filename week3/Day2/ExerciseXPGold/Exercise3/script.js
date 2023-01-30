// Create an empty array. For example: let shoppingList=[].
let shoppingList=[];

// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
let form = document.createElement('form');
document.querySelector('#root').appendChild(form);

let txt = document.createElement('input');
form.appendChild(txt);

let btn = document.createElement('input');
btn.setAttribute('type','button');
btn.value = 'Add Item';
btn.id = 'add'
form.appendChild(btn);

// Type what you need to buy in the text input field, then add the new item to the array as soon as
//  you click on the “AddItem” button (Hint: create a function named addItem()).

document.querySelector("#add").addEventListener('click',addItem);

function addItem() {
    shoppingList.push(document.querySelector("input").value);
    document.querySelector('input').value = '';
}

// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.

btn = document.createElement('input');
btn.setAttribute('type','button');
btn.id = 'clear';
btn.value = 'Clear All';
form.appendChild(btn);

document.querySelector('#clear').addEventListener('click',clearAll);

function clearAll() {
    let l = shoppingList.length;
    for (let i=0; i<l; i++)
        shoppingList.pop();
}