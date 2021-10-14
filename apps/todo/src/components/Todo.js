import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
    //Events
    const deleteHandler = () =>{
    setTodos(todos.filter((element) => element.id !== todo.id));
    };
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-button">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-button">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
