import { useState } from "react";

const TaskInput = ({ setTasks }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;

    setTasks((prev) => [...prev, { id: Date.now(), text, completed: false }]);
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TaskInput;
