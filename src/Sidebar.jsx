import React, { useContext } from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { Context } from './context' 

const Sidebar = () => {
  const {toggleSidebar, sidebarOpen } = useContext(Context)

  const allLinks = links.map(link => (
    <a href={link.url}  key={link.id}>{link.icon} {link.text}</a>
  ))

  const allSocialIcons = social.map(icon => (
    <a href={icon.url} key={icon.id}>{icon.icon}</a>
  ))
  
  return(
    <div className={`sidebar ${sidebarOpen ? 'show-sidebar' : ''}`}>

      <header className="sidebar-header">
        <img src={logo} alt="" className="logo"/>
        <FaTimes className="close-btn" onClick={toggleSidebar} />
      </header>

      <div className="links">
        {allLinks}
      </div>

      <div className="social-icons">
        {allSocialIcons}
      </div>
    </div>
  )
}

export default Sidebar
