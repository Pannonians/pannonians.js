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


 const done = false;
 const text = "";
 var time = Date.now();
 console.log(time);
 // var timestamp = new Date().getTime();
 var timestamp = new Date() + 2;
 console.log(timestamp);
 
 
 class Todo{
     constructor (text, done){
         this.text = text;
         this.done = done;
         this.timestamp = timestamp;
     }
     toggleDone(){
         if (this.done === false){
             this.done = true;
         } else {
             this.done = false;
         }
        
     
 }
 
 }
 
 const nizTodo = [];
 // const lesson = ["1_comments_variables_arithmetics","2_data_types_and_operators",
 // "3_string", "4_arrays", "5_functions", "6_booleans",
 // "7_objects", "8_objests_and_arrays_practice"];
 
 const lesson1 = new Todo ("1_comments_variables_arithmetics", false)
 const lesson2 = new Todo ("2_data_types_and_operators", false)
 const lesson3 = new Todo ("3_string", false)
 const lesson4 = new Todo ("4_arrays", false)
 const lesson5 = new Todo ("5_functions", false)
 const lesson6 = new Todo ("6_booleans", false)
 const lesson7 = new Todo ("7_objects", false)
 const lesson8 = new Todo ("8_objests_and_arrays_practice", false)
 const lesson9 = new Todo("9_React", false)
 
 
 nizTodo.push(lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7, lesson8, lesson9)
 // console.log(nizTodo)
 console.log("----------ITEMS IN THE LIST IN THE FORM OF 'DONE/NOT YET DONE'-------\n")
 
//  console.log(`${lesson1.text} : ${lesson1.done ? "done!" : "not yet done"}`)
//  console.log(`${lesson2.text} : ${lesson2.done ? "done!" : "not yet done"}`)
//  console.log(`${lesson3.text} : ${lesson3.done ? "done!" : "not yet done"}`)
//  console.log(`${lesson4.text} : ${lesson4.done ? "done!" : "not yet done"}`)
//  console.log(`${lesson5.text} : ${lesson5.done ? "done!" : "not yet done"}`)
//  console.log(`${lesson6.text} : ${lesson6.done ? "done!" : "not yet done"}`)
//  console.log(`${lesson7.text} : ${lesson7.done ? "done!" : "not yet done"}`)
//  console.log(`${lesson8.text} : ${lesson8.done ? "done!" : "not yet done"}`)
 
nizTodo.forEach ((lesson) =>{
    console.log (`Lesson: ${lesson.text}, Done: ${lesson.done ? 'done!' : 'not yet done'}` )
});



 lesson1.toggleDone();
 lesson2.toggleDone();
 lesson3.toggleDone();
 lesson4.toggleDone();
 lesson5.toggleDone();
 lesson6.toggleDone();
 lesson7.toggleDone();
 
 console.log("\n-----------TOGGLEDONE FUNCTION---------\n")
 
 console.log(lesson1)
 console.log(lesson2)
 console.log(lesson3)
 console.log(lesson4)
 console.log(lesson5)
 console.log(lesson6)
 console.log(lesson7)
 
 console.log("\n---------ALL LESSONS------------\n")
 console.log(nizTodo);
 
 const doneTask = nizTodo.filter(task => task.done === true)
 console.log("\n---------ALL DONE TASKS------------\n")
 console.log(doneTask)
 
 const notDoneTask = nizTodo.filter(task => task.done === false)
 console.log("\n---------ALL TASKS NOT YET DONE ------------\n")
 console.log(notDoneTask)
 
 
 
 
 
 