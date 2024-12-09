import React, { useState } from "react";
import "./MODAL.css";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Return null if the modal is not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
