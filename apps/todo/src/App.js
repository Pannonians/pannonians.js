import { useState } from "react";
import "./App.css";
import Header from "./Components/Heder";
import Tasks from "./Components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      lesson: "Learn about comments, variables and arithmetics",
      done: true,
    },
    {
      id: 2,
      lesson: "Learn about data types and operators",
      done: true,
    },
    {
      id: 3,
      lesson: "Learn about strings",
      done: true,
    },
    {
      id: 4,
      lesson: "Learn about arrays",
      done: true,
    },
    {
      id: 5,
      lesson: "Learn about functions",
      done: true,
    },
    {
      id: 6,
      lesson: "Learn about booleans",
      done: true,
    },
    {
      id: 7,
      lesson: "Learn about objects",
      done: true,
    },
    {
      id: 8,
      lesson: "Learn about objects and arrays practise",
      done: true,
    },
    {
      id: 9,
      lesson: "Learn to code in JS",
      done: false,
    },
    {
      id: 10,
      lesson: "Learn to use React",
      done: false,
    },
  ]);

  const deleteTask = (id) => {
    console.log("obrisano", id);
  };
  return (
    <div className="containerTodo">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;
