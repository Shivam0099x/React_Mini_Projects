import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : null,
        isAuthenticated : false,
        isLoading : false
    },

    reducers:{
        addUser : (state, action)=>{
            state.user = action.payload
            state.isAuthenticated = true
        },

        deleteUser : (state, action)=>{
            state.user = null
            state.isAuthenticated = false
        }
    }
})



export const {addUser, deleteUser } = authSlice.actions
export default authSlice.reducer

