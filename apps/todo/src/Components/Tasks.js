import Task from "./Task";

const Tasks = ({
  tasks,
  onDelete,
  onToggle,
  selectedTasks,
  setSelectedTasks,
}) => {
  return (
    <>
      {selectedTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
