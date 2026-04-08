import "./styles.css";
import { useState } from "react";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  return (
    <div className="App">
      <h2>TaskQue</h2>
      <TaskInput
        setTasks={setTasks}
        editTask={editTask}
        setEditTask={setEditTask}
      />
      <TaskList tasks={tasks} setTasks={setTasks} setEditTask={setEditTask} />
    </div>
  );
}
