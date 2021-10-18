import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [lesson, setLesson] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!lesson) {
      alert("Please add a task ToDo");
      return;
    }

    onAdd({ lesson, done });

    setLesson("");
    setDone(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task ToDo"
          value={lesson}
          onChange={(e) => setLesson(e.target.value)}
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
