import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './slices/CounterSlice'
import UserReducer from './slices/UserSlice'




  export const store=configureStore({
    reducer:{
        counter:CounterReducer,
        users:UserReducer
    }
}) 
 