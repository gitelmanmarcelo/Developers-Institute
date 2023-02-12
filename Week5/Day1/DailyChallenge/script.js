document.querySelector('form').addEventListener('submit',onSubmit);

function onSubmit(evt) {

    evt.preventDefault();
    obj = {};
    obj.name = document.querySelector('#firstName').value;
    obj.lastname = document.querySelector('#lastName').value;
    jsonObj = JSON.stringify(obj);
    txt = document.createTextNode(jsonObj);
    document.querySelector('p').appendChild(txt);
    return false;

}