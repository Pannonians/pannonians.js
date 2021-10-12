/**
 * A JavaScript class is a blueprint for creating objects.
 * A class encapsulates data and functions that manipulate data.
 */
 class User {
  canTalk = true;
  canSeeHidden = false;

  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hi! I'm ${this.name}`;
  }
}

class Admin extends User {
  constructor(name, title) {
    super();
    this.name = name;
    this.title = title;
    this.canSeeHidden = true;
  }
}

const petar = new User("Petar");
console.log(petar.greet());

const igor = new Admin("Igor", "Sabijac");
console.log(igor.greet());

console.log("petar.constructor.name", petar.constructor.name);
console.log("igor.constructor.name", igor.constructor.name);

console.log(petar instanceof User);
console.log(petar instanceof Admin);

console.log("igor.canSeeHidden", igor.canSeeHidden);