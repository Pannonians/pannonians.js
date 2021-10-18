import React from "react";
import ToDoList from "./ToDoList";

const Todo = ({ text, todo, todos, setTodos }) => {
  // console.log(todo.text)
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          // return one item with all properties but property COMPLETED change from false to true and vice versa
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
        {/* <ul className="todo"> */}
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
      {/* </ul> */}
    </div>
  );
};

export default Todo;
