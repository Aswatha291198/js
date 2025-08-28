import { axiosInstance } from ".";

export const addTurf = async (values) => {
    try {
        const response = await axiosInstance.post('/turfo/turfs/add-turf', values)
        return response.data
    } catch (error) {
        console.log(error);

    }
}
export const updateTurf = async (values) => {
    console.log('uppdate-turf');
    
    try {
        const response = await axiosInstance.put('/turfo/turfs/update-turf', values)
        return response.data
    } catch (error) {
        console.log(error);

    }
}
export const deleteTurf = async (id) => {
    console.log('delete');
    
    try {
        const response = await axiosInstance.delete(`/turfo/turfs/delete/${id}`)
        return response.data
    } catch (error) {
        console.log(error);

    }
}
export const getAllTurf = async () => {
    try {
        const response = await axiosInstance.get('/turfo/turfs/all-turf')
        return response.data
    } catch (error) {
        console.log(error);

    }
}
export const getTurfbyId = async (id) => {
    console.log('comong to the turf');
    
    try {
        const response = await axiosInstance.get(`/turfo/turfs/turf/${id}`)
         console.log("Raw response:", response.data);
        return response.data
    } catch (error) {
        console.log(error.message);

    }
}
export const getAllturfOwner = async (id) => {
    console.log('turfs owner');

    try {
        const response = await axiosInstance.get(`/turfo/turfs/turf/owner/${id}`)
        return response.data
    } catch (error) {
        console.log(error.message);
        throw error      
    }
}
