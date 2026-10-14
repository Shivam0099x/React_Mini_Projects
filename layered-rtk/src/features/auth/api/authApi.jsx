import { api } from "../../../config/api"


export const loginUserApi =  async(cred) =>{
    try {
        const res = await api.post('/auth/login', cred)
    
        console.log("result from login user api", res)
        localStorage.setItem("accessToken", res.data.accessToken)
        return res.data
    } catch (error) {
        console.log("Error in login user api", error)
    }
}


export const hydrateUserApi =  async() =>{
    let token = localStorage.getItem("accessToken")
    try {
        const res = await api.get('/auth/me',{
            headers : {
              'Authorization' : `Bearer ${token}`
            }
        })
    
        console.log("result from login user api", res)
        return res.data
    } catch (error) {
        console.log("Error in login user api", error)
    }
}