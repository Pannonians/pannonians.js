import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from '@mui/material/Divider';
import { Box, Grid } from "@mui/material";
import { Todo } from "./todoSlice";
import { selectTodos } from "../store";

const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <Box>
      <Grid marginTop="15px" marginLeft="15px">
        <Grid>
          {todos.map((todo: Todo) => (
            <List
              sx={{
                width: "100%",
                maxWidth: 600,
                bgcolor: "background.paper",
              }}
            >
              <ListItem
                disablePadding
                sx={{
                  width: "100%",
                  maxWidth: 600,
                }}
              >
                <TodoItem
                  id={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                />
              </ListItem>
              <Divider />
            </List>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default TodoList;