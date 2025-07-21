import axios from "axios"
const token=localStorage.getItem("token")


console.log('axios is created');
export const axiosInstance= axios.create({
    headers:{
        "Content-type":"application/json",
        Authorization:token ?`Bearer ${token}`:""
    },
})