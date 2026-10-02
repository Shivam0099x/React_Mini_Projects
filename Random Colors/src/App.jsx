import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("black")


  const randomRgbColors = ()=>{
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    let c = `rgb(${r}, ${g}, ${b})`

    // console.log(c)
    setColor(c)
  }


  const randomHexColors = ()=>{

    let str = "1234567890abcdef"
    let hex = "#" 

    for(let i = 0; i< 6; i++){
         hex += str.charAt(Math.floor(Math.random() * str.length))
    }

    // console.log(hex)
    setColor(hex)
  }







  return (
    <div className='h-screen w-full text-white' style={{backgroundColor : color}}>
      <div className='flex w-full p-5 items-center justify-center gap-10'>
        <h2 className='px-3 py-2 bg-blue-900 rounded-lg' onClick={randomHexColors} >Create HEX Color</h2>
        <h2 className='px-3 py-2 bg-blue-900 rounded-lg' onClick={randomRgbColors} >Random RGB Colors</h2>
      </div>

      <div className='flex justify-center'>
        <h2 className='text-3xl text-red-900 mt-20 font-bold' >
          {color === 'black' ? "rgb(255,255,255)" : color}
        </h2>
      </div>
    </div>
  )
}

export default App
