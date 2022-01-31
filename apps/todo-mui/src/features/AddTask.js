import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const AddTask = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({
		title: value,
	}))
	setValue("");
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Todo Item</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <Button color="secondary">
        Submit
	  </Button>
    </form>
  );
};

export default AddTask;
