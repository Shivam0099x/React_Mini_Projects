import {configureStore} from "@reduxjs/toolkit"
import AuthReducer from "./features/Auth.slice"


export const store = configureStore({
    reducer:{
        auth : AuthReducer
    }
})