const onFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    let formObj = Object.fromEntries(formData);
    fetch('http://localhost:5000/register',{ 
        method: 'POST', 
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(formObj)
    })
    .then (res => {
        if (res.status === 200)
            document.querySelector('#message').textContent = 'Hello, ' + evt.target.username.value + ' your account is now created!';
        else
            document.querySelector('#message').textContent = 'Username already exists!'
    })
    .catch (err => {
        console.log('error:',err);
    })
}

document.forms[0].addEventListener('submit',onFormSubmit);