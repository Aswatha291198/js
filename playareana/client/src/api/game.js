import {axiosInstance} from './index'

export const addGame=async(values)=>{
    try {
        const res=await axiosInstance.post('/turfo/game/add-game',values)
        return res.data
    } catch (error) {
        console.log(error);
        
    }
}
export const getAllGame=async(values)=>{
    console.log('coming to allgame fonrtend');
    
    try {
        const res=await axiosInstance.get('/turfo/game/allgame')
        return res.data
    } catch (error) {
        console.log(error);
        
    }
}
export const deleteGame=async(id)=>{
    console.log('delte api');
    
    try {
        const res=await axiosInstance.delete(`/turfo/game/delete-game/${id}`)
        return res.data
    } catch (error) {
        console.log(error.message,'delelelelel',);
        
    }
}
export const updateGame=async(values)=>{
    console.log('coming to the updategame');
    
    try {
        const res=await axiosInstance.post('/turfo/game/update-game',values)
        return res.data
        
    } catch (error) {
        console.log(error.message);
        
    }
}