class Lesson {
  lesson = "";
  done = false;
  time = new Date();

  constructor(lesson, id) {
    this.lesson = lesson;
    this.done = false;
    this.id = id;
    this.time = new Date();
  }

  toggleDone() {
    if (this.done === false) {
      this.done = true;
    }
  }
}

let lessonList = [];

let lesson1 = new Lesson("Learn about comments, variables and arithmetics", 1);
let lesson2 = new Lesson("Learn about data types and operators", 2);
let lesson3 = new Lesson("Learn about strings", 3);
let lesson4 = new Lesson("Learn about arrays", 4);
let lesson5 = new Lesson("Learn about functions", 5);
let lesson6 = new Lesson("Learn about booleans", 6);
let lesson7 = new Lesson("Learn about objects", 7);
let lesson8 = new Lesson("Learn about objects and arrays practise", 8);
let lesson9 = new Lesson("Learn to code in JS", 9);
let lesson10 = new Lesson("Learn to use React", 10);

lessonList.push(
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10
);

for (id = 0; id <= 7; id++) {
  lessonList[id].toggleDone();
}

console.log(lessonList);
