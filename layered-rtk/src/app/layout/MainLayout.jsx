import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../shared/ui/components/Navbar'

const MainLayout = () => {
  return (
    <div>
       <Navbar/>

        <div className='bg-zinc-900 min-h-screen p-10'>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout
