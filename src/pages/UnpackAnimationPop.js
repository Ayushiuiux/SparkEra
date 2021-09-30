import React from 'react'
import { Container, Row, Modal } from 'react-bootstrap'

export default function UnpackAnimationPop(props) {
    return (
        <>
            <Modal className="unpacking_anmtn" show={props.show} onHide={props.handleClose} centered>
                <Modal.Header closeButton></Modal.Header>
                <Container className="wallet_popup_container">
                    <Modal.Body>{props.card} </Modal.Body>
                </Container>
            </Modal>
        </>
    )
}
