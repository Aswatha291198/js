import React from 'react'
import {Routes,Route} from 'react-router'
import Home from './Pages/Home'
import WatchList from './Pages/WatchList'
import Layout from './component/LayOut'
const App = () => {
  return (
    <>
    <Layout>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/watchlist' element={<WatchList/>}></Route>
    </Routes>
  </Layout>
    </>
  )
}

export default App