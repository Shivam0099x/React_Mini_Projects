import React, { useEffect, useState } from 'react'
import { api } from '../../../../config/api';
import ProductCard from '../components/ProductCard';
import { Outlet } from 'react-router';

const ProductPage = () => {
  const [products, setProducts] = useState([])
   const getProducts = async ()=>{
        const res = await api.get("/products")
        // console.log(res.data.products);
        setProducts(res.data.products)
    }

    useEffect(()=>{
        getProducts()
    },[])
    // console.log(products)
  return (
    <div className='w-full min-h-[93vh] bg-zinc-900 flex flex-wrap items-center justify-center p-5 gap-5 '>
      {
        products.map(elem=> (
          <ProductCard key={elem.id} product={elem} />
        ))
      }
      {/* <Outlet/> */}
    </div>
  )
}

export default ProductPage
