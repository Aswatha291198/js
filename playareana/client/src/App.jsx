import React from 'react'
import Login from './pages/Login/Login'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/register/Register'
import Protected from './component/Protected'
import{Provider} from 'react-redux'
import store from '../redux/store'
import './App.css'
import Home from './pages/home/Home'

const App = () => {
    return (
        <>
        <Provider store={store}>
            <Routes>
                 <Route path='/' element={<Protected><Home/></Protected>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                
                
            </Routes>      
        </Provider>
            
        </>
    )
}

export default App