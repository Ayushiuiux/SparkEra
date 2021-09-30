
import { Container, Col, Row, Form, InputGroup, FormControl, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LoginHeader from './LoginHeader';
import teen_esrb from '../assets/images/teen_esrb.png';

export default function Login() {
    return (
        <div className="login_page">
            <LoginHeader />
            <section className="login_page_top">
                <Container fluid className="px-4">
                    <Row>
                        <Col xs="12" md="8">
                            <div className="login_top_text">
                                <h1>Your Era Journey Starts Here</h1>
                                <p>Join SPARK ERA and become the greatest Star Trailblazer ever!</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="login_reserv mt-4">
                <Container fluid className="px-4">
                    <Row>
                        <Col xs="12" md="4">
                            <div className="reserv_form">
                                <Form>
                                    <InputGroup className="mb-3 reserv_field">
                                        <FormControl
                                            placeholder="ENTER YOUR EMAIL HERE"
                                            aria-label="ENTER YOUR EMAIL HERE"
                                            aria-describedby="basic-addon2"
                                        />
                                          <Button as="input" type="button" value="RESERVATION" className="reserv_field_btn" />
                                    </InputGroup>
                                </Form>
                            </div>
                            <div className="link_btn">
                                <Link to="/tech-center" className="recut_link">RECRUIT</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bottom_teen_brand">
                <Container fluid className="px-4">
                    <div className="teen_esrb_box">
                    <div className="teen_esrb_img">
                        <Image src={teen_esrb} fluid></Image>
                    </div>
                    <div className="teen_esrb_content">
                        <p>Blood</p>
                        <p>Fantasy Violence</p>
                        <p>Mild Suggestive Theme</p>
                        <p>Use of Alcohol and Tobacco</p>
                        <p>Online Interactions Not Rated by the ESRB</p>
                    </div>
                    </div>
                </Container>
            </section>
        </div>
    )
};