import { createSlice } from '@reduxjs/toolkit'

const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment(state,actions) {
            console.log(state)
            state.value=state.value+1
            console.log(actions,'actions')
            console.log(actions.payload,'actions payload')
        },
        decrement(state,actions){
            state.value=state.value-1
        },
        reset(state,actions){
            state.value=0
        }
    }
})




export  default CounterSlice.reducer
export const CounterAction =CounterSlice.actions
