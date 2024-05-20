import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';

import { Container, Row, Col, Button } from 'reactstrap'
import './menustyle.css';
import './mediaqueries.css';

import { FiMenu } from "react-icons/fi";
import { useState } from 'react';

import {
  BrowserRouter as Router,
   
  Link,
} from "react-router-dom";


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./component/home";
// import About from "./component/about";
// import Contact from "./component/contact";

import About from './About';


function HostonMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
    console.log("Menu toggled");

  }



  return (
  
 <>
 
        <div className='subHeader item-center'>
          <Container>
            <Row>
              <Col lg="3" sm="6" md="4" xl="3" xs="6"> <img src={`${process.env.PUBLIC_URL}/email.svg`} />
                <span>houston365@gmail.com</span></Col>
              <Col lg="3" sm="6" md="4" xl="3" xs="6"><img src={`${process.env.PUBLIC_URL}/phone.png`} />
                <span>878-3853-9576</span></Col>

            </Row>
          </Container>
        </div>
        <nav className='desktopmenu'>

          <Container>
            <Row className='item-center'>
              <Col lg="2" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}  > <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
                <FiMenu onClick={toggleMenu} /></Col>
              <Col lg="8" className='container-fluid'  >
                <ul className={isMenuOpen ? 'show-menu' : 'hide-menu'}>
                  <li><a href="#"> <Link to="/">Home </Link></a></li>
                  <li><a href="#"><Link to="/about">About</Link></a></li>
                  <li><a href="#"><Link to="/services">Services</Link></a></li>
                  <li><a href="#"><Link to="/fleet">Fleet</Link></a></li>
                  <li><a href="#"><Link to="/health">Health & Safety</Link></a></li>
                  <li><a href="#"><Link to="/contact">Contact Us</Link></a></li>
                  <li><a href="#">Sign In </a></li>
                  <li><a href="#"><Button style={{ background: "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)", border: "1px solid #FF5C1D" }}>
                    Register
                  </Button></a></li>


                </ul>
                
              </Col>
              <Col lg="2" className="login item-center">

                <a href="#">Sign In</a>
                <Button style={{ background: "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)", border: "1px solid #FF5C1D" }}>
                  Register
                </Button>
              </Col>
            </Row>
          </Container>
        </nav>

        <div className='mobilenave'> 
        {/* <HostonMenu /> */}
         {/* <HomeInformation /> */}
    
    {[false,].map((expand) => (
        <Navbar key={expand} expand={expand} className=" bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <NavDropdown 
                    title="Services" 
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/fleet">Fleet</Nav.Link>
                  <Nav.Link href="/health">Health & Safety</Nav.Link>
                  <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav>
                
                <Nav className="justify-content-end ">
                                  <Nav.Link href="#action2">Sign In</Nav.Link>
                </Nav>
                  <Button style={{
                    background:
                      "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)",
                    boxShadow: "0px 4px 15px 0px #FF5C1D66",
                    border: "1px solid #FF5C1D",
                    color:"white"
                  }}  >Register</Button>
                 
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

   
</div>
    

    </>
   
  )
}

export default HostonMenu