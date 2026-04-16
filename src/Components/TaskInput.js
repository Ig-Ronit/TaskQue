import { useState, useEffect } from "react";

const TaskInput = ({ setTasks, editTask, setEditTask }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;

    if (editTask) {
      setTasks((prev) =>
        prev.map((task) => (task.id === editTask.id ? { ...task, text } : task))
      );
      setEditTask(null);
    } else {
      setTasks((prev) => [...prev, { id: Date.now(), text, completed: false }]);
    }

    setText("");
  };

  useEffect(() => {
    if (editTask) setText(editTask.text);
  }, [editTask]);

  return (
    <div className="flex gap-2">
      <input
        className="flex-1 px-4 py-2 rounded-xl bg-white/30 placeholder-white text-white outline-none focus:ring-2 focus:ring-white transition"
        type="text"
        placeholder="✨ Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleAdd}
        className="bg-white text-black px-4 py-2 rounded-xl hover:scale-105 transition font-semibold"
      >
        {editTask ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default TaskInput;
