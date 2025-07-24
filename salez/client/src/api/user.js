import { axiosInstance } from ".";


export const RegisterUser=async(values)=>{
    try {
        const response =await axiosInstance.post('/salez/user/register',values)
    return response.data
    } catch (error) {
       console.log(error)
    }
}
export const LoginUser=async(values)=>{
    try {
        const response =await axiosInstance.post('/salez/user/login',values)
    return response.data
    } catch (error) {
        console.log(error)
    }
}
export const GetCurrentUser=async()=>{
    console.log("current user")
    try {
        const response=await axiosInstance.get('/salez/user/current')
    } catch (error) {
      return error  
    }
}