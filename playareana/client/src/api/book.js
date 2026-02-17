import { axiosInstance } from ".";

export const MakePayment=async({amount,userId})=>{
    console.log('makepayment');
    console.log(userId,'from book api');
    
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
export const bookTurf=async(values)=>{
    try {
        const response=await axiosInstance.post('/turfo/booking/book-turf',values)
        return response.data
    } catch (error) {
        console.log(error.message);
    }
}
export const getBookingTurfByDate=async(turf,date)=>{
try {
    const response=await axiosInstance.post('/turfo/booking/getBookingTurfByDate', {turf,date})
    console.log(response.data)
    return response.data
    
} catch (error) {
    console.log(error.message);
    
}
}

export const getBookingsTurfOwner=async(values)=>{
    try {
        const response =await axiosInstance.get('/turfo/booking/incoming-req',values)
        return response.data
    } catch (error) {
        console.log(error.message);
        
    }
}