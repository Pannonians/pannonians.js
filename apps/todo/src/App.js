// React is working with data which has to be presented on some way to the UI
// in the moment when data is IN STATE UI will react automatically on changes

// curly brackets {}, mean that we will import something from React library
import React, { useState, useEffect } from "react";
import "./App.css";
// importing components
import Form from "./components/Form"; //when we have some componenet, we can use it by putting it (look line 66) as HTML element
import ToDoList from "./components/ToDoList";
import Todo from "./components/Todo";

function App() {
  //States -  automatically update UI

  const [inputText, setInputText] = useState(""); // inputText is a value, setInputText is a function which allows you to change this value
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Run ONCE when app starts
  useEffect(() => {
    getLocalTodos();
  }, []); //since we have empty [] it means that function will be executed only once

  // Effects - run function whenever useState is changed
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions
  const filterHandler = () => {
    // eslint-disable-next-line default-case
    switch (status) {
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // Save to local
  const saveLocalTodos = () => {
    // if (localStorage.getItem("todos") === null) {
    //   localStorage.setItem("todos", JSON.stringify([]));
    // } else {
    localStorage.setItem("todos", JSON.stringify(todos)); //push new TODO to TODOS
    // }
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
      console.log(todoLocal);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <Form //with <Form/> we are rendering component
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText} //putting setInputText in <Form/> we are passing information about update of value inputText to the Form (now Form.js has access to 
        // function setInputTexts (Form.js, line 3))
        setStatus={setStatus}
      />
      <ToDoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
      <Todo setTodo={setTodo} todo={todo} />
    </div>
  );
}

export default App;
