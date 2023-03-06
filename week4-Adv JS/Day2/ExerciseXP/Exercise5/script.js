// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants 
// - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence 
// like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, 
// {/* <third ingredient>". */}

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in
//  the global scope.

function makeJuice(size) {
    const addIngredients = function (first, second, third) {
        text = document.createTextNode('The client wants a ' + size + ' juice, containing ' + first +
        ', ' + second + ', ' + third + '.');
        p = document.createElement('p');
        p.appendChild(text);
        document.body.appendChild(p);
    }
    addIngredients('rum', 'coconut', 'pineapple')
}

makeJuice('medium');

// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients,
// and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on 
// the DOM a sentence like The client wants a <size drink> juice,
//  containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE.
//  Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuice2(size) {
    const ingredients = [];
    const addIngredients = function (first, second, third) {
        ingredients.push(first);
        ingredients.push(second);
        ingredients.push(third);
    }
    const displayJuice = function() {
        msg = 'The client wants a ' + size + ' juice, containing ';
        ingredients.forEach( item => {
            msg += item + ', ';
        });
        text = document.createTextNode(msg.slice(0,-2) + '.');
        p = document.createElement('p');
        p.appendChild(text);
        document.body.appendChild(p);
    }
    addIngredients('rum', 'coconut', 'pineapple');
    addIngredients('vodka', 'cherry', 'lemmon');
    displayJuice();
}

makeJuice2('medium');