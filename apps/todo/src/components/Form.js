import React from "react";


const Form = () =>{
    return(
        <form>
            <input type="text" className name="App-form"></input>
            <button className ="App-form-button" type="submit">
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