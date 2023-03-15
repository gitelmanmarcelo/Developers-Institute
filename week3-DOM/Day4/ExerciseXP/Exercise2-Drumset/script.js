const handleClick = (e) => {
    const audio = new Audio("./sounds/"+ e.currentTarget.id + ".wav");
    audio.play();
}

const handleKey = (e) => {
    let file;
    switch (e.key.toLowerCase()) {
        case 'a':
            file = 'boom';
            break;
        case 's':
            file = 'clap';
            break;
        case 'd':
            file = 'hihat';
            break;
        case 'f':
            file = 'kick';
            break;
        case 'g':
            file = 'openhat';
            break;
        case 'h':
            file = 'ride';
            break;
        case 'j':
            file = 'snare';
            break;
        case 'k':
            file = 'tink';
            break;
        case 'l':
            file = 'tom';
            
    }
    const audio = new Audio("./sounds/"+ file + ".wav");
    audio.play();

}

const divs = document.querySelectorAll('#container div');
divs.forEach(div => div.addEventListener('click',handleClick));
document.addEventListener('keypress',handleKey);
