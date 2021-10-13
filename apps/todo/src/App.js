import "./App.css";
// importing components
import Form from "./components/Form";
import todo from "./components/To-DoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <Form/>
    </div>
  );
}

export default App;
