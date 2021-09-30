import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import CardImg from '../assets/images/character/char6.png';

export default function SingleCard() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <div className="single_card_page">
                        <Image className="single_card_img" src={CardImg} />
                    </div>
                </Col>
            </Row>
        </>
    )
}