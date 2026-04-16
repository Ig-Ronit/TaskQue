import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setTasks, setEditTask }) => {
  return (
    <div className="space-y-3">
      {tasks.length === 0 ? (
        <p className="text-center text-white/70">No tasks yet 👀</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            setTasks={setTasks}
            setEditTask={setEditTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
