import React from 'react'
import {RouterProvider, createBrowserRouter} from "react-router"
import AuthLayout from './Layout/AuthLayout'
import Login from './Components/Login'
import Register from './Components/Register'
import MainLayout from './Layout/MainLayout'
import AboutPage from './Pages/AboutPage'
import HomePage from './Pages/HomePage'

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element : <AuthLayout/>,
      children : [
        {
          path:"",
          element : <Login/>,
        },
        {
          path:"register",
          element : <Register/>,
        },
      ]
    },
    {
       path:"/main",
      element : <MainLayout/>,
      children : [
        {
          path:"",
          element : <HomePage/>,
        },
        {
          path:"about",
          element : <AboutPage/>,
        },
      ]
    }
  ])





  return <RouterProvider router={router} />
}
export default App
