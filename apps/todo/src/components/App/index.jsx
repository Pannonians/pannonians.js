import { useState, useEffect } from "react";
import Todo from "../../models/Todo";
import "./App.css";

// This is a key we will use to store and persist our Todos
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
const storageKey = "TODOS";

function App() {
  // use state https://reactjs.org/docs/hooks-state.html
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // 1. Kad se pokrene projekat, pozovi mi todoList iz interne memorije
  //    i snimi te sacuvane Todos u todoList. Instanciraj ih kao Todo model.
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem(storageKey));
    setTodoList(todos.map((todo) => new Todo(todo.text, todo.done)));
  }, []);

  // 2. Kad se izmeni todoList, snimi todoList u internu memoriju kao JSON
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(todoList));
  }, [todoList]);

  // Ova funkcija sluzi da napravi novi Todo
  // i da ga doda u todoList-u. Zatim ispraznimo
  // input field da bi na brzinu mogli da iskuckamo
  // novi Todo
  const onNewTodoHandler = () => {
    const todo = new Todo(newTodo);
    setTodoList([...todoList, todo]);
    setNewTodo("");
  };

  // Ovaj event listener slusa na input fieldu
  // za event.code === "Enter", sto znaci kad stisnemo
  // enter na tastaturi, uradi nesto (dodaj todo u listu)
  const keyPressHandler = (event) => {
    if (event.code === "Enter") {
      onNewTodoHandler();
    }
  };

  // Ova funkcija togluje state todo-a i cuva u todoList-u
  const toggleTodo = (todoToToggle) => {
    setTodoList(
      todoList.map((todo) => {
        todo === todoToToggle && todo.toggleDone();
        return todo;
      })
    );
  };

  // Ovim putem brisemo todo iz list-e
  const removeTodo = (todoToRemove) => {
    setTodoList(todoList.filter((todo) => todo !== todoToRemove));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos app example</h1>
        <div className="flex-row w-50">
          <div className="w-100 flex-column">
            <input
              onKeyPress={keyPressHandler}
              value={newTodo}
              onChange={(event) => setNewTodo(event.target.value)}
              placeholder="Dodaj todo"
              type="text"
              style={{ padding: 10, fontSize: 18 }}
            />
            <div className="flex-row justify-center m-2">
              <button
                onClick={onNewTodoHandler}
                className="w-50"
                style={{ padding: 10, fontSize: 20 }}
              >
                Dodaj Todo
              </button>
            </div>
          </div>
          <div className="flex-column" style={{ minWidth: 300 }}>
            <div className="w-100">Spisak todo-a</div>
            {/* Pokazi sve todo */}
            {todoList.map((todo) => (
              <div className="flex-row">
                <div
                  onClick={() => toggleTodo(todo)}
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                >
                  - {todo.done && "(✔) "}
                  {todo.text}
                </div>
                {/* Ako je Todo done, pokazi crveni X da ga obrisemo */}
                {todo.done && (
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => removeTodo(todo)}
                  >
                    ❌
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
