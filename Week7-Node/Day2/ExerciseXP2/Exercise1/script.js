fetch('http://localhost:3000')
    .then( (res) => {
        return res.json();
    })
    .then( (data) => {
        const txt = document.createTextNode(JSON.stringify(data));
        const p = document.createElement('p');
        p.appendChild(txt);
        document.body.appendChild(p);
    })
    .catch( (err) => {
        alert(err);
    });
