import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import { setDataInLocalStorage } from './utils/localStorage'

const App = () => {

  useEffect(()=>{
    setDataInLocalStorage()
  },[])



  return (
    <div className='w-full h-screen bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-slate-300'>
      <Login/>
    </div>
  )
}

export default App
