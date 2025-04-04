import React, { useState } from 'react';

const CompleteTask = ({ data, onUpdateTask }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    if (isCompleted) return; // Prevents duplicate execution

    if (typeof onUpdateTask !== 'function') {
      console.error('onUpdateTask is not a function!');
      return;
    }

    console.log(`Marking task as completed: ${data.id}`);
    onUpdateTask(data.id, 'completed');
    setIsCompleted(true);
  };

  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-gradient-to-br from-green-400 to-green-500 text-white rounded-2xl shadow-lg">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="bg-red-600 px-3 py-1 rounded-full font-medium">
          {data.category || 'Unknown'}
        </span>
        <span>{data.taskDate || 'No Date'}</span>
      </div>

      <h2 className="mt-3 text-xl font-bold leading-tight">
        {data.taskTitle || 'Untitled Task'}
      </h2>

      {/* ✅ Unrestricted full description */}
      <p className="mt-2 leading-relaxed">
        {data.taskDescription || 'No description provided.'}
      </p>

      <div className="mt-6">
        <button
          onClick={handleComplete}
          disabled={isCompleted}
          className={`w-full ${
            isCompleted ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
          } transition-colors duration-200 rounded-full font-semibold py-2 px-3 text-sm shadow`}
        >
          {isCompleted ? '✅ Completed' : '✅ Mark as Complete'}
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
