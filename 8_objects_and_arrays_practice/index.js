const exampleData = {
  user: [
    {
      created_at: "2021-09-24T14:01:50.940Z",
      message: " qwewq e qwe",
      admin: {
        email: "petar@kikoff.com",
      },
    },
    {
      created_at: "2021-09-14T20:50:44.173Z",
      message: "Notes1!!",
      admin: {
        email: "petar@kikoff.com",
      },
    },
  ],
  admin: {
    isAdmin: true,
  },
};

// some examples for object methods

// Object.create creates a new object based on the old object
// However, this only makes properties discoverable, it doesn't really
// assign the values of properties
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

console.log("person", person);
const me = Object.create(person);
console.log("me.isHuman", me.isHuman);
console.log("me", me);

// console.log("Object.entries(person)", Object.entries(person));
// console.log("Object.entries(me)", Object.entries(me));

// console.log("me === person", me === person);

// const me2 = { ...person };
// console.log("me2", me2);
// console.log("me2 === person", me2 === person);

// const istaReferenca = person;
// console.log("istaReferenca", istaReferenca);
// console.log("istaReferenca === person", istaReferenca === person);
// delete istaReferenca.isHuman;
// console.log("person", person);

// console.log("istaReferenca === person", istaReferenca === person);

// me.name = "Petar"; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // inherited properties can be overwritten

// me.printIntroduction();

// console.log("me", me);

// console.log(person.name, person.isHuman);
// console.log(me.name, me.isHuman);

// // Object.assign -> make a new object based on existing object, and keeps the existing object's
// // information. You can consider this an expansion of the existing object by "assigning" new object's properties
// const qwe = Object.assign({ qwe: "qweqweqwe" }, exampleData);
// console.log("qwe === exampleData", qwe === exampleData);
// console.log("qwe === person", qwe === person);
// console.log("qwe", qwe);

// // ovo je shorthand za Object.assign()
// const asd = { qwe: "qweqweqwe", ...exampleData };
// console.log("asd === exampleData", asd === exampleData);
// console.log("asd", asd);

// If we assign existing const to a new const without Object.assign,
// they will be considered the same, as that is not the new instance
// const asd = exampleData;
// console.log("asd === exampleData", asd === exampleData);

// // Object.freeze -> freezes deleting, adding or changing attributes to
// // an existing object
// const obj = {
//   prop: 42,
// };

// Object.freeze(obj);

// obj.prop = 33;
// obj.newData = "qwe";

// console.log("obj", obj);

// const asd = { ...obj };
// asd.prop = 69;

// console.log("asd", asd);

// // Object.seal -> zamrzava objekat za kreiranje novih propertiJa
// Object.seal(asd);

// asd.prop = 9;
// asd.nekiNoviProp = "zxczxc";

// console.log("asd", asd);

// Object.keys get's keys of the object in an array
// console.log('Object.keys(exampleData)', Object.keys(exampleData));

// Object.values get's only values
// console.log("Object.values(exampleData)", Object.values(exampleData));

// // Object.entries and Object.fromEntries
// // A way to convert object into array and vice-versa.
// // Object.entries get's both keys and values into sub-arrays
// const entriesTest = {
//   a: "somestring",
//   b: 42,
// };

// for (const [key, value] of Object.entries(entriesTest)) {
//   console.log(`${key}: ${value}`);
// }

// const entries = Object.entries(entriesTest);
// console.log("entries", entries);
// console.log("Object.fromEntries(entries)", Object.fromEntries(entries));

// Object.values(entriesTest).forEach((entry) => console.log(entry));
// Object.keys(entriesTest).forEach((key) => console.log(entriesTest[key]));

// class User {
//   constructor(name, dob) {
//     this.name = name;
//     this.dob = dob;
//   }
// }

// const UserList = [];

// UserList.push(new User("Petar", 1988));
// UserList.push(new User("Dragica", 1983));

// UserList.forEach((user) => {
//   console.log(`Ime: ${user.name}, dob: ${user.dob}`);
// });

// console.log("-----------------------------");

// UserList.push(new User("Tijana", 1988));

// UserList.forEach((user) => {
//   console.log(`Ime: ${user.name}, dob: ${user.dob}`);
// });
