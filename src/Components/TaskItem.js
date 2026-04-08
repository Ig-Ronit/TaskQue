const TaskItem = ({ task, setTasks, setEditTask }) => {
  const deleteTask = () => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };
  const handleEdit = () => {
    setEditTask(task);
  };

  return (
    <div>
      <span>{task.text}</span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TaskItem;
