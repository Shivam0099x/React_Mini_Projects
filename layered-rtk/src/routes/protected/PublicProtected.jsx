import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router'


const PublicProtected = () => {

  const {isAuthenticated, user, isLoading} = useSelector(state => state.auth)

  if(isLoading) return <p>Loadinggg.....</p>

  if(user){
    return <Navigate to={"/main"} />
  }


  return (
    <Outlet/>
  )
}

export default PublicProtected
