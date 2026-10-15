import React from 'react'
import { useNavigate } from 'react-router'

const ProductCard = ({ product }) => {
    const navigate = useNavigate()
  return (
    <div className='w-72 bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group flex flex-col'>
      <div className='relative w-full h-56 bg-zinc-700 overflow-hidden' onClick={()=>navigate(`/main/product/${product.id}`)} >
        <img
          src={product.thumbnail || product.images[0]}
          alt={product.title}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
        />

      </div>

      <div className='p-4 flex flex-col gap-2 flex-1'>
        <div className='flex items-center justify-between text-xs text-zinc-400'>
          <span className='uppercase tracking-wider'>{product.category}</span>
          <span className='text-amber-400 font-medium'>{product.brand}</span>
        </div>

        <h3 className='text-white font-semibold text-base line-clamp-2 min-h-12'>
          {product.title}
        </h3>

        <div className='flex items-center justify-between mt-auto pt-3 border-t border-zinc-700'>
          <div className='flex flex-col'>
            <span className='text-white font-bold text-lg'>
              ${product.price}
            </span>
            
          </div>

          <button className='bg-amber-500 hover:bg-amber-600 text-zinc-900 font-semibold text-sm px-3 py-2 rounded-lg transition-colors duration-200'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard