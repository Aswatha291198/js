import React from 'react'
import Input from './comp/input/Input'
import { store } from './redux/slices/store'
import {Provider} from 'react-redux'
import List from './comp/list/List'

function App() {
  return (
    <>
    <Provider store={store}>
    <Input />
    <List/>

    </Provider>
     
    </>

  )
}

export default App