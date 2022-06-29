import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { Context } from './context' 

const Home = () => {

  const { toggleSidebar, toggleModal } = useContext(Context)
  
  return(
    <main>
      <FaBars className="sidebar-toggle" onClick={toggleSidebar} />

      <button className="btn" onClick={toggleModal}>show modal</button>
    </main>
  )
}

export default Home
