import React, { useState } from "react"; //with this sentance we are letting know this file that we are useing React; we are eimporting React with this sentance

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  // here we can write JS code and functions
  const inputTextHendler = (e) => { // whenever we type something event("e") tells us information what just have happend
    console.log(e.target.value); // but when we .target, we are targetting input field and with .value we are targeting what is typed in the input field
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault(); // after entering some text in input field and click sign plus to submit it, page is refreshing; with preventDefault function we stopped it
    // console.log("ahahahah")
    setTodos([
      ...todos, // if some todo already exists just pass it to the array
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHendler} //whenever we change something in the input filed inputTextHendler function will be triggered
        type="text"
        className="todo-input"
      ></input>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onClick={statusHandler} names="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Not completed</option>
        </select>
      </div>
    </form>
  );
};

//with this command, we are hooking this component up to the app;
export default Form;
