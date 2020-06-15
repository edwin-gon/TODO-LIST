import React from 'react';
import Modal from './Modal';

export default function ItemModal({ show, content, closeModal }) {

  console.log(content)
  if (!show) {
    return null
  }
  const completed = content.completed.toString().toUpperCase()
  return (
    <Modal show={show} close={closeModal()}>
      <div id="modal-item">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-content title">Title:</h1>
            {/* <button className="close-modal" onClick={() => closeModal()}>X</button> */}
          </div>
          {content.title}
          <h3 className="modal-content title">Completed:</h3>
          {completed}
          <div className="modal-footer">
            <button>Submit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </Modal>)
}