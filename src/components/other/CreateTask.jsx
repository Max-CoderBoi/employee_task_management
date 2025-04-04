// import React, { useContext, useState } from 'react'
// import { AuthContext } from '../../context/AuthProvider'

// const CreateTask = () => {
//     const [userData, setUserData] = useContext(AuthContext)

//     const [taskTitle, setTaskTitle] = useState('')
//     const [taskDescription, setTaskDescription] = useState('')
//     const [taskDate, setTaskDate] = useState('')
//     const [asignTo, setAsignTo] = useState('')
//     const [category, setCategory] = useState('')

//     const submitHandler = (e) => {
//         e.preventDefault()

//         const task = {
//             taskTitle,
//             taskDescription,
//             taskDate,
//             category,
//             active: false,
//             newTask: true,
//             failed: false,
//             completed: false,
//         }

//         const updatedData = userData.map((employee) => {
//             if (employee.firstName === asignTo) {
//                 return {
//                     ...employee,
//                     tasks: [...employee.tasks, task],
//                     taskCounts: {
//                         ...employee.taskCounts,
//                         newTask: employee.taskCounts.newTask + 1
//                     }
//                 }
//             }
//             return employee
//         })

//         setUserData(updatedData)

//         // Clear form
//         setTaskTitle('')
//         setCategory('')
//         setAsignTo('')
//         setTaskDate('')
//         setTaskDescription('')
//     }

//     return (
//         <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
//             <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
//                 <div className='w-1/2'>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
//                         <input
//                             value={taskTitle}
//                             onChange={(e) => setTaskTitle(e.target.value)}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
//                             type="text"
//                             placeholder='Make a UI design'
//                         />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
//                         <input
//                             value={taskDate}
//                             onChange={(e) => setTaskDate(e.target.value)}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
//                             type="date"
//                         />
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
//                         <select
//                             value={asignTo}
//                             onChange={(e) => setAsignTo(e.target.value)}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
//                         >
//                             <option value="">Select Employee</option>
//                             {userData.map((employee) => (
//                                 <option key={employee.email} value={employee.firstName}>
//                                     {employee.firstName}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
//                         <input
//                             value={category}
//                             onChange={(e) => setCategory(e.target.value)}
//                             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
//                             type="text"
//                             placeholder='design, dev, etc'
//                         />
//                     </div>
//                 </div>

//                 <div className='w-2/5 flex flex-col items-start'>
//                     <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
//                     <textarea
//                         value={taskDescription}
//                         onChange={(e) => setTaskDescription(e.target.value)}
//                         className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
//                     />
//                     <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
//                         Create Task
//                     </button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default CreateTask


import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    }

    const updatedData = userData.map((employee) => {
      if (employee.firstName === asignTo) {
        return {
          ...employee,
          tasks: [...employee.tasks, task],
          taskCounts: {
            ...employee.taskCounts,
            newTask: employee.taskCounts.newTask + 1,
          },
        }
      }
      return employee
    })

    setUserData(updatedData)

    setTaskTitle('')
    setCategory('')
    setAsignTo('')
    setTaskDate('')
    setTaskDescription('')
  }

  return (
    <div className="bg-[#1c1c1c] p-8 mt-6 rounded-xl shadow-lg max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-600 pb-3">Create New Task</h2>
      <form onSubmit={submitHandler} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="flex flex-col space-y-4">
          <div>
            <label className="text-gray-300 text-sm mb-1 block">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
              className="bg-gray-800 border border-gray-500 rounded-md text-sm px-4 py-2 w-full text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm mb-1 block">Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="bg-gray-800 border border-gray-500 rounded-md text-sm px-4 py-2 w-full text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm mb-1 block">Assign to</label>
            <select
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="bg-gray-800 border border-gray-500 rounded-md text-sm px-4 py-2 w-full text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select Employee</option>
              {userData.map((employee) => (
                <option key={employee.email} value={employee.firstName}>
                  {employee.firstName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-gray-300 text-sm mb-1 block">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="design, dev, etc"
              className="bg-gray-800 border border-gray-500 rounded-md text-sm px-4 py-2 w-full text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col">
          <label className="text-gray-300 text-sm mb-1">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Write task details..."
            className="bg-gray-800 border border-gray-500 rounded-md text-sm px-4 py-3 w-full h-full text-white placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            className="mt-6 bg-emerald-500 hover:bg-emerald-600 transition-colors text-white text-sm font-semibold py-3 px-6 rounded-md w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
