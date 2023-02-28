const getData = async () => {
    try {
        const res = await fetch('http://localhost:5000/api/products');
        data = await res.json();    
        showProds(data);
    } catch (err) {
        alert('error:', err);
    }
}

getData();

const showProds = (arr) => {
    const html = arr.map( el => {
        return `<div>${el.name} ${el.price}</div>`;
    })
    document.querySelector('#prods').innerHTML = (html.join(''));
}

const onSearch = async (evt) => {
    evt.preventDefault();
    try {
        const res = await fetch('http://localhost:5000/api/products/' +document.querySelector('input').value);
        const data = await res.json();    
        showProds(data);
    } catch (err) {
        alert('error:', err);
    }    
}

const onSearch2 = async (evt) => {
    evt.preventDefault();
    try {
        const res = await fetch('http://localhost:5000/api/search?q=' +document.querySelectorAll('input')[1].value);
        const data = await res.json();    
        showProds(data);
    } catch (err) {
        alert('error:', err);
    }    
}

document.querySelector('button').addEventListener('click',onSearch);
document.querySelector('#btn2').addEventListener('click',onSearch2);


