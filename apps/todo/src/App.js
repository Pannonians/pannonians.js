import "./App.css";

function App() {
  const sayHello = () => {
    console.log("Hello");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pannonians.js hello world!</h1>
        <button onClick = {sayHello}>Hello</button>
      </header>
    </div>
  );
}

export default App;
