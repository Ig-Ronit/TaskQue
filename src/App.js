import "./styles.css";
import { useState } from "react";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <h2>TaskQue</h2>
      <TaskInput setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
