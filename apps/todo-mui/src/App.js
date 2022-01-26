import AddTask from "./components/AddTask";
import AllTodoItems from "./components/AllTodoItems";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className='container bg-white p-4 mt-5'>
			<h1>My Todo List</h1>
			<AddTask />
			<TodoList />
			<AllTodoItems />
		</div>
  );
}

export default App;
