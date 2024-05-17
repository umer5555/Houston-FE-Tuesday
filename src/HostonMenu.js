import React from 'react'
import { Helmet } from 'react-helmet'

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
        <nav>

          <Container>
            <Row className='item-center'>
              <Col lg="2" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}  > <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
                <FiMenu onClick={toggleMenu} /></Col>
              <Col lg="8" className='container-fluid'  >
                <ul className={isMenuOpen ? 'show-menu' : 'hide-menu'}>
                  <li> <Link to="/">Home </Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/fleet">Fleet</Link></li>
                  <li><Link to="/health">Health & Safety</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li>Sign In </li>
                  <li><Button style={{ background: "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)", border: "1px solid #FF5C1D" }}>
                    Register
                  </Button></li>


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
    

    </>
   
  )
}

export default HostonMenu