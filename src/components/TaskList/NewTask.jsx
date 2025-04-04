// import React from 'react'

// const NewTask = ({data}) => {
//     return (
//         <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
//             <div className='flex justify-between items-center'>
//                 <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
//                 <h4 className='text-sm'>{data.taskDate}</h4>
//             </div>
//             <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
//             <p className='text-sm mt-2'>
//                 {data.taskDescription}
//             </p>
//             <div className='mt-6'>
//                 <button className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
//             </div>
//         </div>
//     )
// }

// export default NewTask

import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[300px] p-5 bg-gradient-to-br from-green-300 to-green-400 rounded-2xl shadow-lg h-full">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="bg-red-600 text-white px-3 py-1 rounded-full font-medium">{data.category}</span>
        <span className="text-black">{data.taskDate}</span>
      </div>

      <h2 className="mt-3 text-xl font-bold text-black leading-tight">{data.taskTitle}</h2>

      <p className="text-sm mt-2 text-black/80">{data.taskDescription}</p>

      <div className="mt-6">
        <button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white rounded-full font-semibold py-2 px-3 text-sm shadow">
          ✅ Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask
