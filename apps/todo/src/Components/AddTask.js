import { useState } from "react";

const AddTask = ({ onAdd, selectedTasks, setSelectedTasks }) => {
  const [task, setTask] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!task) {
      alert("Please add a task ToDo");
      return;
    }

    onAdd({ task, done });

    setTask("");
    setDone(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task ToDo"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Done</label>
        <input
          type="checkbox"
          checked={done}
          value={done}
          onChange={(e) => setDone(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="button button-block" />
    </form>
  );
};

export default AddTask;
