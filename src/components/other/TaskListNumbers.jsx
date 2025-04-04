import React from 'react'

const TaskListNumbers = ({ data }) => {
  const taskTypes = [
    { label: 'New Task', count: data.taskCounts.newTask, color: 'bg-blue-500' },
    { label: 'Completed Task', count: data.taskCounts.completed, color: 'bg-green-500' },
    { label: 'Accepted Task', count: data.taskCounts.active, color: 'bg-yellow-400', text: 'text-black' },
    { label: 'Failed Task', count: data.taskCounts.failed, color: 'bg-red-500' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
      {taskTypes.map((task, idx) => (
        <div
          key={idx}
          className={`rounded-xl ${task.color} ${task.text || 'text-white'} py-6 px-6 shadow-lg hover:scale-[1.02] transition-transform duration-200 ease-in-out`}
        >
          <h2 className="text-4xl font-extrabold">{task.count}</h2>
          <h3 className="text-lg font-medium mt-1">{task.label}</h3>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumbers
