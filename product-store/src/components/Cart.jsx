import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Cart = () => {
  const { cart } = useContext(ProductContext);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
        <div className="text-5xl">🛒</div>
        <h2 className="text-xl font-semibold text-gray-700">
          Your cart is empty
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Your Cart
      </h1>

      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white rounded-xl shadow-sm p-4"
          >
            {/* Image */}
            <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-lg p-2">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {item.category}
              </p>
              <p className="text-emerald-600 font-bold mt-1">
                ${item.price.toFixed(2)}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button className="px-3 py-1 text-gray-700 hover:bg-gray-100">
                  −
                </button>
                <span className="px-3 py-1 text-sm border-x border-gray-300">
                  {item.quantity || 1}
                </span>
                <button className="px-3 py-1 text-gray-700 hover:bg-gray-100">
                  +
                </button>
              </div>

              <button className="text-sm text-red-500 hover:text-red-700 font-medium">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Cart;