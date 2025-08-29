import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="mil-modal">
      <div className="mil-model-content">
        <button className="mil-modal-close" onClick={onClose}>
          ✖
        </button>
        <div className="mil-modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;