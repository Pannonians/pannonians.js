import React from "react";
import Todo from "./Todo.js";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  console.log(todos);
  return (
    <div className="todoContainer">
      <ul className="todoList">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
