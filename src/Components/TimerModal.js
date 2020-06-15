import React from 'react';
import Modal from './Modal';

//Makes reference of Modal and design specfic modal
export default function TimerModal({ show, closeModal }) {
  console.log(show)
  if (!show) {
    return null
  }
  // const completed = content.completed.toString().toUpperCase()
  return (<Modal show={show} closeModal={() => closeModal()}>
    <div id="modal-timer">
      <div className="modal-content">
        {"25:00"}
        {/* Add or adjust rest period */}
        <div className="modal-footer">
          <button>Start</button>
          <button>Stop</button>
          <button>Reset</button>
        </div>
      </div>
    </div>
  </Modal>)
}
