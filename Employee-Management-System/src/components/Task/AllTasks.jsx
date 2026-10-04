import React from 'react'

const AllTasks = () => {
  return (
    <div id='taskList' className="w-full flex flex-col justify-between px-10 py-5 gap-5 bg-zinc-800 rounded-lg overflow-y-scroll h-[23vh]">
      <div className="flex justify-between gap-4 w-full px-5 py-2 bg-amber-500 rounded-lg">
        <h2 className='text-xl'>Shivam</h2>
        <p>Create a Website</p>
        <p>Status</p>
      </div>
      <div className="flex justify-between gap-4 w-full px-5 py-2 bg-green-500 rounded-lg">
        <h2 className='text-xl'>Shivam</h2>
        <p>Create a Website</p>
        <p>Status</p>
      </div>
      <div className="flex justify-between gap-4 w-full px-5 py-2 bg-red-500 rounded-lg">
        <h2 className='text-xl'>Shivam</h2>
        <p>Create a Website</p>
        <p>Status</p>
      </div>
      <div className="flex justify-between gap-4 w-full px-5 py-2 bg-blue-500 rounded-lg">
        <h2 className='text-xl'>Shivam</h2>
        <p>Create a Website</p>
        <p>Status</p>
      </div>
    

    </div>
  )
}

export default AllTasks
