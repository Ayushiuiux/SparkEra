import '../assets/css/header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Image } from 'react-bootstrap';

import sparkLogo from '../assets/images/spark_logo.png';
import { Link } from 'react-router-dom';

export default function LoginHeader() {
    return (
        <>
            <Navbar className="navbar_menu login_menu" expand="lg">
                <Container fluid className="px-4">
                    <Link to="/" className="navbar-brand">
                        <Image src={sparkLogo} fluid className="spark_logo"></Image>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <ul className="list-inline ms-auto mb-0 login_menu_btns">
                            <li className="list-inline-item">
                                <Link to="/" className="login_menu_btn nav-link">
                                    Language
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/" className="login_menu_btn nav-link">
                                    Wallet
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/" className="login_menu_btn nav-link">
                                    White Paper
                                </Link>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};