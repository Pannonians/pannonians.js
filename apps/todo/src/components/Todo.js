import React from 'react';

const Todo = () => {
    return (
        <div className="todo">
            <li className="todo-item">
            "1_comments_variables_arithmetics"
            </li>
            <li className="todo-item">
            "2_data_types_and_operators"
            </li>
            <li className="todo-item">
            "3_string"
            </li>
            <li className="todo-item">
            "4_arrays"
            </li>
            <li className="todo-item">
            "5_functions"
            </li>
            <li className="todo-item">
            "6_booleans"
            </li>
            <li className="todo-item">
            "7_objects"
            </li>
            <li className="todo-item">
            "8_objests_and_arrays_practice"
            </li>
            <button className="complete-button">
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-button">
                <i className="fas fa-trash"></i>
            </button>
        </div>

    );
}

export default Todo;