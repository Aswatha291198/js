import { axiosInstance } from ".";

export const loginUser=async(values)=>{
    console.log('coming to frontend');
    
    try {
        const response=await axiosInstance.post('/turfo/user/login',values)
        return response.data
        
    } catch (error) {
        console.log('error logging in');
        
    }
}
export const registerUser=async(values)=>{
    try {
        const response=await axiosInstance.post('/turfo/user/register',values)
        return response.data
        
    } catch (error) {
     console.log('error register');
        
    }
}
export const GetCurrentUser=async(values)=>{
    try {
        const response=await axiosInstance.get('/turfo/user/current')
        return response.data
        
    } catch (error) {
     console.log(error.message);

     console.log('error current');
     
        
    }
}
export const updateuser=async(values)=>{
    try {
        console.log('updateuser');
        
        const response=await axiosInstance.post('/turfo/user/update-user',values)
        return response.data
    } catch (error) {
        console.log(error.message);
        
    }
}
export const getAllUsers=async()=>{
    try {
        const response=await axiosInstance.get('/turfo/user/all-users')
        return response.data
    } catch (error) {
        console.log(error.message);
        
    }
}
