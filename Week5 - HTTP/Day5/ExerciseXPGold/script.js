let id=1;


const addInfo = (text) => {

    let p = document.createElement('p');
    let txt = document.createTextNode(text);
    p.appendChild(txt);
    document.querySelector('#info').appendChild(p);
}

const retrieveData = async (id) => {
    try {
        
        let result = await fetch('https://pokeapi.co/api/v2/pokemon/' + id.toString() + '/');
        result = await result.json();
        document.querySelector('#picture').src = result.sprites.front_default;
        if (document.querySelectorAll('p').length !== 0) {
            document.querySelectorAll('p').forEach( el => {
                el.parentElement.removeChild(el);
            })
        }
        addInfo(result.species.name);
        addInfo('Pokemon nº' + id); 
        addInfo('Height: ' + result.height);
        addInfo('Weight: '+ result.weight);
        addInfo('Type:' + result.types['0'].type.name);
    } catch (err) { 
        alert('Error: '+err);
    }
}

const showNext = () => {
    id++;
    if (id > 1000) {
        id = 1000;
        return;
    }
    retrieveData(id);
}

const showPrev = () => {
    id--;
    if (id < 1) {
        id = 1;
        return;
    }
    retrieveData(id);
}

const showRandom = () => {
    id = Math.floor(Math.random() * 1000 + 1);
    retrieveData(id);
}


document.querySelector('#next').addEventListener('click',showNext);
document.querySelector('#prev').addEventListener('click',showPrev);
document.querySelector('#random').addEventListener('click',showRandom);

retrieveData(id);