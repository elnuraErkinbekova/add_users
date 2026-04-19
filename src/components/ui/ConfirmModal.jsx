import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ConfirmModal.module.css";

const ConfirmModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.backdrop} onClick={props.onCancel} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>

          <main className={classes.content}>
            <p>{props.message}</p>
          </main>

          <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>YES</Button>
            <Button onClick={props.onCancel}>NO</Button>
          </footer>
        </Card>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ConfirmModal;