import { createContext, useContext, useState } from "react"



const UserContext = createContext()


export const UserContextProvider = ({children})=>{

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const [isEditedUser, setIsEditedUser] = useState(null)

    console.log(users)

    return <UserContext.Provider value={{setUsers, users, isEditedUser, setIsEditedUser}}>
        {children}
    </UserContext.Provider>
}


export const UsersContext = ()=>{
    return useContext(UserContext)
}