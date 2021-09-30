import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Package from '../assets/images/interstellar-page/package-grey.png'
import { useState } from 'react'
import UnpackAnimationPop from "./UnpackAnimationPop";
import SingleCard from "./SingleCard";
import Swiper from "./Swiper";

export default function OpenPackage(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    return (
        <>
            <UnpackAnimationPop show={show} setShow={setShow} handleClose={handleShow} handleClose={handleClose} card={<SingleCard/>}/>
            <UnpackAnimationPop show={show1} setShow={setShow1} handleShow1={handleShow1} handleClose={handleClose1} card={<Swiper/>}/>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="open_package_page">
                            <div className="open_package_imgDiv">
                                <Image className="op_package_img" src={Package} />
                            </div>
                            <div className="open_package_pageBtm">
                                <a href="javascript:;" onClick={handleShow} className="open_package_nextBtn col-lg-3">
                                    <div className="op_nextBtn_left">Open for the next</div>
                                    <div className="op_nextBtn_right">x 1</div>
                                </a>
                                <a href="javascript:;" onClick={handleShow1} className="open_package_allBtn col-lg-3">
                                    <div className="op_allBtn_left">Open for all</div>
                                    <div className="op_allBtn_right">x 11</div>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
};