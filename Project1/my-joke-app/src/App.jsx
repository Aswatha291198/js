import React from 'react'
import {store}from '../redux/store'
import {Provider} from 'react-redux'
import Counter from './comp/Counter'
import Timer from '../E-commerce/Home'
import User from './comp/User'
import MemoExample from './comp/MemoExample'

const App = () => {
  return (
    <>
    <Provider store={store}>
      {/* <Counter/>  */}
      <MemoExample/>
     <Timer/>
    </Provider>
      

    </>
  )
}

export default App