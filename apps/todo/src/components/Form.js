import React from "react";


const Form = ({inputText, setInputText, todos, setTodos}) =>{
    const inputTextHendler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        // console.log("ahahahah")
        setTodos = ([
            ...todos, {text: inputText, completed: false, id: Math.random () * 1000}
        ]);
        setInputText = ("");
    };


    return(
        <form>
            <input 
            value={inputText} 
            onChange={inputTextHendler} 
            type="text" 
            className name="App-form"></input>
            <button onClick={submitTodoHandler} className ="App-form-button" type="submit">
                <i className ="fas fa-plus-square"></i>
            </button>
            <div className ="select">
                <select names="todos" className ="filter-todo">
                    <option value="all">All</option> 
                    <option value="done">Done</option>
                    <option value="not done">Not done</option>
                </select>
            </div>
        </form>

    );
}

export default Form;