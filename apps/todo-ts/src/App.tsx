import AddTodoForm from "./features/AddTodo";
import AllTodoItems from "./features/AllTodoItems";
import TodoList from "./features/TodoList";

function App() {
  return (
    <div
      className="container bg-white p-4 mt-5"
      style={{ width: "60%", margin: "auto" }}
    >
      <h1>Todo App with React-Redux and MUI</h1>
      <AddTodoForm />
      <TodoList />
      <AllTodoItems />
    </div>
  );
}

export default App;
