import { useState, useEffect } from "react";

export default function UseTasks() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });
  const [filter, setFilter] = useState("all");
  const [editTask, setEditTask] = useState(null);
  const handleClearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };
  const handleDeleteAll = () => {
    setTasks([]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter((tasks) => {
    if (filter === "active") return !tasks.completed;
    if (filter === "completed") return tasks.completed;
    return true;
  });

  return {
    tasks,
    setTasks,
    filter,
    setFilter,
    editTask,
    setEditTask,
    filteredTasks,
    handleClearCompleted,
    handleDeleteAll,
  };
}
