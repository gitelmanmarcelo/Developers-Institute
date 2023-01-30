// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with
//  different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes
//  the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.

// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently 
// displayed (but keep the values entered by the user). 
// The user could click the button at least three times and get a new story. Display the stories randomly.

document.querySelector('#lib-button') .addEventListener('click',libFn)
document.querySelector('#shuffle-button') .addEventListener('click',shuffleFn)

function extractWords() {
    let inputs=document.querySelector('form').elements;
    let words = [];

    for (let i=0; i<5; i++) {    
      
        if (inputs[i].value.length == 0) {
            alert('Empty word!');
            return;
        }
        words.push(inputs[i].value);
        console.log(i,words[i]);
    }
    return words;
}

function libFn(e) {
    e.preventDefault();

    let words = extractWords();

    document.querySelector('#story').textContent =  words.join(" ");
}

function shuffleFn(e) {
    e.preventDefault();

    let words = extractWords();
    shuffle(words);
    document.querySelector('#story').textContent =  words.join(" ");
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }