var Person = function (name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function () {
  if (this.canTalk) {
    console.log("Hi, I am " + this.name);
  }
};

var Employee = function (name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
//If you don't set Object.prototype.constructor to Employee,
//it will take prototype.constructor of Person (parent).
//To avoid that, we set the prototype.constructor to Employee (child).
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function () {
  if (this.canTalk) {
    console.log("Hi, I am " + this.name + ", the " + this.title);
  }
};

var Customer = function (name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

var Mime = function (name) {
  Person.call(this, name);
  this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime;

var bob = new Employee("Bob", "Builder");
var joe = new Customer("Joe");
var rg = new Employee("Red Green", "Handyman");
var mike = new Customer("Mike");
var mime = new Mime("Mime");

bob.greet(); // Hi, I am Bob, the Builder

joe.greet(); // Hi, I am Joe

rg.greet(); // Hi, I am Red Green, the Handyman

mike.greet(); // Hi, I am Mike
