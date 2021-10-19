import React from "react";

const SelectionForm = () => {
  return (
    <div className="select">
      <select name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="Completed">Completed</option>
        <option value="uncopleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default SelectionForm;
