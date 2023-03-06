// Exercise 1 Exception
// Create a function that checks if an email contain the '@', if it doesnt, throw an error and catch it

// checkEmail("johnsmith.com") // throw an exception that is caught
// checkEmail("john@smith.com")  // will still run because the exception was caught

// function checkEmail(email) {
//     try {
//         if (email.indexOf('@') === -1)
//             throw('not an email')
//         else
//             alert('good email '+ email);
//     }
//     catch {
//         alert('bad email '+ email);
//     }
// }

// Exercise 2
// Using the code below:

// const someVar = 'Cannot be reassigned';
// try {
//   someVar = 'Still going to try';
// } catch(e) {
//   console.log(e);
// }

// console.log("after")

// Which type of error will be thrown ? Look on the different types errors on Google
// TypeError: Assignment to constant variable.

// Is the console.log("after") will be shown on the console ?
// yes, bacause the exception was caught

// Exercise1:
// Create a program using XMLHTTPREQUEST to receive data from the below API and append it to the DOM.
// Use the events onload, onprogress,onerror
// http://universities.hipolabs.com/search?country=Israel

const xhr = new XMLHttpRequest();

xhr.open("GET","http://universities.hipolabs.com/search?country=Israel");

xhr.send();

xhr.onload = function() {
  console.log(xhr);
  if (xhr.status !== 200)
    console.log("error");
  else {
    const data = JSON.parse(xhr.response);
    console.log(data);
    data.forEach(element => { 
      const { name, web_pages} = element;
      const txt = document.createTextNode(name + ' ' + web_pages);
      const p = document.createElement('p');
      p.appendChild(txt);
      document.body.appendChild(p);      
    });
  }
}

xhr.onprogress = function(evt) {
  console.log(100 * evt.loaded / evt.total, "%");
}

xhr.onerror = function() {
  console.log('onError!!!');
}