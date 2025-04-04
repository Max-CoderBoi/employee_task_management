


// import React, { useContext } from 'react'
// import { AuthContext } from '../../context/AuthProvider'

// const AllTask = () => {
//   const [userData] = useContext(AuthContext)

//   return (
//     <div className="bg-[#1c1c1c] p-6 rounded-xl mt-6 shadow-lg">
//       <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-600 pb-2">Task Summary Overview</h2>

//       {/* Header Row */}
//       <div className="grid grid-cols-5 bg-emerald-700 text-white font-semibold text-sm py-3 px-4 rounded-t-lg">
//         <div className="text-center">Employee Name</div>
//         <div className="text-center">New Task</div>
//         <div className="text-center">Active</div>
//         <div className="text-center">Completed</div>
//         <div className="text-center">Failed</div>
//       </div>

//       {/* Task Rows */}
//       <div className="divide-y divide-gray-700 bg-white/5 backdrop-blur-md rounded-b-lg overflow-hidden">
//         {userData.map((elem, idx) => (
//           <div
//             key={idx}
//             className="grid grid-cols-5 text-sm text-white text-center py-3 hover:bg-white/10 transition-all duration-200"
//           >
//             <div className="font-medium text-white">{elem.firstName}</div>
//             <div className="text-blue-400">{elem.taskCounts.newTask}</div>
//             <div className="text-yellow-400">{elem.taskCounts.active}</div>
//             <div className="text-green-400">{elem.taskCounts.completed}</div>
//             <div className="text-red-500">{elem.taskCounts.failed}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default AllTask


import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData] = useContext(AuthContext)

  return (
    <div className="bg-[#121212] p-6 rounded-2xl mt-6 shadow-lg border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
        📊 Task Summary Overview
      </h2>

      {/* Header Row */}
      <div className="grid grid-cols-2 sm:grid-cols-5 text-white font-semibold text-xs sm:text-sm bg-emerald-600/80 py-3 px-4 rounded-t-lg">
        <div className="text-center">Employee Name</div>
        <div className="text-center">New</div>
        <div className="text-center hidden sm:block">Active</div>
        <div className="text-center hidden sm:block">Completed</div>
        <div className="text-center hidden sm:block">Failed</div>
      </div>

      {/* Task Data Rows */}
      <div className="divide-y divide-gray-700 bg-white/5 backdrop-blur-md rounded-b-lg overflow-hidden">
        {userData.map((user, idx) => (
          <div
            key={idx}
            className="grid grid-cols-2 sm:grid-cols-5 text-xs sm:text-sm text-white text-center py-3 px-4 hover:bg-white/10 transition-all duration-200"
          >
            <div className="font-medium">{user.firstName}</div>
            <div className="text-blue-400">{user.taskCounts.newTask}</div>
            <div className="text-yellow-400 hidden sm:block">{user.taskCounts.active}</div>
            <div className="text-green-400 hidden sm:block">{user.taskCounts.completed}</div>
            <div className="text-red-500 hidden sm:block">{user.taskCounts.failed}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask
