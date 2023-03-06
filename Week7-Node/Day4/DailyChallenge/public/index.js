const onFormSubmit = (evt) => {
    evt.preventDefault();
    fetch('http://localhost:5000/login',{ 
        method: 'POST', 
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({username: evt.target.username.value, password: evt.target.password.value})
    })
    .then (res => {
        if (res.status === 200)
            document.querySelector('#message').textContent = 'Hi ' + evt.target.username.value + ' welcome back!';
        else
            document.querySelector('#message').textContent = 'Username or password error!'
    })
    .catch (err => {
        console.log('error:',err);
    })
}

document.forms[0].addEventListener('submit',onFormSubmit);