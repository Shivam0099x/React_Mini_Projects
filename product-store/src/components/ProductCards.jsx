import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductCards = ({ product, quantity }) => {
  const { setCart, increaseQuantity, decreaseQuantity } = useContext(ProductContext);

  // if (!product?.length)
  //   return (
  //     <div className="flex justify-center items-center min-h-[60vh]">
  //       <p className="text-lg font-medium text-gray-600">No products found.</p>
  //     </div>
  //   );

  return (
    <div
      className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex items-center justify-center h-52 p-4 bg-white">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="flex flex-col flex-1 gap-2 p-4">
        <span className="text-xs uppercase tracking-wide text-gray-500">
          {product.category}
        </span>

        <h3
          className="text-sm font-semibold text-gray-900 line-clamp-2"
          title={product.title}
        >
          {product.title}
        </h3>

        <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-auto pt-2">
          <span className="text-lg font-bold text-emerald-600">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs text-gray-700">
            ⭐ {product.rating?.rate} ({product.rating?.count})
          </span>
        </div>

        {quantity ? (
          <div className="mt-2 flex items-center justify-between gap-2 rounded-lg bg-zinc-100 p-1">
            <button className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-lg font-bold text-zinc-700 shadow-sm transition hover:bg-red-500 hover:text-white active:scale-95" onClick={()=>decreaseQuantity(product.id)} >
              −
            </button>
            <p className="text-sm font-semibold text-zinc-900">{quantity}</p>
            <button className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-lg font-bold text-zinc-700 shadow-sm transition hover:bg-emerald-500 hover:text-white active:scale-95" onClick={()=> increaseQuantity(product.id)}>
              +
            </button>
          </div>
        ) : (
          <button
            className="mt-2 w-full rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg active:scale-[0.98]"
            onClick={() =>
              setCart((prev) => [...prev, { ...product, quantity: 1 }])
            }
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
