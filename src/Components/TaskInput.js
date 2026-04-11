import { useState, useEffect } from "react";

const TaskInput = ({ setTasks, editTask, setEditTask }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;

    if (editTask) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editTask.id ? { ...task, text: text } : task
        )
      );

      setEditTask(null);
      setText("");
    } else {
      setTasks((prev) => [...prev, { id: Date.now(), text, completed: false }]);
      setText("");
    }
  };

  useEffect(() => {
    if (editTask) {
      setText(editTask.text);
    }
  }, [editTask]);

  return (
    <div className="flex items-center gap-2">
      <input
        className="w-full px-3 py-2 border rounded-lg shadow-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        type="text"
        placeholder="Add a Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-blue-600 px-3 py-1 rounded-md" onClick={handleAdd}>
        {editTask ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default TaskInput;
