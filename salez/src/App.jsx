import React from 'react'
import NavBar from './components/NavBar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import FindJob from './Pages/FindJob'
import PostJob from './Pages/PostJob'

const App = () => {
  return (
    <>
    <NavBar/>    
 <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/post-job' element={<PostJob></PostJob>}></Route>
    <Route path='/find-job' element={<FindJob></FindJob>}></Route>
    </Routes>


    
    </>
  )
}

export default App