import React from 'react'

const TaskNumber = () => {
  return (
    <div className='w-full p-10  flex items-center gap-10 justify-between flex-wrap'>
        <div className='w-72 bg-red-700 p-5 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-semibold'>New Task</h2>
        </div>
        <div className='w-72 bg-blue-700 p-5 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-semibold'>New Task</h2>
        </div>
        <div className='w-72 bg-orange-700 p-5 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-semibold'>New Task</h2>
        </div>
        <div className='w-72 bg-green-700 p-5 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-semibold'>New Task</h2>
        </div>
      
    </div>
  )
}

export default TaskNumber
