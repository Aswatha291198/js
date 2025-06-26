import { productLoading,productData,productError } from "../ProductSlice"

export const fetchProductMiddleware=()=>{
    return async (dispatch)=>{
        try {
            dispatch(productLoading())
            const response=await fetch('https://fakestoreapi.com/products')
            const data= await response.json()
            dispatch(productData(data))      
        } catch (error) {
           dispatch(productError()) 
        }
    }
}