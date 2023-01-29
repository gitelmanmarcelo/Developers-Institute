// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

let planets = [{name: 'Mercury', moons: 0} , {name:'Venus', moons: 0} , {name:'Earth', moons: 1}, {name:'Mars', moons: 2},
{name: 'Jupiter', moons: 92} , {name: 'Saturn', moons: 83}, {name: 'Uran', moons: 27} , {name: 'Neptune', moons: 14}];

let planet_div;
let moon_div;

for (let i=0; i<8; i++){
    planet_div = document.createElement('div');
    planet_div.classList.add('planet');
    planet_div.classList.add('bg-'+i);
    for (j=0; j<planets[i].moons;j++) {
        moon_div = document.createElement('div');
        moon_div.classList.add('moon');
        planet_div.appendChild(moon_div);
    }
    document.querySelector('section').appendChild(planet_div);
}