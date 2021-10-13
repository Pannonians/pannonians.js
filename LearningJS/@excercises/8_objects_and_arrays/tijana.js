// Practice 8_objects_and_arrays!
// Let's simulate a TODO app!
/**
 * 1. Create a class called Todo
 * 2. It will have two properties: Text and Done. Defaults are "" and false
 * 3. It will have one function: toggleDone. It has to change from false to true and vice versa.
 * 4. Make an empty list of todos
 * 5. Create a todo for each of the lessons we've covered till now (1-8)
 * 6. After creating each of them, add them to the list
 * 7. console.log each of the items in the list in the form of: `${Text}: ${Done ? 'done!' : 'not yet done'}`
 * 8. Now mark first seven as done using the method in the object toggleDone
 * 9. console.log them all again
 * 10. ~OPTIONAL~ Make optional additional Todos in the TodoList
 * 11. Filter and console.log only ones that are done
 * 12. Filter and console.log only ones that are not yet done
 * 13. Commit!
 * 14. Bonus points: Napravite i timestamp kad se koji todo napravio, i kad se koji todo prebacio na true.
 */
class Todo {
  text = "";
  done = false;
  constructor(text, done) {
    this.text = text;
    this.done = done;
    this.time = new Date();
  }
  toggleDone() {
    if (this.done === false) {
      this.done = true;
    }
  }
}

let listOfToDos = [];

let toDo1 = new Todo("Coments, variables and arithmetics", false);
let toDo2 = new Todo("Data types and operators", false);
let toDo3 = new Todo("Strings", false);
let toDo4 = new Todo("Arrays", false);
let toDo5 = new Todo("Functions", false);
let toDo6 = new Todo("Booleans", false);
let toDo7 = new Todo("Objects", false);
let toDo8 = new Todo("Objects and Arrays practice", false);
let toDo9 = new Todo("ToDo app", false);
let toDo10 = new Todo("React", false);

listOfToDos.push(
  toDo1,
  toDo2,
  toDo3,
  toDo4,
  toDo5,
  toDo6,
  toDo7,
  toDo8,
  toDo9,
  toDo10
);

for (index = 0; index < 7; index++) {
  listOfToDos[index].toggleDone();
}

listOfToDos.forEach((toDo) => {
  console.log(`${toDo.text}: ${toDo.done ? "done!" : "not yet done"}`);
});

const taskDone = listOfToDos.filter((toDo) => toDo.done === true);
console.log("Done");
console.log(taskDone);

const taskNotDone = listOfToDos.filter((toDo) => toDo.done === false);
console.log("Not yet done");
console.log(taskNotDone);
