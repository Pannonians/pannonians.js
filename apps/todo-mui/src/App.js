import AddTask from "./features/AddTask";
import AllTodoItems from "./features/AllTodoItems";
import TodoList from "./features/TodoList";

function App() {
  return (
    <div style={{ marginTop: "10px", marginLeft: "20px" }}>
      <h1
        style={{
          marginLeft: "35px",
          textAlign: "center",
          maxWidth: "580px",
          color: "#6588fc",
        }}
      >
        Todo List MUI
      </h1>
      <AddTask />
      <TodoList />
      <AllTodoItems />
    </div>
  );
}

export default App;
