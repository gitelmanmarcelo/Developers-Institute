
const createPara = (text) => {
    const t = document.createTextNode(text);
    const p = document.createElement('p');
    p.appendChild(t);
    return p;

}

const createDiv = ({id, name, username, email, image}) => {
    const div = document.createElement('div');
    div.classList.add('card');
    const img = document.createElement('img');
    img.src = 'https://robohash.org/'+id+'?200x200';
    div.appendChild(img);
    div.appendChild(createPara(name));
    div.appendChild(createPara(username));
    div.appendChild(createPara(email));
    return div;
}

const onSubmit = (evt) => {
    evt.preventDefault();
    const divs = document.querySelectorAll('main div');
    divs.forEach(div => {
        document.querySelector('main').removeChild(div);
    })
    fetch("http://localhost:5000/search?name=" + document.querySelector('#name').value)
    .then( res => res.json())
    .then( robots => {
        robots.forEach(robot => {
            document.querySelector('main').appendChild(createDiv(robot));});
    })
    .catch( (err) => {
        console.log('error:' + err);
    });
}

document.querySelector('form').addEventListener('submit',onSubmit);
