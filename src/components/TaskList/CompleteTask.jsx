// import React from 'react'

// const CompleteTask = ({data}) => {
//   return (
//     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
//             <div className='flex justify-between items-center'>
//                 <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
//                 <h4 className='text-sm'>{data.taskDate}</h4>
//             </div>
//             <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
//             <p className='text-sm mt-2'>
//                 {data.taskDescription}
//             </p>
//             <div className='mt-6'>
//                 <button className='w-full bg-green-600 rounded font-medium py-1 px-2 text-xs'>Complete</button>
//             </div>
//         </div>
//   )
// }

// export default CompleteTask

import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-gradient-to-br from-blue-400 to-blue-500 text-white rounded-2xl shadow-lg">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="bg-red-600 px-3 py-1 rounded-full font-medium text-white">{data.category}</span>
        <span>{data.taskDate}</span>
      </div>
      <h2 className="mt-3 text-xl font-bold leading-tight">{data.taskTitle}</h2>
      <p className="text-sm mt-2 opacity-90">{data.taskDescription}</p>
      <div className="mt-6">
        <button className="w-full bg-green-600 hover:bg-green-700 transition-colors duration-200 rounded-full font-semibold py-2 px-3 text-sm shadow">
          ✅ Mark as Complete
        </button>
      </div>
    </div>
  )
}

export default CompleteTask
