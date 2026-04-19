import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
import Card from './Card'
import Button from './Button'
import classes from "./ErrorModal.module.css"

const ErrorModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <div className={classes.backdrop} onClick={props.onClose}/>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <Card className={classes.modal}>
                    <header className={classes.header}>
                        <h2>{props.error}</h2>
                    </header>
                    <main className={classes.content}>
                        <p>{props.message}</p>
                    </main>
                    <footer className={classes.actions}>
                        <Button onClick={props.onClose}>OK</Button>
                    </footer>
                </Card>,
                document.getElementById('modal-root')
            )}
        </>
    )
}

export default ErrorModal