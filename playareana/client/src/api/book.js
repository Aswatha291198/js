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

export const getGroupgameByCity=async(city,game)=>{
    try {
        console.log(game,'api frn');
        
        const response=await axiosInstance.get('/turfo/booking/get-all-group-game',{
            params:{
                city,
              ...(game &&{game  })
            }
        })
        return response.data
    } catch (error) {
        console.log(error.message);
        
    }
}

export const getBookinById=async(id)=>{
    try {
        const response=await axiosInstance.get(`/turfo/booking/getBookings/${id}`)
        return response.data
    } catch (error) {
        console.log(error.message);
        
    }
}
export const joinGame=async(values)=>{
    try {
        const response=await axiosInstance.post('/turfo/booking/join-game',values)
        return response.data
    } catch (error) {
        console.log(error.message);
        
    }
}
export const getBookingUser=async()=>{
    try {
        const response=await axiosInstance.get('/turfo/booking/myBookings')
        return response.data
    } catch (error) {
        console.log(error.message);
        
    }
}