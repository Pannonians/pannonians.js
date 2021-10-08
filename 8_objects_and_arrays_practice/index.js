const exampleData = {
  user: {
    user_notes: [
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
  },
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

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();

// Object.assign -> make a new object based on existing object, and keeps the existing object's
// information. You can consider this an expansion of the existing object by "assigning" new object's properties
const qwe = Object.assign({ qwe: "asdasdasd" }, exampleData);
console.log("qwe === exampleData", qwe === exampleData);
console.log("qwe", qwe);

// If we assign existing const to a new const without Object.assign,
// they will be considered the same, as that is not the new instance
const asd = exampleData;
console.log("asd === exampleData", asd === exampleData);

// Object.freeze -> freezes deleting, adding or changing attributes to
// an existing object
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;

console.log("obj.prop", obj.prop);

// Object.keys get's keys of the object in an array
console.log(Object.keys(exampleData));

// Object.values get's only values
console.log(Object.values(exampleData));

// Object.entries and Object.fromEntries
// A way to convert object into array and vice-versa.
// Object.entries get's both keys and values into sub-arrays
const entriesTest = {
  a: "somestring",
  b: 42,
};

for (const [key, value] of Object.entries(entriesTest)) {
  console.log(`${key}: ${value}`);
}

const entries = Object.entries(entriesTest);
console.log("entries", entries);
console.log("Object.fromEntries(entries)", Object.fromEntries(entries));

// Practice 8_objects_and_arrays!
// Let's simulate a TODO app!
/**
 * 1. Create a class called Todo
 * 2. It will have two properties: Text and Done. Defaults are "" and false
 * 3. It will have one function: toggleMarkAsDone
 * 4. Make an empty list of todos
 * 5. Create a todo for each of the lessons we've covered till now (1-8)
 * 6. After creating each of them, add them to the list
 * 7. console.log each of the items in the list in the form of: `${Text}: ${Done ? 'done!' : 'not yet done'}`
 * 8. Now mark first seven as done using the method in the object toggleMarkAsDone
 * 9. console.log them all again
 * 10. ~OPTIONAL~ Make optional additional Todos in the TodoList
 * 11. Filter and console.log only ones that are done
 * 12. Filter and console.log only ones that are not yet done
 * 13. Commit!
 */
