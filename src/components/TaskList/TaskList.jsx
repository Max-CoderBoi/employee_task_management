import React, { useState, useEffect } from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
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
          id: task.id || `task-${index}`,
          status,
        };
      });

      setTasks(updatedTasks);
    }
  }, [data?.tasks]);

  const handleUpdateTask = (id, newStatus) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, status: newStatus || 'unknown' } : task
    );
    setTasks(updated);
    localStorage.setItem('tasks', JSON.stringify(updated));
  };

  const renderTaskCard = (task) => {
    if (!task?.id) return null;

    const commonProps = { key: task.id, data: task, onUpdateTask: handleUpdateTask };
    const baseStyle = "bg-gray-800 text-white rounded-xl shadow-md border border-gray-700 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]";
    const newTaskStyle = "shine-effect"; // Custom glow animation

    const cardClass =
      task.status === 'newTask'
        ? `${baseStyle} ${newTaskStyle}`
        : baseStyle;

    switch (task.status) {
      case 'newTask':
        return <div className={cardClass}><NewTask {...commonProps} /></div>;
      case 'active':
        return <div className={cardClass}><AcceptTask {...commonProps} /></div>;
      case 'completed':
        return <div className={cardClass}><CompleteTask {...commonProps} /></div>;
      case 'failed':
        return <div className={cardClass}><FailedTask {...commonProps} /></div>;
      default:
        return (
          <div key={task.id} className={`${cardClass} p-5 flex items-center justify-center text-sm`}>
            Unknown Task State
          </div>
        );
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 w-full mt-16 p-6 rounded-3xl shadow-inner">
      <div
        id="tasklist"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-h-[600px] overflow-y-auto p-2"
      >
        {tasks.length > 0
          ? tasks.map(renderTaskCard)
          : <p className="text-gray-400 col-span-full text-center">No tasks available</p>}
      </div>
    </div>
  );
};

export default TaskList;
