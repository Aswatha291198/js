import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { Provider } from 'react-redux'
import store from './redux/store'
import Home from './pages/Home'
import { Recruiter } from './pages/recruiter/Recruiter'
import Candidate from './pages/candidate/Candidate'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <>
      <Provider store={store}>
        
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/recruiter' element={<ProtectedRoute><Recruiter /></ProtectedRoute>}></Route>
          <Route path='/candidate' element={<ProtectedRoute><Candidate/></ProtectedRoute>}></Route>
        </Routes>
      </Provider>




    </>
  )
}

export default App