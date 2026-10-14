import React, { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";
import Cart from "./components/Cart";
import { ProductContext } from "./context/ProductContext";

const App = () => {
  const { toggle, products, cart } = useContext(ProductContext);

  return (
    <div className="bg-zinc-900 text-white w-full min-h-screen">
      <Navbar />
      {/* {toggle ? <Cart/> : <ProductCards/> } */}

      {toggle ? (
        <Cart />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-900 min-h-screen">
          {products.map((product) => {
            let cartInItem = cart.find(elem => product.id === elem.id)
            console.log(cartInItem)
            return (
            <ProductCards product={product} key={product.id} quantity = {cartInItem?.quantity}  />
            )
          })}
        </div>
      )}
    </div>
  );
};

export default App;
