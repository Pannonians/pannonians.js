import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, styled } from "@mui/material";
import { red } from "@mui/material/colors";
import { selectTodos } from "../store"


const AllTodoItems = () => {
  const allTodos = useSelector(selectTodos);
  const todosNotCompleted = allTodos.filter((todo) => todo.completed === false);
  const completedTodos = allTodos.filter((todo) => todo.completed === true);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Box sx={{ flexGrow: 1, marginLeft: "45px" }}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Item>Completed Todos: {completedTodos.length}</Item>
          </Grid>
          <Grid item xs={2}>
            <Item
              sx={{
                color: red[800],
              }}
            >
              Pending Todos: {todosNotCompleted.length}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AllTodoItems;

