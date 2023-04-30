const onFormSubmit = (evt) => {
    evt.preventDefault();
    parags = document.querySelectorAll('#list p');
    if (parags.length === 0) {
        fetch('http://localhost:5000/list/first?item=' + evt.target.item.value + '&amount=' + evt.target.amount.value)
        .then(res => res.json())
        .then(data => {
            data.forEach(item => {
                const text = document.createTextNode(item.item + ' $' + item.amount);
                const p = document.createElement('p');
                p.appendChild(text);
                document.querySelector('#list').appendChild(p);
            })
        });
    }
    else {
        fetch('http://localhost:5000/list?item=' + evt.target.item.value + '&amount=' + evt.target.amount.value)
        .then(res => res.json())
        .then(data => {
            const text = document.createTextNode(data[0].item + ' $' + data[0].amount);
            const p = document.createElement('p');
            p.appendChild(text);
            document.querySelector('#list').appendChild(p);
        });
    }

}


document.forms[0].addEventListener('submit',onFormSubmit);