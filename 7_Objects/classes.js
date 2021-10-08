/**
 * A JavaScript class is a blueprint for creating objects.
 * A class encapsulates data and functions that manipulate data.
 */
class Person {
  canTalk = true;
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hi! I'm ${this.name}`;
  }
}

class Employee extends Person {
  constructor(name, title) {
    super();
    this.name = name;
    this.title = title;
  }
}

const petar = new Person("Petar");
console.log(petar.greet());

const igor = new Employee("Igor", "Sabijac");
console.log(igor.greet());

console.log(petar.constructor.name);
console.log(igor.constructor.name);

console.log(petar instanceof Person);
console.log(petar instanceof Employee);
