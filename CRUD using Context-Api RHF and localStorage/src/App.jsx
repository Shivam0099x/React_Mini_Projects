// import React from 'react'
// import Form from './components/Form'
// import Card from './components/Card'

// const App = () => {
//   return (
//     <div className='w-full min-h-screen bg-zinc-900 text-white'>
//       <Form/>
//      <div className='flex gap-10 flex-wrap'>
//        <Card/>
//      </div>
//     </div>
//   )
// }

// export default App




import React from 'react'
import Form from './components/Form'
import Card from './components/Card'
import { Routes, Route } from 'react-router'
import About from './components/About'
import Navabr from './components/Navabr'
import Home from './components/Home'

const App = () => {
  // localStorage.clear("users")
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white px-10'>
      <Navabr/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/card' element={<Card/>}/>
      </Routes>
      
    </div>
  )
}

export default App

