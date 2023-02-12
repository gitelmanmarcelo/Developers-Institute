const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
txt = document.createTextNode(urlParams.get('firstName'));
document.querySelector('div').appendChild(txt);
txt = document.createTextNode(' ' + urlParams.get('lastName'));
document.querySelector('div').appendChild(txt);