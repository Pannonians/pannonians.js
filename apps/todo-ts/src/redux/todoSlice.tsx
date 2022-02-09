import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "./types";

interface TodoSliceState {
  todos: Todo[];
}

const initialState: TodoSliceState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },

    toggleComplete: (
      state,
      action: PayloadAction<{ completed: Boolean; id: number }>
    ) => {
      state.todos.map((todos) => {
        if (todos.id === action.payload.id) {
          if (todos.completed === true) {
            todos.completed = false;
          } else {
            todos.completed = true;
          }
        }
        return todos;
      });
    },

    deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
