import React, { useEffect, useState } from "react";

const App = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false)

  const url = `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`;

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setProduct((prev) => [...prev, ...data.products]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [count]);

    useEffect(() => {
    if(product && product.length === 100 ){
       setDisable(true)
    }
  }, [product]);

  return (
    <div className="bg-zinc-900 min-h-screen w-full text-white p-10 flex flex-col gap-10 items-center">
      {console.log(product)}
      {loading && <div>Loading... Please Wait For a while</div>}
      <div className="flex w-full min-h-screen flex-wrap items-center justify-center gap-5">
        {product && product.length
          ? product.map((item, index) => (
              <div key={index} className="bg-red-900 rounded-lg p-5 w-[20vw]">
                <img className="shadow-2xl roundex-xl text-transparent" src={item.thumbnail} alt="" />
                <p className="mt-2">{item.title}</p>
                <span> ${item.price}</span>
              </div>
            ))
          : null}
      </div>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className={`px-3 py-2 rounded-xl ${disable ? "cursor-not-allowed bg-blue-400":" bg-blue-800"} `}
        // disabled = {` ${product.length >= 100} ? true : false `}
        disabled = {disable}
      >
        Load More
      </button>
    </div>
  );
};

export default App;
