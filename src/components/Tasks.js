import Task from "/src/components/Task.js";

const Tasks = ({ tasks, onDelete, onDoubleClick }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onDoubleClick={onDoubleClick}
        />
      ))}
    </>
  );
};

export default Tasks;
