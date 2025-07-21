import { axiosInstance } from "./index";

export const PostJob=async(values)=>{
    try {
      const response=await axiosInstance.post('/salez/jobs/postjob',values)
      return response  
    } catch (error) {
        console.log(error);
        
    }
}
export const UpdateJob=async(values)=>{
    try {
      const response=await axiosInstance.put('/salez/jobs/updatejob',values)
      return response  
    } catch (error) {
        console.log(error);
        
    }
}
export const AppliedJobs=async(userid)=>{
    try {
      const response=await axiosInstance.put(`/salez/jobs/${userid}/appliedjob`)
      return response  
    } catch (error) {
        console.log(error);
        
    }
}
export const AllJobs=async (id)=>{
  try {
    const response =await axiosInstance.get(`/salez/jobs/${id}/alljobs`)
  } catch (error) {
    console.log(error);
    
  }
}