const onSubmit = (e) => {
    e.preventDefault();
    const text = e.currentTarget.email.value;
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(text))
        alert('email ok');
    else    
        alert('Invalid email address!');
}

document.forms[0].addEventListener('submit',onSubmit);