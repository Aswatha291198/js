import axios from'axios'


export const axiosInstance=axios.create({
    headers:{
        "Content-type":"application/json"
    }
})

axiosInstance.interceptors.request.use(function(config){
    const token=localStorage.getItem("token")
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config
})