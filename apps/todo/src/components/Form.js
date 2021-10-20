import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    e.preventDefault();
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todoInput"
        placeholder="Add New"
      />
      <button onClick={submitTodoHandler} className="todoButton" type="submit">
        <i className="addButton">Add New ToDo</i>{" "}
      </button>

      <div className="select">
        <button
          onClick={statusHandler}
          className="filterTodo"
          name="todos"
          value="all"
        >
          All
        </button>
        <button
          onClick={statusHandler}
          className="filterTodo"
          name="todos"
          value="completed"
        >
          Completed
        </button>
        <button
          onClick={statusHandler}
          className="filterTodo"
          name="todos"
          value="uncompleted"
        >
          Uncompleted
        </button>
      </div>
    </form>
  );
};

export default Form;
