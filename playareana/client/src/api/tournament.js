import {axiosInstance} from '.'


export const newTournament=async(values)=>{
    console.log('coming to the api frontendccretq');
    
    try {
       const response=await axiosInstance.post('/turfo/tournament/create-tournament',values)
       return response.data 
    } catch (error) {
        console.log(error.message);
        
    }
}

export const editTournament=async(values)=>{
    try {
       const response=await axiosInstance.post('/turfo/tounament/update-tournament',values)
       return response.data 
    } catch (error) {
        console.log(error.message);  
    }
}

export const tournamentById=async(id)=>{
    try {
        const response=await axiosInstance.get(`/turfo/tournament/${id}`)
        return response.data
    } catch (error) {
        console.log(error.message);
        
    }
}