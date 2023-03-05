const onTitleSubmit = (evt) => {
    evt.preventDefault();
    fetch('http://localhost:3000/search/title',{ 
        method: 'POST', 
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({title:evt.target.title.value})
    })
    .then (res => res.text())
    .then ( data => {
        console.log(data);
        document.documentElement.innerHTML = data;
        document.forms[0].addEventListener('submit',onTitleSubmit);
        document.forms[1].addEventListener('submit',onCategorySubmit);
    })
    .catch (err => {
        console.log('error:',err);
    })
}

const onCategorySubmit = (evt) => {
    evt.preventDefault();
    fetch('http://localhost:3000/search/category',{ 
        method: 'POST', 
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({category:evt.target.category.value})
    })
    .then (res => res.text())
    .then ( data => {
        document.documentElement.innerHTML = data;
        document.forms[0].addEventListener('submit',onTitleSubmit);
        document.forms[1].addEventListener('submit',onCategorySubmit);
    })
    .catch (err => {
        console.log('error:',err);
    });
}

document.forms[0].addEventListener('submit',onTitleSubmit);
document.forms[1].addEventListener('submit',onCategorySubmit);