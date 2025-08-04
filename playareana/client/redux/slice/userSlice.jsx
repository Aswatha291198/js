import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:'users',
    initialState:{
        user:null,
        loader:false
    },
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
        },
        showLoading:(state)=>{
            state.loader=true
        },
        hideLoading:(state)=>{
            state.loader=false
        }
    }
    
})
export default userSlice.reducer
export const{setUser,showLoading,hideLoading}=userSlice.actions
