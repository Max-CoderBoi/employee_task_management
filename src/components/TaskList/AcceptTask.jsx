// import React from 'react'

// const AcceptTask = ({data}) => {
//     console.log();
//   return (
//     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
//             <div className='flex justify-between items-center'>
//                 <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
//                 <h4 className='text-sm'>{data.taskDate}</h4>
//             </div>
//             <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
//             <p className='text-sm mt-2'>
//                 {data.taskDescription}
//             </p>
//             <div className='flex justify-between mt-6 '>
//                 <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
//                 <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
//             </div>
//         </div>
//   )
// }

// export default AcceptTask

import React from 'react'

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-gradient-to-br from-red-400 to-red-500 text-white rounded-2xl shadow-lg">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="bg-red-600 px-3 py-1 rounded-full font-medium text-white">{data.category}</span>
        <span>{data.taskDate}</span>
      </div>
      <h2 className="mt-3 text-xl font-bold leading-tight">{data.taskTitle}</h2>
      <p className="text-sm mt-2 opacity-90">{data.taskDescription}</p>
      <div className="flex justify-between mt-6 gap-2">
        <button className="bg-green-500 hover:bg-green-600 transition-colors duration-200 rounded-full font-semibold py-1.5 px-3 text-xs shadow">
          ✅ Completed
        </button>
        <button className="bg-red-600 hover:bg-red-700 transition-colors duration-200 rounded-full font-semibold py-1.5 px-3 text-xs shadow">
          ❌ Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
