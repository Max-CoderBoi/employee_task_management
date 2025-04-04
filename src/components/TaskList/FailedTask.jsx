import React, { useState } from 'react';

const FailedTask = ({ data, onUpdateTask }) => {
  const [isFailed, setIsFailed] = useState(false);

  const handleFail = () => {
    onUpdateTask(data.id, 'failed');
    setIsFailed(true);
  };

  return (
    <div
      className={`flex-shrink-0 h-full w-[300px] p-5 rounded-2xl shadow-lg text-white transition-all duration-300 ${
        isFailed
          ? 'bg-gradient-to-br from-red-600 to-red-800'
          : 'bg-gradient-to-br from-yellow-300 to-yellow-400 text-black'
      }`}
    >
      <div className="flex justify-between items-center text-sm mb-2">
        <span
          className={`px-3 py-1 rounded-full font-medium ${
            isFailed ? 'bg-white text-red-600' : 'bg-red-600 text-white'
          }`}
        >
          {data.category}
        </span>
        <span>{data.taskDate}</span>
      </div>

      <h2 className={`mt-3 text-xl font-bold leading-tight ${isFailed ? 'text-white' : ''}`}>
        {data.taskTitle}
      </h2>

      {/* ✅ Unrestricted full description */}
      <p className={`mt-2 leading-relaxed ${isFailed ? 'text-white/90' : ''}`}>
        {data.taskDescription}
      </p>

      <div className="mt-6">
        <button
          onClick={handleFail}
          disabled={isFailed}
          className={`w-full ${
            isFailed
              ? 'bg-gray-400 cursor-not-allowed text-white'
              : 'bg-red-600 hover:bg-red-700 text-white'
          } transition-colors duration-200 rounded-full font-semibold py-2 px-3 text-sm shadow`}
        >
          {isFailed ? '❌ Marked as Failed' : '❌ Mark as Failed'}
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
