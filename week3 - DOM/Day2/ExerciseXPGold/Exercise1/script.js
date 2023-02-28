// Display the value of the selected option.
let select = document.querySelector('select');
console.log(select.value);

// Add an additional option to the select tag:
// <option value="classic">Classic</option>

let option = document.createElement('option');
option.value = 'classic';
option.textContent = 'Classic';
select.appendChild(option);

// The newly added option should be selected by default.
select.value = 'classic';


