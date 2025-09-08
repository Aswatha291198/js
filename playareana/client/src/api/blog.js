import { axiosInstance } from ".";

 export const addBlog=async(values)=>{
    try {
        const response=await axiosInstance.post('/turfo/blog/addBlog',values)
        return response.data
    } catch (error) {
        console.log(error.message);
        
    }
}
 export const Updateblog=async(id)=>{
    try {
        const response=await axiosInstance.put('/turfo/blog/addBlog',id)
                return response.data
    } catch (error) {
        console.log(error.message);
        
    }
}
export const DeleteBlog=async(id)=>{
    try {
      const response=await axiosInstance.delete(`/turfo/blog/delete-blog/${id}`)  
      return response.data
    } catch (error) {
        console.log(error.message);
        
    }
}
export const GetAllBlogs =async()=>{
    console.log('coming tho the api all blogs');
    
    try {
        const response =await axiosInstance.get('/turfo/blog/allblogs')
        return response.data
    } catch (error) {
        console.log(error.message);
        
    }
}
export const GetBlogById=async(id)=>{
    try {
        const response=await axiosInstance.get(`/turfo/blog/${id}`)
        return response.data
    } catch (error) {
      console.log(error.message);
        
    }
}