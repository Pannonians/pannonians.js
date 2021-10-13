import React from "react";


const Form = () =>{
    return(
        <form>
            <input type="text" className name name="App-form"></input>
            <button className name="App-form-button" type="submit">
                <i className name="App-fas fa-plus-square"></i>
            </button>
            <div className name="select">
                <select names="todos" className name="filter-todo">
                    <option value="all">All</option> 
                    <option value="done">Done</option>
                    <option value="not done">Not done</option>
                </select>
            </div>
        </form>

    );
}

export default Form;