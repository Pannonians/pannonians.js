import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "./todoSlice";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Checkbox } from "@mui/material";
import { red } from "@mui/material/colors";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "none",
      }}
    >
      <Checkbox
        defaultChecked
        color="success"
        checked={completed}
        onChange={handleComplete}
      />
      {title}

      <IconButton
        aria-label="delete"
        sx={{
          color: red[800],
        }}
        onClick={handleDelete}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default TodoItem;
