import React, { useState, useContext } from 'react'
import { getDataInLocalStorage } from '../utils/localStorage'

export const AuthContext = React.createContext()

const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null)

  const {employees, admin} = getDataInLocalStorage()




  return (
    <AuthContext.Provider value={{employees, admin}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
