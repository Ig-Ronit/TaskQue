import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setTasks, setEditTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          setTasks={setTasks}
          setEditTask={setEditTask}
        />
      ))}
    </div>
  );
};
export default TaskList;
