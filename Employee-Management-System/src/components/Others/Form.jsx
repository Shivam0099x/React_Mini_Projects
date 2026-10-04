import React from 'react'

const Form = () => {
  return (
    <div className="w-full flex justify-between px-10 py-5 gap-10 bg-zinc-800 rounded-lg">
      <div className="flex flex-col gap-4 w-[50%]">
        <div className="flex flex-col ">
          <label htmlFor="" className="text-xl">
            Task Title
          </label>
          <input
            type="text"
            placeholder="Make a UI Design"
            className="border-2 border-zinc-600 px-3 py-2 w-[40vw] rounded-lg"
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="" className="text-xl">
            Date
          </label>
          <input
            type="date"
            placeholder="Make a UI Design"
            className="border-2 border-zinc-600 px-3 py-2 w-[40vw] rounded-lg "
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="" className="text-xl">
            Assign To
          </label>
          <input
            type="text"
            placeholder="Employee Name"
            className="border-2 border-zinc-600 px-3 py-2 w-[40vw] rounded-lg"
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="" className="text-xl">
            Category
          </label>
          <input
            type="text"
            placeholder="Dev, Design etc..."
            className="border-2 border-zinc-600 px-3 py-2 w-[40vw] rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4  w-[50%] ">
        <div className="flex flex-col gap-2 justify-center ">
          <label htmlFor="" className="text-xl">
            Description
          </label>
          <textarea
            name=""
            id=""
            className="w-[70%] h-[30vh] border-2 border-zinc-600 px-3 py-2 rounded-lg"
          >
            Add Your Description...
          </textarea>
        </div>

        <button className="w-[50%] bg-green-600 py-2 rounded-lg ">
          Create Task
        </button>
      </div>
    </div>
  )
}

export default Form
