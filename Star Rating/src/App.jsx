import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const App = () => {
  return <Star noOfStarr={10} />;
};

const Star = ({ noOfStarr = 5 }) => {

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)


  const handleClick = (index)=>{
    setRating(index)
  }

  const handleMouseLeave = ()=>{
    setHover(rating)  
  }
  const handleMouseMove = (index)=>{
    setHover(index)
  }



  return (
    <div className="w-full h-screen bg-zinc-900 text-white flex justify-center">
      {[...Array(noOfStarr)].map((item, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "text-red-900" : "text-white"}
            onClick={()=>handleClick(index)}
            onMouseLeave={()=>handleMouseLeave()}
            onMouseMove={()=>handleMouseMove(index)}
            size={50}
          />
        );
      })}
    </div>
  );
};

export default App;
