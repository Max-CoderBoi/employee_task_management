import React, { useState } from 'react';

const AcceptTask = ({ data, onUpdateTask }) => {
  const [status, setStatus] = useState(null);

  const handleComplete = () => {
    if (status) return;
    onUpdateTask(data.id, 'completed');
    setStatus('completed');
  };

  const handleFail = () => {
    if (status) return;
    onUpdateTask(data.id, 'failed');
    setStatus('failed');
  };

  const statusColors = {
    completed: 'bg-gradient-to-br from-green-400 to-green-500',
    failed: 'bg-gradient-to-br from-red-500 to-red-600',
    default: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
  };

  return (
    <div
      className={`flex-shrink-0 w-[300px] p-5 text-white rounded-2xl shadow-lg transition-all duration-300 ${
        statusColors[status] || statusColors.default
      }`}
    >
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="bg-red-600 px-3 py-1 rounded-full font-medium">
          {data.category || 'Uncategorized'}
        </span>
        <span>{data.taskDate || 'No Date'}</span>
      </div>

      <h2 className="mt-3 text-xl font-bold leading-tight">
        {data.taskTitle || 'Untitled Task'}
      </h2>

      {/* Description now unrestricted */}
      <p className="mt-2 leading-relaxed">
        {data.taskDescription || 'No description provided.'}
      </p>

      <div className="flex justify-between mt-6 gap-2">
        <button
          aria-label="Mark as completed"
          disabled={!!status}
          onClick={handleComplete}
          className={`w-1/2 ${
            status === 'completed' ? 'bg-green-700' : 'bg-green-600'
          } hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 rounded-full font-semibold py-1.5 px-3 text-xs shadow`}
        >
          ✅ {status === 'completed' ? 'Marked Completed' : 'Completed'}
        </button>

        <button
          aria-label="Mark as failed"
          disabled={!!status}
          onClick={handleFail}
          className={`w-1/2 ${
            status === 'failed' ? 'bg-red-800' : 'bg-red-700'
          } hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 rounded-full font-semibold py-1.5 px-3 text-xs shadow`}
        >
          ❌ {status === 'failed' ? 'Marked Failed' : 'Failed'}
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
