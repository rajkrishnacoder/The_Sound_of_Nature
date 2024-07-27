import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    length: 0,
    on : false,
    resetAll: false
}

export const currentSlice = createSlice({
    name: "currentState",
    initialState,
    reducers: {
        increaseLength: (state, action)=>{
            state.length++
        },
        decreaseLength: (state, action)=>{
            state.length--
        },
        clearAll:(state, action)=>{
            state.length = 0
            state.on = false
            state.resetAll = true
        },
        resetSet:(state, action)=>{
            state.resetAll = false
        },
        setOn: (state, action)=>{
            state.on = action.payload
        }
    }
})

export const { increaseLength, decreaseLength, setOn, clearAll, resetSet } = currentSlice.actions

export default currentSlice.reducer