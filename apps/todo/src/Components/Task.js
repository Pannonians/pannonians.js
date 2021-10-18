import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.done ? "done" : "notDone"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h4>
        {task.lesson}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h4>
    </div>
  );
};

export default Task;
