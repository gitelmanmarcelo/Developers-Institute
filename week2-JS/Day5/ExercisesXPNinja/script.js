let word = prompt('Player1: Enter a word (min. 8 letters):');

while (word.length < 8) {
    alert('minimum 8 letters');
    word = prompt('Player1: Enter a word (min. 8 letters):');
}

let display = '*'.repeat(word.length);

console.log(display);

let letter;
let counter=0;
let guesses = [];
let won = false;

do {

    
    do {
        same_letter = false;
        letter = prompt('Player 2: Enter a letter:');
        for (item of guesses) {
            if (letter == item){
                alert('Same letter!');
                same_letter = true;
            }
        }
    } while (same_letter);

    guesses.push(letter);
    won = true;
    for (let i=0; i<word.length; i++){
       
        if (display[i] == '*' && word[i] != letter)
            won = false;
        if (display[i] == '*' && word[i] == letter){
            display = display.slice(0,i) + letter + display.slice(i+1);
        }
    }

    console.log(display);
    console.log();
    console.log(guesses.toString());
    console.log();

    counter++;

} while (counter <= 10 && !won);

if (won)
    alert('YOU WON!');
else
    alert('YOU LOSE');
