import { createSlice } from "@reduxjs/toolkit";
import uniqueId from 'lodash'

const initialState = {
  todos: [],
  id: 1,
  title: "todo",
  completed: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
      addTodo: (state, action) => {
          const newTodo = {
              id: action.payload.randomBytes(16).toString("hex"),
              title: action.payload.title,
              completed: false
          };
          state.push(newTodo);
      }
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;