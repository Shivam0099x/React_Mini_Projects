import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { api } from '../../../../config/api'

const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

    const getProduct = async () => {
      const res = await api.get(`/products/${id}`)
      setProduct(res.data)
    }

  useEffect(() => {
    getProduct()
  }, [id])

  if (!product) return <p className="text-white p-6">Loading...</p>

  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-800 rounded-xl">
      <img
        src={product.thumbnail || product.images?.[0]}
        alt={product.title}
        className="w-full h-80 object-cover rounded-lg"
      />

      <div className="flex flex-col gap-3">
        <span className="text-xs uppercase text-zinc-400">{product.category}</span>
        <h1 className="text-2xl font-bold text-white">{product.title}</h1>
        <p className="text-sm text-zinc-300">{product.description}</p>
        <p className="text-2xl font-bold text-white mt-auto">${product.price}</p>

        <button className="bg-amber-500 hover:bg-amber-600 text-zinc-900 font-semibold px-5 py-2 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetailsPage