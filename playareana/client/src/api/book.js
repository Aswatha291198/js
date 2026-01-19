import { axiosInstance } from ".";

export const MakePayment=async(values)=>{
    try {
        const response=await axiosInstance.post('/turfo/booking/makepayment',values)
        return response.data
        
    } catch (error) {
        console.log(error.message);
        
    }
}
export const BookShow=async(values)=>{
    try {
        const response=await axiosInstance.post('/turfo/booking/bookTurf',values)
        return response.data
    } catch (error) {
        console.log(error.message);
    }
}