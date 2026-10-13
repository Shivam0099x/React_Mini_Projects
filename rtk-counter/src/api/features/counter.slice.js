import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : 'counter',
    initialState:{
        value : 0
    },
    reducers:{
       inc : (s) =>{ s.value += 1},
       incNyNum :( s,a) => {s.value += a.payload},
       decNyNum :( s,a) =>{ s.value -= a.payload},
       dec : s => {s.value -= 1},
       res : s =>{ s.value = 0},
    }
})

export const {inc, incNyNum, res, dec, decNyNum} = counterSlice.actions
export default counterSlice.reducer 