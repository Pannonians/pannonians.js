import { createSlice, PayloadAction } from "@reduxjs/toolkit";





export interface Todo {
    text: string;
    id: number;
    completed: boolean;
  }
  
  export interface TodosSliceState {
    todos: Todo[];
  }
  
  const initialState: TodosSliceState = {
    todos: [],
  };
  
  export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
      addTodo: (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload)
        },

        toggleComplete: (state, action: PayloadAction<{completed: boolean; id: number}>) => {
            state.todos.map((todo)  => {
              if (todo.id === action.payload.id) {
                if (todo.completed === true) {
                  todo.completed = false
                } else {
                  todo.completed = true
                }
              }
              return todo;
            })
          },
        removeTodo: (state, action: PayloadAction<{id: number}>) => {
            state.todos = state.todos.filter(({ id }) => id !== action.payload.id);
          },
        },
      });

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;    

export default todoSlice.reducer;