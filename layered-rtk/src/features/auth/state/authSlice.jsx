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
        return rejectWithValue("Error in login User Action")
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
        addUser : (state, action)=>{
            state.user = action.payload
            state.isAuthenticated = true
            state.isLoading = false
        },

        deleteUser : (state, action)=>{
            state.user = null
            state.isAuthenticated = false
            state.isLoading = false

        }
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

    }
})



export const {addUser, deleteUser } = authSlice.actions
export default authSlice.reducer

