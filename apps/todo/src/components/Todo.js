import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
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
      <div className="todoItems">
        <li className={`todoItem ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
      </div>
      <div className="buttons">
        <button onClick={completeHandler} className="completeButton">
          {" "}
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trashButton">
          {" "}
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
