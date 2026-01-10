import React from 'react'
import Login from './pages/Login/Login'
import { Routes, Route,Navigate } from 'react-router-dom'
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
import Edit from './pages/Edit-profile/Edit'
import City from './pages/admin/City'
import UserProfile from './pages/user/UserProfile'
import Bookings from './pages/user/Bookings/Bookings'
import Owner from './partner/index' 
import Turf from './partner/Turf'

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
               <Route index element={<Navigate to="turfs" replace />} />
        
                <Route path='turfs' element={<TurfList/>}/>
                <Route path='game' element={<GameList/>}/>
                <Route path='city' element={<City/>}/>
                <Route path='edit-profile' element={<Edit/>}/>
                </Route>
                <Route path ='/player' element={<Protected><UserProfile/></Protected>}>
                <Route path='bookings' element={<Protected><Bookings/></Protected>}/>
                <Route path='edit-profile' element ={<Protected><Edit/></Protected>}/>
                </Route>
                <Route path='/owner' element={<Protected><Owner/></Protected>}>
                <Route index element={<Turf/>}/>
                <Route path='turf/:id' element={<Turf/>}/>
                </Route>
            </Routes>      
        </Provider>
            
        </>
    )
}

export default App