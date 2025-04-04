// import React, { useContext } from 'react'
// import { AuthContext } from '../../context/AuthProvider'

// const AllTask = () => {

//    const [userData,setUserData] =  useContext(AuthContext)

   
//   return (
//     <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
//         <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
//             <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
//             <h3 className='text-lg font-medium w-1/5'>New Task</h3>
//             <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
//             <h5 className='text-lg font-medium w-1/5'>Completed</h5>
//             <h5 className='text-lg font-medium w-1/5'>Failed</h5>
//         </div>
//         <div className=''>
//         {userData.map(function(elem,idx){
//             return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
//             <h2 className='text-lg font-medium  w-1/5'>{elem.firstName}</h2>
//             <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
//             <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
//             <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCounts.completed}</h5>
//             <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
//         </div>
//         })}
//         </div>
        
        
//     </div>
//   )
// }

// export default AllTask


import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData] = useContext(AuthContext)

  return (
    <div className="bg-[#1c1c1c] p-6 rounded-xl mt-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-600 pb-2">Task Summary Overview</h2>

      {/* Header Row */}
      <div className="grid grid-cols-5 bg-emerald-700 text-white font-semibold text-sm py-3 px-4 rounded-t-lg">
        <div className="text-center">Employee Name</div>
        <div className="text-center">New Task</div>
        <div className="text-center">Active</div>
        <div className="text-center">Completed</div>
        <div className="text-center">Failed</div>
      </div>

      {/* Task Rows */}
      <div className="divide-y divide-gray-700 bg-white/5 backdrop-blur-md rounded-b-lg overflow-hidden">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="grid grid-cols-5 text-sm text-white text-center py-3 hover:bg-white/10 transition-all duration-200"
          >
            <div className="font-medium text-white">{elem.firstName}</div>
            <div className="text-blue-400">{elem.taskCounts.newTask}</div>
            <div className="text-yellow-400">{elem.taskCounts.active}</div>
            <div className="text-green-400">{elem.taskCounts.completed}</div>
            <div className="text-red-500">{elem.taskCounts.failed}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask
