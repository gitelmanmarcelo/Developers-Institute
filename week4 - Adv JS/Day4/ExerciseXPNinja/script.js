// Exercise 1 : Bird Class
// Instructions
// Analyze the code below, what will be the output?
class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();

// when we instantiate the pet it calls the flamingo constructor and console.log('Im pink')
// when the flamingo constructor calls super, it is calling the constructor of bird that console.log('Im a bird')