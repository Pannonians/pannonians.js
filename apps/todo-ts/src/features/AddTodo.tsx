import React, { useState, ChangeEvent} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";



const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();


  const submitTodo = (event:ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(
      addTodo({
        title: value,
        completed: false,
        id: Date.now(),
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

