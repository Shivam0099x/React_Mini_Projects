import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
        <h2>Navbaaarrr</h2>

        <div>
            <Outlet/>
        </div>
      
    </div>
  )
}

export default MainLayout
