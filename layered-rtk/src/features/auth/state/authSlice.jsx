import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { api } from "../../../config/api";



export const loginUserAction = createAsyncThunk("auth/login", async (credentials, {rejectWithValue})=>{

    try {

        const res = await api.post("/auth/login", credentials);
        localStorage.setItem("accessToken", res.data.accessToken)

        toast.success("User LoggedIn")

        return res.data
        
    } catch (error) {
        toast.error("login failed")
        return rejectWithValue("Error in login User Action")
    }
})


export const hydrateUserAction = createAsyncThunk("auth/hydrate", async (_, {rejectWithValue})=>{
    let token = localStorage.getItem("accessToken")
    try {
        const res = await api.get('/auth/me',{
            headers : {
              'Authorization' : `Bearer ${token}`
            }
        })
    
        // console.log("result from login user api", res)
        toast.success("User Authenticated")
        return res.data
    } catch (error) {
        toast.error("Unauthorized User/Access")
        console.log("Error in login user api", error)
    }
})


export const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : null,
        isAuthenticated : false,
        isLoading : true
    },

    reducers:{
        // addUser : (state, action)=>{
        //     state.user = action.payload
        //     state.isAuthenticated = true
        //     state.isLoading = false
        // },

        // deleteUser : (state, action)=>{
        //     state.user = null
        //     state.isAuthenticated = false
        //     state.isLoading = false

        // }
    },
    extraReducers : (builder)=>{

        builder
        .addCase(loginUserAction.pending, (state, action)=>{
            state.isLoading = true
        })
        .addCase(loginUserAction.fulfilled, (state, action)=>{
            state.user = action.payload
            state.isLoading = false
            state.isAuthenticated = true
        })
        .addCase(loginUserAction.rejected, (state, action)=>{
             state.isLoading = false
            //  state.isAuthenticated = false
        })
        .addCase(hydrateUserAction.pending, (state, action)=>{
            state.isLoading = true
        })
        .addCase(hydrateUserAction.fulfilled, (state, action)=>{
            state.user = action.payload
            state.isLoading = false
            state.isAuthenticated = true
        })
        .addCase(hydrateUserAction.rejected, (state, action)=>{
             state.isLoading = false
            //  state.isAuthenticated = false
        })

    }
})



// export const {addUser, deleteUser } = authSlice.actions
export default authSlice.reducer

