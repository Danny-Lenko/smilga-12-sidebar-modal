import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Context } from './context' 

const Modal = () => {
  const { modalOpen, toggleModal } = useContext(Context)

  return(
    <div className={`modal-overlay ${modalOpen ? 'show-modal' : ''}`}>
      <section className="modal-container">
        <h2>Modal Content</h2>
        <FaTimes className="close-modal-btn" onClick={toggleModal}/>
      </section>
    </div>
  )
}

export default Modal
