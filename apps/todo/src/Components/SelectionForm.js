import React from "react";

const SelectionForm = ({ setStatus }) => {
  const selectionHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="select">
      <select onChange={selectionHandler} name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="done">Completed</option>
        <option value="not-done">Uncompleted</option>
      </select>
    </div>
  );
};

export default SelectionForm;
