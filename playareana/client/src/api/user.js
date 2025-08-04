import { axiosInstance } from ".";

export const loginUser=async(values)=>{
    console.log('coming to frontend api');
    
    try {
        const response=await axiosInstance.post('/api/turfo/user/login',values)
        return response.data
        
    } catch (error) {
        console.log('error logging in');
        
    }
}

export const registerUser=async(values)=>{
    try {
        const response=await axiosInstance.post('/api/turfo/user/register',values)
        return response.data
        
    } catch (error) {
     console.log('error register api');
        
    }
}
export const GetCurrentUser=async(values)=>{
    try {
        const response=await axiosInstance.get('/api/turfo/user/current')
        return response.data
        
    } catch (error) {
     console.log('error current api');
        
    }
}