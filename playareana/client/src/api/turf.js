import { axiosInstance } from ".";

export const addTurf = async (values) => {
    try {
        const response = await axiosInstance.post('/turfo/ground/add-turf', values)
        return response.data
    } catch (error) {
        console.log(error);

    }
}
export const updateTurf = async (values) => {
    try {
        const response = await axiosInstance.put('/turfo/ground/update-turf', values)
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
        const response = await axiosInstance.get('/turfo/ground/all-turf')
        return response.data
    } catch (error) {
        console.log(error);

    }
}
export const getTurfbyId = async (id) => {
    try {
        const response = await axiosInstance.get(`/turfo/turf/${id}`)
        return response.data
    } catch (error) {
        console.log(error);

    }
}


export const getAllturfOwner = async (id) => {
    console.log('turf owner');

    try {
        const response = await axiosInstance.get(`/turfo/turf/${id}`)
        return response.data
    } catch (error) {
        console.log(error.message);

    }
}
