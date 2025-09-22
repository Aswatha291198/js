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
import Incoming from './pages/admin/incoming/Incoming'
import OwnerPage from './partner'
import Book from './pages/user/Book'
import Tour from './pages/Tour/Tour'
import SingleTurf from './pages/Bookings/SingleTurf'
import About from './pages/about/About'
import UserList from './pages/admin/UserList'
import Blogs from './pages/admin/blogs/Blogs'
import './App.css'
import SingleBlog from './pages/admin/blogs/SingleBlog'
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
                <Route path='/book' element={<Protected><Book/></Protected>}></Route>
                <Route path='/turf/:id' element={<Protected><SingleTurf/></Protected>}></Route>
                <Route path='/about' element={<Protected><About/></Protected>}></Route>
                <Route path='/userlist' element={<Protected><UserList/></Protected>}></Route>
                <Route path='/blogs' element={<Protected><Blogs/></Protected>}></Route>
                <Route path='/blog/:id' element={<Protected><SingleBlog/></Protected>}></Route>
                <Route path='/incoming-turf-req' element={<Protected><Incoming/></Protected>}></Route>
                <Route path='/tournament' element={<Protected><Tour/></Protected>}></Route>
            </Routes>      
        </Provider>
            
        </>
    )
}

export default App