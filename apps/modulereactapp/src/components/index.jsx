import { useState, useEffect } from "react";
import Todo from "/../models/todo";
import "./App.css";

const storageKey = "TODOS"

function App() {
    const [newTodo, setNewTodo] = useState("");
    const [todoList, setTodoList] = ([]);


    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem(storageKey));
        setTodoList(todos.map((todo) => new Todo(todo.text, todo.done)));
    }, []);

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(todoList))
    }, [todoList]);

    const onNewTodoHandler = () => {
        const todo = new Todo(newTodo);
        setTodoList([...todoList, todo]);
        setNewTodo = "";
    };



    // Ovaj event listener slusa na input fieldu
    // za event.code === "Enter", sto znaci kad stisnemo
    // enter na tastaturi, uradi nesto (dodaj todo u listu)
    const keyPressHandler = (event) => {
        if (event.code === "Enter") {
            onNewTodoHandler();
        }
    };

    //toggluje state todo-a i cuva u todoList-u
    const toggleTodo = (todoToToggle) => {
        setTodoList(
            todoList.map((todo) => {
                todo == todoToToggle && todo.toggleDone();
                return todo;
            })
        );
    };
    //delete todo
    const removeTodo = (todoToRemove) => {
        setTodoList(todoList.filter((todo) =>
            todo !== todoToRemove));
    };


    return (
        <div className="App">
            <header className="App-header">
            <h1>To-do app (example with model)</h1>
            <div className = "flex-row w-50">
            <div className="flex-column w-100">
            <input
            type = "text"
            placeholder = "Add todo"
            style = {{padding: 10, fontSize: 18}}
            onKeyPress = {keyPressHandler}
            value = {newTodo}
            onChange= {(event) => setNewTodo(event.target.value)}
            />
            
            <div className="flex-row justify-center m-2" >
            <button
            className = "w-50"
            onClick = {onNewTodoHandler}
            style = {{padding: 10, fontSize: 20}}>
            Add todo
            </button>
            </div>
        </div>

        <div className="flex-column" style= {{minWidth: 300}}>
            <div className = "w-100"> Todo List </div>

            {todoList.map((todo) => (
                <div className="flex-row">
                    <div
                    onClick={() => toggleTodo(todo)}
                    style = {{fontWeight: "bold", cursor: "pointer"}}
                    > 
                    - {todo.done && "(✔)"}
                    {todo.text}
                    </div>
                    {todo.done && (
                        <div
                        style = {{cursor: "pointer"}}
                        onClick = {() => removeTodo(todo)}>
                            ❌
                            </div>
                    )}
                </div>
            ))}
        </div>
        </div>
           
    </header >

</div >

);

}
export default App;