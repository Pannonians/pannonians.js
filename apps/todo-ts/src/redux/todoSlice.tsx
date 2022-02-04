import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  completed: boolean;
  title: string;
}

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
    addTodo: (state, { payload }) => {
      state.todos = [
        ...state.todos,
        {
          id: state.todos.length,
          title: payload,
          completed: false,
        },
      ];
    },

    toggleComplete: (state, { payload }) => {
      state.todos.map((todos) => {
        if (todos.id === payload.id) {
          if (todos.completed === true) {
            todos.completed = false;
          } else {
            todos.completed = true;
          }
        }
      });
    },

    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter(({id}) => id !== payload.id);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

