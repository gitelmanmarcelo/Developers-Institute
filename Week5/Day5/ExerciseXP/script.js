let data;



const getData = async () => {
    try {
        const icon = document.createElement('i');
        icon.classList.add('fa-sharp','fa-solid','fa-spinner','fa-spin');
        document.querySelector("#bigRectangle").appendChild(icon);
        const result = await fetch('https://www.swapi.tech/api/people/' + (Math.floor(Math.random()*83 + 1)).toString() + '/');
        if (result.status >= 300)
            throw new Error("error" + result.status);
        const data = await result.json();
        const result2 = await fetch(data.result.properties.homeworld + '/');
        if (result2.status >= 300)
            throw new Error("error" + result.status);
        const data2 = await result2.json();
        data.result.properties.homeworld = data2.result.properties.name;
        document.querySelector("#bigRectangle").removeChild(icon);
        displayCharInfo(data.result.properties);

    } catch (err) {
        document.querySelector("#bigRectangle").removeChild(document.querySelector('i'));
        const img = document.createElement('img');
        img.src = "star_wars_404.webp";
        document.querySelector("#bigRectangle").appendChild(img);
        console.log("Error: " + err);
    }
}

const displayCharInfo = ({ name, height, gender, birth_year, homeworld}) => {
    showInfo('',name);
    showInfo('Height', height);
    showInfo('Gender', gender);
    showInfo('Birth year', birth_year);
    showInfo('Homeworld', homeworld);
}

const showInfo = (label, info) => { 
    const infoDiv = document.querySelector('#bigRectangle');
    let text;
    if (label.length === 0)
        text = document.createTextNode(info);
    else
        text = document.createTextNode(label + ": " + info);
    const p = document.createElement('p');
    p.appendChild(text);
    infoDiv.appendChild(p);
}

const onClick = () => {
    ps = document.querySelectorAll('p');
    ps.forEach(el => {
        el.parentElement.removeChild(el);
    });
    img = document.querySelectorAll("#bigRectangle img");
    if (img.length !== 0)
        document.querySelector('#bigRectangle').removeChild(img[0]);

    getData();
}

document.querySelector('button').addEventListener('click',onClick);
getData();

// }
// https://media2.giphy.com/media/FlodpfQUBSp20/giphy.gif?cid=830e7a849c3acea9b05587261d62685fc3befd9553b8eec7&rid=giphy.gif&ct=g
// https://media2.giphy.com/media/l1Et7Qw1XjvunS0Io/giphy.gif?cid=830e7a84bec809ba4f4a794dbb24ba2240d2130edb30a51f&rid=giphy.gif&ct=g


