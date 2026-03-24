import React from 'react'
import {Routes,Route} from 'react-router'
import Home from './Pages/Home'
import WatchList from './Pages/WatchList'
import Layout from './component/LayOut'
import MovieContextProvider from './store/Movies-context'
const App = () => {
  return (
    <>
    <MovieContextProvider>
    <Layout>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/watchlist' element={<WatchList/>}></Route>
    </Routes>
  </Layout>
  </MovieContextProvider>
    </>
  )
}

export default App