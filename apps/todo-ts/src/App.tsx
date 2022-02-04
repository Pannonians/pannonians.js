import AddTodoForm from "./features/AddTodo"
import AllTodoItems from "./features/AllTodoItems";
import TodoList from "./features/TodoList";

function App() {
  return (
    <div className='container bg-white p-4 mt-5' style={{width: "60%", margin: "auto"}}>
			<h1>Todo App with React-Redux and MUI</h1>
			<AddTodoForm />
			<TodoList />
			<AllTodoItems />
		</div>
  );
}

export default App;


// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";

// type Todo = {
//   todo: string;
//   id: number;
//   completed: boolean;
// };

// type TodoList = {
//   title: string;
//   todos: Todo[];
// };

// const initialData: TodoList = {
//   title: "Pannonians todo list thing",
//   todos: [
//     {
//       completed: false,
//       id: 1,
//       todo: "kick the baby - DONT KICK THE BABY (Southpark reference S01E01)",
//     },
//     {
//       completed: false,
//       id: 2,
//       todo: "Conquer the world!",
//     },
//   ],
// };

// function App() {
//   const [todoList, setTodoList] = useState<TodoList>(initialData);
//   const [newTodo, setNewTodo] = useState<Todo | null>(null);

//   const addTodoItemToTodoList = (todo: Todo) => {
//     setTodoList({
//       title: todoList.title,
//       todos: todoList.todos.concat(todo),
//     });
//     setNewTodo(null);
//   };
//   const handleOnKeyPress = (event: { key: string }) => {
//     if (event.key === "Enter") {
//       if (!newTodo) {
//         alert('no todo?')
//         return
//       }
//       addTodoItemToTodoList(newTodo);
//     }
//   };
//   const markTodoAsCompleted = (todo: Todo) => {
//     const { todos } = todoList;
//     const newTodos = todos.map((t) =>
//       t.id === todo.id ? { ...t, completed: !t.completed } : t
//     );

//     setTodoList({
//       ...todoList,
//       todos: newTodos,
//     });
//   };
//   return (
//     <div className="App">
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <h1>{todoList.title}</h1>
//         <hr />
//         <ul style={{ maxWidth: 600 }}>
//           {todoList.todos.map((todo) => (
//             <li style={{ fontSize: 24, cursor: "pointer", marginTop: 20 }}>
//               <button onClick={() => markTodoAsCompleted(todo)}>
//                 {todo.todo} | {todo.completed ? "Completed" : "Not completed"}
//               </button>
//             </li>
//           ))}
//         </ul>
//         {!newTodo && (
//           <button
//             onClick={(event) =>
//               setNewTodo({
//                 id: todoList.todos.length + 1,
//                 completed: false,
//                 todo: "",
//               })
//             }
//           >
//             Add new todo
//           </button>
//         )}
//         {newTodo && (
//           <input
//             onKeyPress={handleOnKeyPress}
//             value={newTodo.todo}
//             onChange={(event) =>
//               setNewTodo({
//                 ...newTodo,
//                 todo: event.target.value,
//               })
//             }
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
