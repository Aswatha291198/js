import {createSlice} from '@reduxjs/toolkit'

const citySlice=createSlice({
    name:'cities',
    initialState:{
        selectedCity:null
    },
    reducers:{
        setCity:(state,action)=>{
            state.selectedCity=action.payload
        }
        
    }
    
})
export default citySlice.reducer
export const{setCity}=citySlice.actions
