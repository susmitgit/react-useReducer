import React, { useEffect, useRef } from "react";

const Modal = ({ text, closeModal }) => {
  //console.log(props);
  const modalContainer = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      //console.log("Set time call", "==>");
      closeModal();
    }, 3000);
  });
  return (
    <div id="modal" className="modal" ref={modalContainer}>
      {text}
    </div>
  );
};
export default Modal;
