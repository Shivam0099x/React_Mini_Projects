import React from 'react'

const Header = () => {
  return (
    <div className='w-full  px-10 pt-10 pb-2 flex justify-between items-center border-b border-zinc-600 shadow shadow-zinc-600 rounded-xl'>
        <h2>Hello, <br /> <span className='text-2xl font-semibold'>Shivam👋 </span></h2>
        <button className='px-3 py-2 bg-red-800 rounded-lg'>Logout</button>
      
    </div>
  )
}

export default Header
