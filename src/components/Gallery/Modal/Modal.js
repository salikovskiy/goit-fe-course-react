import React from "react";

const Modal = ({ handleClose, show, url }) => {
  const showHideClassName = show ? "Overlay" : "display-none";

  return (
    <div
      className={showHideClassName}
      onClick={e => {
        if (e.target.nodeName !== "IMG") {
          handleClose();
        }
      }}
    >
      <div className="Modal">
        <img src={url} alt="" />
      </div>
    </div>
  );
};

export default Modal;
