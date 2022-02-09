import React from "react";
import "./App.css";
import AddTask from "../src/features/AddTask";
import TodoList from "../src/features/TodoList";
import AllTodoItems from "../src/features/AllTodoItems"


function App() {

  return (
    <div className="App">
      <AddTask />
      <TodoList />
      <AllTodoItems />
    </div>
  );
}

export default App;
