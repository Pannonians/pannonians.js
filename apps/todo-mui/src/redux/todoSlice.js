import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    id: Date.now(),
    completed: false
};

const todoSlice = createSlice ({
name: "todos",
initialState,
reducers: {
    addTodo: (state, { payload }) => {
        
            state.todos.push(payload);
        },
        
// toggleComplete: (state, action) => {
//     const index = state.findIndex (
//         (todo) => todo.id === action.payload.id);
//     },
},
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;


// const todoSlice = createSlice ({
//     name: "todos",
//     initialState: [
//         {id: 1, title: "todo1", completed: false},
//         {id: 2, title: "todo2", completed: false},
//         {id: 3, title: "todo3", completed: true}
//     ],
//     reducers: {
//         addTodo: (state, action) => {
//             const newTodo = {
//                 id: Date.now(),
//                 title: action.payload.title,
//                 completed: false
//             };
//             state.push(newTodo);
//     },
//     toggleComplete: (state, action) => {
//         const index = state.findIndex (
//             (todo) => todo.id === action.payload.id);
//         },
//     },
//     });