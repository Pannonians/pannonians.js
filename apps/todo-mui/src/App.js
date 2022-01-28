import AddTask from "./features/AddTask";
import AllTodoItems from "./features/AllTodoItems";
import TodoList from "./features/TodoList";

function App() {
  return (
    <div >
      <h1>Todo List MUI</h1>
      <AddTask />
      <TodoList />
      <AllTodoItems />
    </div>
  );
}

export default App;
