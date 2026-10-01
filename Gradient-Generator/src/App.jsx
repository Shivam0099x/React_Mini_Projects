import React, { useEffect, useState } from "react";

const App = () => {
  const hexColor = () => {
    let str = "0123456789abcdef";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += str[Math.floor(Math.random() * str.length)];
    }
    // console.log(color)
    return color;
  };

  const [num, setNum] = useState(10);
  const [grad, setGrad] = useState("radial");
  const [gradient, setGradient] = useState([]);

  function generateLGradient() {
    let colors = [];
    for (let i = 0; i < num; i++) {
      let c1 = hexColor();
      let c2 = hexColor();
      let deg = Math.floor(Math.random() * 360);
      let degStr = `${deg}deg`;

      colors.push({
        linearGradient: `linear-gradient(${degStr}, ${c1}, ${c2})`,
      });
    }
    // console.log(colors);
    setGradient(colors);
  }

  function generateRGradient() {
    let colors = [];
    let direction = [
      "center",
      "top left",
      "top right",
      "bottom left",
      "bottom right",
      "50% 50%",
      "30% 70%",
      "70% 30%",
    ];
    let shapes = ["circle", "ellipse"];
    for (let i = 0; i < num; i++) {
      let c1 = hexColor();
      let c2 = hexColor();
      let dir = direction[Math.floor(Math.random() * direction.length)];
      let shape = shapes[Math.floor(Math.random() * shapes.length)];

      colors.push({
        radialGradient: `radial-gradient(${shape} at ${dir}, ${c1}, ${c2})`,
      });
    }
    // console.log(colors);
    setGradient(colors);
  }

  useEffect(() => {
    if (grad === "linear") {
      generateLGradient();
    } else {
      generateRGradient();
    }
  }, [num, grad]);

  return (
    <div className="bg-slate-500 min-h-screen p-20 w-full text-white font-mono">
      <div className="w-[90vw] min-h-screen mx-auto">
        <div className="w-full flex justify-between items-center mb-10">
          <h2 className="text-4xl text-transparent bg-clip-text bg-linear-to-r from-red-900 to-blue-700 font-bold">
            GRADIENT GENERATOR{" "}
          </h2>
          <div className="flex gap-6">
            <input
              type="number"
              className="bg-zinc-900 rounded-2xl px-3 py-2"
              name="num"
              id="num"
              placeholder="Enter Your Number"
              value={num}
              onChange={(e) => setNum(Number(e.target.value))}
            />
            <select
              value={grad}
              onChange={(e) => setGrad(e.target.value)}
              className="bg-zinc-900 rounded-2xl px-3 py-2"
            >
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {grad === "linear"
            ? gradient.map((item, index) => (
                <div
                  key={index}
                  className=" h-[40vh] rounded-2xl flex justify-end items-end p-2 cursor-pointer"
                  style={{ background: item.linearGradient }}
                >
                  <span
                    className="bg-zinc-700 hover:bg-black text-white rounded-xl px-2 py  "
                    onClick={(e) => {
                      e.stopPropagation();
                      navigator.clipboard.writeText(item.linearGradient);
                    }}
                  >
                    Copy
                  </span>
                </div>
              ))
            : gradient.map((item, index) => (
                <div
                  key={index}
                  className=" h-[40vh] rounded-2xl flex justify-end items-end p-2 cursor-pointer"
                  style={{ backgroundImage: item.radialGradient }}
                >
                  <span
                    className="bg-zinc-700 hover:bg-black text-white rounded-xl px-2 py-1  "
                    onClick={(e) => {
                      e.stopPropagation();
                      navigator.clipboard.writeText(item.radialGradient);
                    }}
                  >
                    Copy
                  </span>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default App;
