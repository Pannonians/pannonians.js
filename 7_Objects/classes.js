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
