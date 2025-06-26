import {createSlice} from '@reduxjs/toolkit'

const ProductSlice=createSlice({
    name:'product',
    initialState:{
        product:[],
        loading:false,
        error:false,
    },
    reducers:{
        productLoading:(state)=>{
            state.loading=true
            state.error=false
        },
        productError:(state,action)=>{
            state.loading=false
            state.error=action.payload

        },
        productData:(state,action)=>{
            state.product=action.payload
            state.loading=false
            state.error=false
        }
    }
    
})
export const{productLoading,productError,productData}=ProductSlice.actions
export default ProductSlice.reducer