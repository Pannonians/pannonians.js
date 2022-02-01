import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import { Box, Grid } from "@mui/material";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <Box>
      <Grid marginTop="15px" marginLeft="15px">
        <Grid>
          {todos.map((todo) => (
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
                  disablePadding
                  id={todo.id}
                  title={todo.title}
                  completed={todo.completed}
                />
              </ListItem>
              <Divider variant="inset" component="li" disablePadding />
            </List>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default TodoList;
