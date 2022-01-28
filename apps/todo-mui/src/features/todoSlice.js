import { createSlice } from "@reduxjs/toolkit";



const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, {payload}) => {
      const newTodo = {
        id: Date.now(),
        title: payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, {payload}) => {
        const index = state.findIndex((todo) => todo.id === payload.id);
        state[index].completed = payload.completed;
    },
    deleteTodo: (state, {payload}) => {
        return state.filter((todo) => todo.id !== payload.id);
    },
  },
});

export const { addTodo, toggleCompleted, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
