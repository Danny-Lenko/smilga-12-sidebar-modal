import React, { useState, createContext } from 'react'

const Context = createContext(null)

function ContextProvider(props) {
   const [sidebarOpen, setSidebarOpen] = useState(false)
   const [modalOpen, setModalOpen] = useState(false)

   function toggleSidebar() {
      setSidebarOpen(!sidebarOpen)
   }

   function toggleModal() {
      setModalOpen(!modalOpen)
      console.log(modalOpen)
   }

   return(
      <Context.Provider value={{
         sidebarOpen,
         toggleSidebar,
         modalOpen,
         toggleModal
      }}>
         {props.children}
      </Context.Provider>
   )
}

export { Context, ContextProvider }
