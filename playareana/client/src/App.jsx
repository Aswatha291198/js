import React from 'react'
import Login from './pages/Login/Login'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/register/Register'
import Protected from './component/Protected'
import Home from './pages/home/Home'
import Play from './pages/user/Play'
import{Provider} from 'react-redux'
import store from '../redux/store'
import UserProfile from './pages/user/userProfile'
import Admin from './pages/admin'
import OwnerPage from './partner'

const App = () => {
    return (
        <>
        <Provider store={store}>
            <Routes>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/' element={<Protected><Home/></Protected>}></Route>
                <Route path='/play' element={<Protected><Play/></Protected>}></Route>
                <Route path='/userprofile' element={<Protected><UserProfile/></Protected>}></Route>
                <Route path='/admin' element={<Protected><Admin/></Protected>}></Route>
                <Route path='/owner' element={<Protected><OwnerPage/></Protected>}></Route>
            </Routes>
           
        </Provider>
            
        </>
    )
}

export default App