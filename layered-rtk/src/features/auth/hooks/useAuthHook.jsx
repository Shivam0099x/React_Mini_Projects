import React from 'react'
import { useNavigate } from 'react-router'
import {useForm } from "react-hook-form"
import { loginUserApi } from '../api/authApi'
import {useSelector, useDispatch} from "react-redux"
import {addUser} from "../../auth/state/authSlice"
import { toast } from 'react-toastify'

const useAuth = () => {
    const navigate = useNavigate()

    const {register, handleSubmit, reset, formState:{errors}} = useForm()
    const dispatch = useDispatch()

    const registerForm = (data)=>{
        console.log("Registered User" , data)
        
    }

    const loginForm = async (data)=>{
        try {
            const res = await loginUserApi(data)
            console.log(res )

            dispatch(addUser(res))
            toast.success("User LoggedIn")

        } catch (error) {
            console.log("Error in loginForm", error)
        }
    }


  return {
    navigate,
    register,
    handleSubmit,
    errors,
    registerForm,
    loginForm
  }
}

export default useAuth
