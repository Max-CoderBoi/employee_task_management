import React, { useState } from 'react';

const NewTask = ({ data, onUpdateTask }) => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    if (typeof onUpdateTask !== 'function') {
      console.error('onUpdateTask is not a function!');
      return;
    }

    console.log(`Accepting task: ${data.id}`);
    onUpdateTask(data.id, 'active');
    setIsAccepted(true);
  };

  return (
    <div className="flex-shrink-0 w-[300px] p-5 bg-blue-500 rounded-2xl shadow-lg text-white h-full">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="bg-white text-blue-700 px-3 py-1 rounded-full font-medium">
          {data.category || 'Unknown'}
        </span>
        <span>{data.taskDate || 'No Date'}</span>
      </div>

      <h2 className="mt-3 text-xl font-bold leading-tight">
        {data.taskTitle || 'Untitled Task'}
      </h2>

      {/* ✅ No line clamping or opacity, shows full description */}
      <p className="text-base mt-2 leading-relaxed">
        {data.taskDescription || 'No description provided.'}
      </p>

      <div className="mt-6">
        <button
          onClick={handleAccept}
          disabled={isAccepted}
          className={`w-full ${
            isAccepted
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-white text-blue-700 hover:bg-blue-100'
          } transition-colors duration-200 rounded-full font-semibold py-2 px-3 text-sm shadow`}
        >
          {isAccepted ? '✅ Task Accepted' : '✅ Accept Task'}
        </button>
      </div>
    </div>
  );
};

export default NewTask;
