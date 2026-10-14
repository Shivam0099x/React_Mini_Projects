import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
import AuthLayout from '../app/layout/AuthLayout'
import MainLayout from '../app/layout/MainLayout'
import Login from '../features/auth/ui/pages/Login'
import Register from '../features/auth/ui/pages/Register'
import HomePage from '../shared/ui/pages/HomePage'
import AboutPage from '../shared/ui/pages/AboutPage'
import NotFound from '../shared/ui/pages/NotFound'

const AppRoutes = () => {


    const router = createBrowserRouter([
        {
            path : "/",
            element : <AuthLayout/>,
            children : [
                {
                    path : "",
                    element : <Login/>
                },
                {
                    path : "register",
                    element : <Register/>
                }
            ]
        },
        { 
            path : "/main",
            element : <MainLayout/>,
            children : [
                {
                    path : "",
                    element : <HomePage/>
                },
                {
                    path : "about",
                    element : <AboutPage/>
                }
            ]
        },
        {
           path : "*",
           element : <NotFound/>
        }
    ])




  return <RouterProvider router={router}/>
}

export default AppRoutes
