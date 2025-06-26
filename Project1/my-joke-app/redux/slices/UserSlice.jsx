    import { createSlice } from "@reduxjs/toolkit";
    import { act } from "react";

    const userSlice=createSlice({
        name:'users',
        initialState:{
            user:null,
            error:false,
            loading:false,
            params:3,
        },
        reducers :{
            userLoading:(state)=>{
                console.log(state,'state from userLoading');           
                state.loading=true
                state.error=false
            },
            userError:(state)=>{
                state.error=true
            },
            userData:(state,action)=>{
                state.user=action.payload
                state.error=false
                state.loading=false

            }
        }
    })
    export const { userLoading, userError, userData } = userSlice.actions;
    export default userSlice.reducer;