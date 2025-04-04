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
    <div className="flex-shrink-0 w-[300px] p-5 bg-gradient-to-br from-green-300 to-green-400 rounded-2xl shadow-lg h-full">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="bg-red-600 text-white px-3 py-1 rounded-full font-medium">
          {data.category || 'Unknown'}
        </span>
        <span className="text-black">{data.taskDate || 'No Date'}</span>
      </div>

      <h2 className="mt-3 text-xl font-bold text-black leading-tight line-clamp-2">
        {data.taskTitle || 'Untitled Task'}
      </h2>

      <p className="text-sm mt-2 text-black/80 line-clamp-3">
        {data.taskDescription || 'No description provided.'}
      </p>

      <div className="mt-6">
        <button
          onClick={handleAccept}
          disabled={isAccepted}
          className={`w-full ${
            isAccepted ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors duration-200 text-white rounded-full font-semibold py-2 px-3 text-sm shadow`}
        >
          {isAccepted ? '✅ Task Accepted' : '✅ Accept Task'}
        </button>
      </div>
    </div>
  );
};

export default NewTask;
