import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../redux/slice/userSlice'

const store=configureStore({
    reducer:{
        users:userReducer
    }
})
export default store