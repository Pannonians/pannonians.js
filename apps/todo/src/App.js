import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Heder";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import Task from "./Components/Task";
import SelectionForm from "./Components/SelectionForm";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("all");
  const [selectedTasks, setSelectedTasks] = useState([]);

  useEffect(() => {
    getLocalTasks();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTasks();
  }, [tasks, status]);

  const filterHandler = () => {
    switch (status) {
      case "done":
        setSelectedTasks(tasks.filter((task) => task.done === true));
        break;
      case "not-done":
        setSelectedTasks(tasks.filter((task) => task.done === false));
        break;
      default:
        setSelectedTasks(tasks);
        break;
    }
  };

  const saveLocalTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const getLocalTasks = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      let tasksLocal = JSON.parse(localStorage.getItem("tasks"));
      setTasks(tasksLocal);
    }
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="containerTodo">
      <Header />
      <AddTask
        selectedTasks={selectedTasks}
        setSelectedTasks={setSelectedTasks}
        onAdd={addTask}
      />
      <SelectionForm setStatus={setStatus} />
      {tasks.length > 0 ? (
        <Tasks
          selectedTasks={selectedTasks}
          setSelectedTasks={setSelectedTasks}
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleDone}
        />
      ) : (
        "No Tasks To Do"
      )}
    </div>
  );
};

export default App;
