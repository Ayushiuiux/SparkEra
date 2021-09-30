import React from "react";
import { Modal, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function WalletPopup(props) {

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}

            <Modal show={props.show} onHide={props.handleClose} centered>
                <Container className="wallet_popup_container">
                    <Row>
                        <div className="wallet_popup_div">
                            <Modal.Header onClick={props.handleShow} closeButton>
                                <Modal.Title>Wallet</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>User Deposit Operation</Modal.Body>
                            {/* <Modal.Footer>
                                <Button variant="secondary" onClick={props.handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={props.handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer> */}
                            <Link to="/interstellar_trader_treasured">
                                    Buy Now
                            </Link>
                        </div>
                    </Row>
                </Container>
            </Modal>
        </>
    );
}

//   render(<WalletPopup />);