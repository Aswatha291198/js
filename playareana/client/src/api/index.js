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
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      localStorage.removeItem('city')

    
      window.location.href = '/login'
    }

    return Promise.reject(error)
  }
)