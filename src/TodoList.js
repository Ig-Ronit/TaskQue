import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function addTodo() {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex] = task;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([...todos, task]);
    }
    setTask("");
  }

  function deleteTodo(indexToDelete) {
    setTodos(() => todos.filter((_, index) => index !== indexToDelete));
  }

  function editTodo(index) {
    setTask[todos[index]];
    setEditIndex(index);
  }

  return (
    <div className="container mt-4">
      {/* Input */}
      <div className="d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary ms-2" onClick={addTodo}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul className="list-group mt-3">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <input type="checkbox" className="form-check-input me-2" />

            <span className="flex-grow-1 text-center">{todo}</span>

            <div>
              <button
                onClick={() => deleteTodo(index)}
                className="btn btn-danger btn-sm me-2"
              >
                Delete
              </button>
              <button
                onClick={() => editTodo(index)}
                className="btn btn-warning btn-sm"
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
