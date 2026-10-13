import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import ProductCards from './components/ProductCards'
import Cart from './components/Cart'
import { ProductContext } from './context/ProductContext'

const App = () => {

  const {toggle} = useContext(ProductContext)
  
  return (
    <div className='bg-zinc-900 text-white w-full min-h-screen'>
      <Navbar/>
      {toggle ? <Cart/> : <ProductCards/> }
    </div>
  )
}

export default App
