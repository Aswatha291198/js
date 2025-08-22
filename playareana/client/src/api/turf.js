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
    try {
        const response = await axiosInstance.delete(`/turfo/ground/${id}`)
        return response.data
    } catch (error) {
        console.log(error);

    }
}
export const getAllTurf = async () => {
    try {
        const response = await axiosInstance.get('/turfo/ground/all-turfs')
        return response.data
    } catch (error) {
        console.log(error);

    }
}
export const getTurfbyId = async (id) => {
    try {
        const response = await axiosInstance.get(`/turfo/turfs/${id}`)
        return response.data
    } catch (error) {
        console.log(error);

    }
}


export const getAllturfOwner = async (id) => {
    console.log('turfs owner');

    try {
        const response = await axiosInstance.get(`/turfo/turfs/turf/${id}`)
        return response.data
    } catch (error) {
        console.log(error.message);
        throw error      

    }
}
