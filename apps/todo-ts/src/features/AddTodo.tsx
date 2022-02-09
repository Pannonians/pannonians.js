import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { selectTodos } from "../redux/store";




const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  


  const submitTodo: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!value.length) {
      return;
    }
    dispatch(
      addTodo({
        title: value,
        completed: false,
        id: todos.length +1
      })
    );
	setValue("");
  };

  return (
    <form onSubmit={submitTodo} style={{width:"100%", display: "flex", flexDirection:"row", justifyContent:"space-between"}}>
      <TextField style={{width:"600px"}}
        type="text"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></TextField>

      <Button style={{width:"200px", border:"solid", borderWidth:"2px"}} size="medium" type="submit">Submit</Button>
    </form>
  );
};

export default AddTodoForm;

