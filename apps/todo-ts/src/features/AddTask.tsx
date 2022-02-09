import React, { useState } from "react";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todoSlice";
import TextField from '@mui/material/TextField';
import { selectTodos } from "../store";



const AddTask = () => {
  const [value, setValue] = useState("");
  const todos = useSelector(selectTodos);

  const dispatch = useDispatch();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!value.length) {
      return alert("Please add task");
    }
    dispatch(addTodo({
		text: value,
    completed: false,
    id: todos.length +1
	}))
	setValue("");
  
  
  };

  return (
    <form onSubmit={onSubmit}  style={{marginTop: "20px", marginLeft: "35px", fontSize:"22px", maxWidth: '600px'}}>
      <label style={{fontSize: "18px", textDecoration: "bold", paddingTop: "10px"}}>
		  New Task
	  </label>
      <TextField id="outlined-basic" label="Add Task..." variant="outlined" 
        type="text"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
		style={{
			borderRadius: "5px",
			borderColor: "black",
			color: "black",
			fontSize: "20px",
			marginLeft: "10px",
			width: "380px"
		}}
      />

    <Button variant="outlined" 
	    type="submit"
	    style={{
        borderRadius: "5px",
		borderColor: "black",
        color: "black",
        padding: "5px 5px",
        fontSize: "14px",
		marginLeft: "10px",
		backgroundColor: "#6588fc"
    }}>
		Add Task
	</Button>
    </form>
  );
};

export default AddTask;