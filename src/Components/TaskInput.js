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
    <div>
      <input
        type="text"
        placeholder="Add a Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>{editTask ? "Update" : "Add"}</button>
    </div>
  );
};

export default TaskInput;
