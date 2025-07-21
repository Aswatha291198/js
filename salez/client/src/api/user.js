import { axiosInstance } from "./index";

export const RegisterUser = async (values) => {
    console.log('user is fwthing');

    try {
        const response = await axiosInstance.post('/salez/user/register', values)
        return response.data
    } catch (error) {
        console.log(error);

    }
}

export const LoginUser = async (values) => {
    console.log('user is logging in');
    
    try {
        const response = await axiosInstance.post('/salez/user/login', values)
        return response.data
    } catch (error) {
        console.log(error);
    }
}
export const CurrentUser = async () => {
    console.log('accesssing the current route');
    
    try {
        const response = await axiosInstance.get('/salez/user/current/')
        return response.data
    } catch (error) {
        console.log(error);
    }
}