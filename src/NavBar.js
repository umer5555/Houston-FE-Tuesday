import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FiMenu } from "react-icons/fi";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useRef } from "react";

function NavBar() {
    return (
        <>
            <div className="SubHeader item-center">
                <Container>
                    <Row>
                        <Col xl="3" md="4" lg="3" xxl="3" xs="6" sm="6">
                            <img src="/email.svg" />
                            <span>houston365@gmail.com</span>
                        </Col>
                        <Col xl="3" md="4" lg="3" xxl="3" xs="6" sm="6">
                            <img src="/phone.png" />
                            <span>878-3853-9576</span>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="header item-center">
    <Container>
        <Row>
            <Col lg="2">
                <img src="/logo.png" />
            </Col>
            <Col lg="8" className="menu item-center">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Fleet</a></li>
                    <li><a href="#">Health & Safety</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <div className="menubar">
                    <FiMenu />
                </div>
            </Col>
            <Col lg="2" className="login item-center">
                <div className="menubar">
                    <FiMenu />
                </div>
                <a href="#">Sign In</a>
                <Button style={{ background: "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)", border:"1px solid #FF5C1D" }}>
                    Register
                </Button>
            </Col>
        </Row>
    </Container>
</div>

        </>
    );
}

export default NavBar;
