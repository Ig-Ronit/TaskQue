const TaskItem = ({ task, setTasks }) => {
  const deleteTask = () => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  const editTask = () => {};
  return (
    <div>
      <span>{task.text}</span>
      <button onClick={editTask}>Edit</button>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TaskItem;
