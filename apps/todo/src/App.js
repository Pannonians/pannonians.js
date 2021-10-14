import React, { useState } from "react";
import "./App.css";
// importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import Todo from "./components/Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <ToDoList setTodos={setTodos} todos={todos} />
      <Todo />
    </div>
  );
}

export default App;
