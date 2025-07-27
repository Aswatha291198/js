import React from 'react'
import Login from './pages/Login/Login'
import Register from './pages/register/Register'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { Provider } from 'react-redux'
import store from '../src/redux/store'
import Home from './pages/home/Home'
import UsersDashBoard from './pages/candidate/Index'
import Recruiter from './pages/recruiter'
const App = () => {
    return (
        <>
            <Provider store={store}>
                
                <Routes>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                    <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
                    <Route path='/userProfile' element={<ProtectedRoute><UsersDashBoard/></ProtectedRoute>}></Route>
                    <Route path='/recruiter' element={<ProtectedRoute><Recruiter/></ProtectedRoute>}></Route>
                </Routes>
            </Provider>



        </>
    )
}

export default App