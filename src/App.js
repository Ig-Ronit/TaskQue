import "./styles.css";

import Counter from "./Counter";
import ListManager from "./TodoList";

export default function App() {
  return (
    <div className="App">
      <h2>Todo List</h2>
      <ListManager />
    </div>
  );
}
