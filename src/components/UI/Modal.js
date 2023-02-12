import React from "react";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
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
      <Backdrop></Backdrop>
      <ModalOverlay>{props.children}</ModalOverlay>
    </React.Fragment>
  );
}

export default Modal;
