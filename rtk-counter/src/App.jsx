import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {inc, dec, res, incNyNum, decNyNum} from "./api/features/counter.slice.js"


const App = () => {
  const [num, setNum] = React.useState(5);
  const dispatch = useDispatch()
  const count = useSelector(s => s.counter.value)

  return (
    <div>
      <h2>{count}</h2>
      <input
        type="number"
        placeholder="Number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />

      <button onClick={()=> dispatch(inc())} >Increase</button>
      <button onClick={()=> dispatch(dec())} > Decrease </button>
      <button onClick={()=> dispatch(res())} >Reset</button>
      <button onClick={()=> dispatch(incNyNum(num))} >Increase by {num}</button>
      <button onClick={()=> dispatch(decNyNum(num))} >Decrease by {num}</button>
    </div>
  );
};

export default App;
