import React from 'react';

const Modal = props => {
  if (!props.show)
    return null
  else
    return (<div id="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="title">{props.title}</h3>
          <p className="close-modal" onClick={() => props.close()}>X</p>
        </div>
        {props.children}
      </div>
    </div>)
}
export default Modal;