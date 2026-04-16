const TaskItem = ({ task, setTasks, setEditTask }) => {
  const deleteTask = () => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  const handleEdit = () => setEditTask(task);

  const handleToggle = () => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === task.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="flex items-center justify-between bg-white/20 backdrop-blur-md p-3 rounded-xl hover:scale-[1.02] transition">
      {/* Toggle */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        className="w-5 h-5 accent-green-400 cursor-pointer"
      />

      {/* Text */}
      <span
        className={`flex-1 ml-3 ${
          task.completed ? "line-through text-white/50" : ""
        }`}
      >
        {task.text}
      </span>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="px-3 py-1 bg-green-400 text-black rounded-lg hover:scale-105 transition"
        >
          Edit
        </button>

        <button
          onClick={deleteTask}
          className="px-3 py-1 bg-red-500 rounded-lg hover:scale-105 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
