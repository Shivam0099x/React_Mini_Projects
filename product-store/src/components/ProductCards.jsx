import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductCards = () => {
  const { products, setCart } = useContext(ProductContext);

  if (!products?.length)
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-lg font-medium text-gray-600">No products found.</p>
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-50 min-h-screen">
      {products.map((item) => (
        <div
          key={item.id}
          className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
        >
          {/* Image */}
          <div className="flex items-center justify-center h-52 p-4 bg-white">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div className="flex flex-col flex-1 gap-2 p-4">
            <span className="text-xs uppercase tracking-wide text-gray-500">
              {item.category}
            </span>

            <h3
              className="text-sm font-semibold text-gray-900 line-clamp-2"
              title={item.title}
            >
              {item.title}
            </h3>

            <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
              {item.description}
            </p>

            <div className="flex justify-between items-center mt-auto pt-2">
              <span className="text-lg font-bold text-emerald-600">
                ${item.price.toFixed(2)}
              </span>
              <span className="text-xs text-gray-700">
                ⭐ {item.rating?.rate} ({item.rating?.count})
              </span>
            </div>

            <button
              className="mt-2 w-full py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 active:scale-[0.98] transition"
              onClick={()=> setCart(prev => [...prev, {...item, quantity : 1}])}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;