import "./styles.css";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import UseTasks from "./Components/UseTasks";

export default function App() {
  const {
    setTasks,
    filter,
    setFilter,
    editTask,
    setEditTask,
    filteredTasks,
    handleClearCompleted,
    handleDeleteAll,
  } = UseTasks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-6 w-full max-w-md text-white">
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">
          🚀 TaskQue
        </h2>

        <TaskInput
          setTasks={setTasks}
          editTask={editTask}
          setEditTask={setEditTask}
        />

        {/* Filters */}
        <div className="flex justify-center gap-3 mt-6">
          {["all", "active", "completed"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1 rounded-full capitalize transition-all duration-300 
              ${
                filter === type
                  ? "bg-white text-black shadow-md scale-105"
                  : "bg-white/20 hover:bg-white/30"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-between mt-6 gap-3">
          <button
            onClick={handleClearCompleted}
            className="flex-1 bg-yellow-400 text-black py-2 rounded-lg hover:scale-105 transition"
          >
            Clear Completed
          </button>

          <button
            onClick={handleDeleteAll}
            className="flex-1 bg-red-500 py-2 rounded-lg hover:scale-105 transition"
          >
            Delete All
          </button>
        </div>

        {/* Task List */}
        <div className="mt-6">
          <TaskList
            tasks={filteredTasks}
            setTasks={setTasks}
            setEditTask={setEditTask}
          />
        </div>
      </div>
    </div>
  );
}
