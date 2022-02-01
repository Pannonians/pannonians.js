import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, {payload}) => {
      state.push(payload);
      return state;
    },
    // toggleComplete: (state, {payload}) => {
    //   const index = state.findIndex((todo) => todo.id === payload.id);
    //   state[index].completed = payload.completed;
    // },
    toggleComplete: (state, { payload }) => {
      state.map(todo => {
        if (todo.id === payload.id) {
          if (todo.completed === true) {
            todo.completed = false
          } else {
            todo.completed = true
          }
        }
      })
    },
   
    
    deleteTodo: (state, {payload}) => {
      return state.filter((todo) => todo.id !== payload.id);
      
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

// const initialState = {
//     todos: [],
//     title: "title",
//     id: Date.now(),
//     completed: false
// };

// const todoSlice = createSlice ({
// name: "todos",
// initialState,
// reducers: {
//     addTodo: (state, {payload}) => {
//         state.todos.push(payload);
//         },

// },
// });


// const todoSlice = createSlice({
//     name: "todos",
//     initialState: [],
//     reducers: {
//       addTodo: (state, {payload}) => {
//         const newTodo = {
//           id: Date.now(),
//           title: payload.title,
//           completed: false,
//         };
//         state.push(newTodo);
//       },
//       toggleComplete: (state, {payload}) => {
//         const index = state.findIndex((todo) => todo.id === payload.id);
//         state[index].completed = payload.completed;
//       },
//       deleteTodo: (state, {payload}) => {
//         return state.filter((todo) => todo.id !== payload.id);
        
//       },
//     },
//   });