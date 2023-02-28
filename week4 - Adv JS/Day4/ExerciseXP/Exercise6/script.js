// Evaluate these (ie True or False)

// [2] === [2] 
// {} === {}

// both will be false because JS assigns a different memory address for every object and
// the === compares the address of the object and arrays and not its contents.


// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
// 5 because it is directly assigned

const object2 = object1; 
// 5 because object2 points to the same address of object1, they have the same contents

const object3 = object2; 
// 5 because object3 points to the same address of object1 and object2 , they have the same contents

const object4 = { number: 5};
// 5 because it is directly assigned

object1.number = 4;
console.log(object2.number)
// the result is 4 because when we changed in object1 we changed in the same address of memory of object2

console.log(object3.number)
// the result is 4 because when we changed in object1 we changed in the same address of memory of object3

console.log(object4.number)
// the result is 5 because object4 is stored in a different memory address than object1, object2 and object3


// Create a class Animal with the attributes name, type and color. The type is the animal type, 
// for example: dog, cat, dolphin ect …

class Animal {
    constructor(name,type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}


// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound().
//  This method takes a parameter: the sound the animal makes, and returns the details of the animal 
//  (name, type and color) as well as the sound it makes.

class Mamal extends Animal {
    constructor(name,type, color) {
        super(name,type, color);
    }

    sound(animalSound) {
        return `${animalSound}!!! I'm a ${this.color} ${this.type} named ${this.name}.`;
    }
}


// Create a farmerCow object that is an instance of the class Mamal.
//  The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

const farmerCow = new Mamal('Lily','cow','brown and white');

console.log(farmerCow.sound('Moooo!'));