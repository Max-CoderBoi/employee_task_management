import React from 'react';
import { PlusCircle, CheckCircle, ThumbsUp, XCircle } from 'lucide-react';

const TaskListNumbers = ({ data }) => {
  const taskTypes = [
    {
      label: 'New Task',
      count: data.taskCounts.newTask,
      color: 'bg-blue-500',
      icon: <PlusCircle className="w-6 h-6" />,
    },
    {
      label: 'Completed Task',
      count: data.taskCounts.completed,
      color: 'bg-green-500',
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      label: 'Accepted Task',
      count: data.taskCounts.active,
      color: 'bg-yellow-400',
      text: 'text-black',
      icon: <ThumbsUp className="w-6 h-6" />,
    },
    {
      label: 'Failed Task',
      count: data.taskCounts.failed,
      color: 'bg-red-500',
      icon: <XCircle className="w-6 h-6" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
      {taskTypes.map((task) => (
        <div
          key={task.label}
          aria-label={task.label}
          className={`rounded-xl ${task.color} ${task.text || 'text-white'} py-6 px-6 shadow-lg hover:scale-[1.03] transition-all duration-200 ease-in-out`}
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-4xl font-extrabold">{task.count}</h2>
            {task.icon}
          </div>
          <h3 className="text-lg font-medium">{task.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumbers;



