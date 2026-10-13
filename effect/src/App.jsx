import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {

  const [product,setProduct] = useState([])

  const getProductsData = async() => {
    const res = await axios.get("https://fakestoreapi.com/products")

    setProduct(res.data)
  }


  useEffect(()=>{
    getProductsData()
  },[])


  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      {
        product.map(item => (
          <h2 key={item.title}>{item.title}</h2>
        ))
      }
    </div>
  )
}

export default App
