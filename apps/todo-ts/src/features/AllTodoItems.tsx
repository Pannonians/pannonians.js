import React from "react";
import { useSelector } from "react-redux";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Todo } from "../redux/types"
import { RootState } from "../redux/store"

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AllTodoItems = (): JSX.Element => {
  const completedTodos = useSelector((state: RootState) =>
    state.todos.todos.filter((todo: Todo) => todo.completed === true)
  ).length;

  const pendingTodos = useSelector((state: RootState) =>
    state.todos.todos.filter((todo: Todo) => todo.completed === false)
  ).length;

  return (
    <Grid container spacing={2} columns={16}
    style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
      <Grid item xs={8}>
          <Item>Completed Todos: {completedTodos}</Item></Grid>
      <Grid item xs={8}><Item>Pending Todos: {pendingTodos}</Item></Grid>
    </Grid>
  );
};

export default AllTodoItems;

