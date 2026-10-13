import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

const Navbar = () => {
    const {setToggle, cart} = useContext(ProductContext)
  return (
    <div className='bg-blue-900 px-10 py-4 flex justify-between '>
      <h2>Logo</h2>
      <div className='flex gap-5'>
        <h2>Home</h2>
        <h2>About</h2>
      </div>
      <h2 className='cursor-pointer' onClick={()=> setToggle(prev => !prev) }>Cart <span className='text-sm bg-red-600 rounded-full text-center px-1 py inline '>{cart.length}</span> </h2>
    </div>
  )
}

export default Navbar
