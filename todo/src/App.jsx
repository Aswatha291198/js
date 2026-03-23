import React from 'react'
import Input from './comp/input/Input'
import { store } from './redux/slices/store'
import {Provider} from 'react-redux'
import List from './comp/list/List'
import Card from './comp/Card'
import './App.css'
function App() {
  return (
    <>
    <Provider store={store}>
    <Input />
    <List/>
    <Card/>
    </Provider>
     
    </>

  )
}

export default App