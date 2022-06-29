import React, { useContext } from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import { Context } from './context'

function App() {

  return (
    <>
      <Home />
      <Sidebar />
      <Modal />
    </>
  )
}

export default App
