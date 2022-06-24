import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ open, children, onClose }) {
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <div onClick={onClose} className='modal-custom'>
      <div className='modal-inner'>{children}</div>
    </div>,
    document.getElementById('portal')
  );
}

export default Modal;
