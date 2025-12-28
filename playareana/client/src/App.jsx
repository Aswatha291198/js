import React from 'react'
import Login from './pages/Login/Login'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/register/Register'
import Protected from './component/Protected'
import{Provider} from 'react-redux'
import store from '../redux/store'
import './App.css'
import Home from './pages/home/Home'
import Play from './pages/user/Play'
import Book from './pages/user/Book'
import SingleTurf from './pages/Bookings/SingleTurf'
import Admin from './pages/admin'
import TurfList from './pages/admin/TurfList'
import GameList from './pages/admin/GameList'
import Edit from './pages/admin/Edit'
import City from './pages/admin/City'

const App = () => {
    return (
        <>
        <Provider store={store}>
            <Routes>
                 <Route path='/' element={<Protected><Home/></Protected>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/play' element={<Protected><Play/></Protected>}></Route>
                <Route path='/book' element={<Protected><Book/></Protected>}></Route>
                <Route path='/turf/:id' element={<Protected><SingleTurf/></Protected>}></Route>
                <Route path='/admin' element={<Protected><Admin/></Protected>}>
                <Route path='turfs' element={<Protected><TurfList/></Protected>}/>
                <Route path='game' element={<Protected><GameList/></Protected>}/>
                <Route path='city' element={<Protected><City/></Protected>}/>
                <Route path='edit-profile' elemet={<Protected><Edit/></Protected>}/>
                </Route>
            </Routes>      
        </Provider>
            
        </>
    )
}

export default App