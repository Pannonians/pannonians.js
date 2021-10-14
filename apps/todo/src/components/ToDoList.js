import React from "react";
//import components
import Todo from "./Todo";

const ToDoList = ({ todos, setTodos }) => {
  console.log(todos);
  return (
    <div className="todo-containar">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            text={todo.text}
            key={todo.id}
          />
        ))}
        {/* <Todo/> */}
      </ul>
    </div>
  );
};
export default ToDoList;
