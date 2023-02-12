import React from "react";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

function Modal(props) {
  return (
    <React.Fragment>
      <Backdrop onClose={props.onClick}></Backdrop>
      <ModalOverlay>{props.children}</ModalOverlay>
    </React.Fragment>
  );
}

export default Modal;
