import AddTodoForm from "./features/AddTodoForm";
import AllTodoItems from "./features/AllTodoItems";
import TodoList from "./features/TodoList";

function App() {
  return (
    <div className='container bg-white p-4 mt-5'>
			<h1>Todo List MUI</h1>
			<AddTodoForm />
			<TodoList />
			<AllTodoItems />
		</div>
  );
}

export default App;
