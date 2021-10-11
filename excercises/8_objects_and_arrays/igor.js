// Practice 8_objects_and_arrays!
// Let's simulate a TODO app!
/**
 ***** 1. Create a class called Todo
 ***** 2. It will have two properties: Text and Done. Defaults are "" and false
 ***** 3. It will have one function: toggleDone. It has to change from false to true and vice versa.
 ***** 4. Make an empty list of todos
 ***** 5. Create a todo for each of the lessons we've covered till now (1-8)
 ***** 6. After creating each of them, add them to the list
 ***** 7. console.log each of the items in the list in the form of: `${Text}: ${Done ? 'done!' : 'not yet done'}`
 ***** 8. Now mark first seven as done using the method in the object toggleDone
 ***** 9. console.log them all again
 ***** 10. ~OPTIONAL~ Make optional additional Todos in the TodoList
 ***** 11. Filter and console.log only ones that are done
 ***** 12. Filter and console.log only ones that are not yet done
 * 13. Commit!
 * 14. Bonus points: Napravite i timestamp kad se koji todo napravio, i kad se koji todo prebacio na true.
 */

//  1. Create a class called Todo
 class Todo {
 
// 2. It will have two properties: Text and Done. Defaults are "" and false
    
    text = "";
    done = false;
    
  
    constructor(text) {
      this.text = text;
      this.done = false;
      this.time = new Date(); // global JS object;
    }
 
// 3. It will have one function: toggleDone. It has to change from false to true and vice versa.

    toggleDone() {
      //this.done = (this.done ? false : true);
      if  (this.done === true) {
        this.done = false;
      } else {
        this.done = true;
      }
  
      this.time = new Date();
      return;
    }
    
   }
  
//   4. Make an empty list of todos

  let todoList = [];

//   5. Create a todo for each of the lessons we've covered till now (1-8)
  
  let less1 = new Todo("comments_variables_arithmetics");
  
  let less2 = new Todo("data_types_and_operators");
  
  let less3 = new Todo("strings");
  
  let less4 = new Todo("arrays");
  
  let less5 = new Todo("functions");
  
  let less6 = new Todo("booleans");
  
  let less7 = new Todo("objects");
  
  let less8 = new Todo("practice");
  
//   6. After creating each of them, add them to the list  
  
  todoList.push(less1, less2, less3, less4, less5, less6, less7, less8);
  
  
  //   7. console.log each of the items in the list in the form of: `${Text}: ${Done ? 'done!' : 'not yet done'}`


todoList.forEach(function(less) {
    console.log(`${less.text} / ${less.done ?  "Done" : "Not done"} / modified at: ${less.time}`);
})
  
//   todoList.forEach( function(item) {
//     console.log(item.text + ": " + (item.done ? "Done!" : "NOT done!") + " modified at: " + item.time);
//     });
  
  
//   for (i=0; i<todoList.length; i++) {
//     console.log(todoList[i].text + ": " + (todoList[i].done ? "Done!" : "NOT done!") + " modified at: " + todoList[i].time);
//   }
  
  
//   8. Now mark first seven as done using the method in the object toggleDone
  
  
//   less1.toggleDone();
//   less2.toggleDone();
//   less3.toggleDone();
//   less4.toggleDone();
//   less5.toggleDone();
//   less6.toggleDone();
//   less7.toggleDone();

for (i=0; i<7; i++) {
    todoList[i].toggleDone();
  
// 9. console.log them all again  

todoList.forEach( function(less) {
    console.log(less.text + ": " + (less.done ? "Done!" : "NOT done!") + " modified at: " + less.time);
  });

  
// 11. Filter and console.log only ones that are done
 

  console.log(
    todoList.filter( item => item.done === true )
  );
  
  }

  // 12. Filter and console.log only ones that are not yet done 

  console.log(
    todoList.filter( item => item.done !== true )
  );
  
  