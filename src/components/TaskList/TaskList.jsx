import React, { useState, useEffect } from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  const [tasks, setTasks] = useState([]);

  // Load and prepare tasks
  useEffect(() => {
    console.log("📥 Data received in TaskList:", data);

    if (data?.tasks?.length) {
      const updatedTasks = data.tasks.map((task, index) => {
        const status =
          task.newTask ? 'newTask' :
          task.active ? 'active' :
          task.completed ? 'completed' :
          task.failed ? 'failed' :
          'unknown';

        return {
          ...task,
          id: task.id || `task-${index}`, // Assign a fallback id
          status,
        };
      });

      console.log("✅ Prepared tasks with ID and status:", updatedTasks);
      setTasks(updatedTasks);
    }
  }, [data?.tasks]);

  // Handle status update
  const handleUpdateTask = (id, newStatus) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, status: newStatus || 'unknown' } : task
    );
    setTasks(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));
  };

  // Render task card
  const renderTaskCard = (task) => {
    if (!task?.id) return null;

    const commonProps = { key: task.id, data: task, onUpdateTask: handleUpdateTask };

    switch (task.status) {
      case 'newTask':
        return <NewTask {...commonProps} />;
      case 'active':
        return <AcceptTask {...commonProps} />;
      case 'completed':
        return <CompleteTask {...commonProps} />;
      case 'failed':
        return <FailedTask {...commonProps} />;
      default:
        return (
          <div
            key={task.id}
            className="w-[300px] h-full p-5 rounded-xl bg-gray-300 text-center flex items-center justify-center text-sm text-black"
          >
            Unknown Task State
          </div>
        );
    }
  };

  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16"
    >
      {tasks.length > 0
        ? tasks.map(renderTaskCard)
        : <p className="text-gray-500 px-4">No tasks available</p>}
    </div>
  );
};

export default TaskList;
