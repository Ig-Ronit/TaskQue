const TaskItem = ({ task, setTasks, setEditTask }) => {
  const deleteTask = () => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };
  const handleEdit = () => {
    setEditTask(task);
  };
  const handleToggle = () => {
    setTasks(
      (prev) =>
        prev.map((item) =>
          item.id === task.id ? { ...item, completed: !item.completed } : item
        ),
      console.log(task)
    );
  };

  return (
    <div className="w-full flex items-center gap-3">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition"></div>
        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
      </label>
      <span className={`${task.completed ? "line-through text-gray-400" : ""}`}>
        {task.text}
      </span>
      <button
        className="bg-green-400 px-3 py-1 rounded-lg"
        onClick={handleEdit}
      >
        Edit
      </button>
      <button className="bg-red-500 px-3 py-1 rounded-lg" onClick={deleteTask}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
