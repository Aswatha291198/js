import { userLoading, userError, userData } from '../slices/UserSlice'

 export const fetchMiddleware = (params) => {
    return async (dispatch) => {
        console.log(dispatch, 'dispatch from middleware');
        console.log(params, 'params from middleware');

        try {
            dispatch(userLoading())
            const response=await fetch(`https://jsonplaceholder.typicode.com/users/${params}`)
            const data=await response.json()
            dispatch(userData(data))

        } catch (error) {
            dispatch(userError())
        }



    }
}
