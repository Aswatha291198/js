import { axiosInstance } from ".";

export const MakePayment=async({amount,userId})=>{
    try {
        const response=await axiosInstance.post('/turfo/booking/makepayment',{
            amount,
            userId
        })
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
export const getBookingTurfByDate=async(turfId,date)=>{
try {
    const response=await axiosInstance.get('/turfo/booking/getBookingTurfByDate',
            {
             params:{
                turfId,date
             }   
            }
    )
    return response.data
} catch (error) {
    console.log(error.message);
    
}
}