import { createSlice, PayloadAction } from "@reduxjs/toolkit";





interface Todo {
    text: string;
    id: number;
    completed: boolean;
  }
  
  interface TodosSliceState {
    todos: Todo[];
  }
  
  const initialState: TodosSliceState = {
    todos: [],
  };
  
  export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
      addTodo: (state, action: PayloadAction<string>) => {
        state.todos = [
            ...state.todos,
            {
              id: state.todos.length +1,
              text: action.payload,
              completed: false,
            },
          ];
        },
        toggleComplete: (state, action: PayloadAction<number>) => {
            state.todos.map((todo  => {
              if (todo.id === action.payload) {
                if (todo.completed === true) {
                  todo.completed = false
                } else {
                  todo.completed = true
                }
              }
            }))
          },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(({ id }) => id !== action.payload);
          },
        },
      });

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;    

export default todoSlice.reducer;