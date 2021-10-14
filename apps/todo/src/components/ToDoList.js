import React from "react";
//import components
import Todo from './Todo';

const ToDoList = () =>{
    return(
        <div className="todo-containar">
            <ul className="todo-list"></ul>
            <ToDoList/>
        </div>
    );
}
export default ToDoList;
