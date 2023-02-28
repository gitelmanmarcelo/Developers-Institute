// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};

// Analyze the options below. Which constructor will successfully extend the Dog class?

  // 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};
// this one wont work because it has to call super() for the constructor of the super class 


  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};
// this one (2) is the correct answer


  // 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};
// this one is missing the name parameter in the constructor


  // 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};
// this one has the this.name attributed in the subclass. It is already attributed in the superclass, the
// right placa
