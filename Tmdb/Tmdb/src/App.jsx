import React from 'react'
import {Routes,Route} from 'react-router'
import Home from './Pages/Home'
import WatchList from './Pages/WatchList'
import Layout from './component/LayOut'
import MovieContextProvider from './store/Movies-context'
import WatchListContextProvider from './store/WatchList-context'
const App = () => {
  return (
    <>
    <MovieContextProvider>
      <WatchListContextProvider>
    <Layout>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/watchlist' element={<WatchList/>}></Route>
    </Routes>
  </Layout>
  </WatchListContextProvider>

  </MovieContextProvider>
    </>
  )
}

export default App