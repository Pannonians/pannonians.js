import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { Todo } from "../redux/types";
import { RootState } from "../redux/store";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <div>
      <ul className="list-group">
        {todos.todos.map((todo: Todo) => (
          <TodoItem
            key={todo.title}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
