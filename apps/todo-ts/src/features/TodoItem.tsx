import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import { Todo } from "../redux/types";

const TodoItem = ({ id, title, completed }: Todo) => {
  const dispatch = useDispatch();
  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };
  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };
  return (
    <li style={{ listStyleType: "none" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <span>
          <Divider sx={{ width: 500 }} variant="middle" />
          <Checkbox
            sx={{
              color: red[800],
              "&.Mui-checked": {
                color: green[600],
              },
            }}
            className="mr-3"
            checked={completed}
            onChange={handleCompleteClick}
          ></Checkbox>
          {title}
        </span>
        <Button
          style={{ color: "red" }}
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          className="btn btn-danger"
          onClick={handleDeleteClick}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

export default TodoItem;
