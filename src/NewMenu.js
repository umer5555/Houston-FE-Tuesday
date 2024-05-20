import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row,Col } from 'reactstrap';
import FleetLuxury from './FleetLuxury'
import HomeInformation from './HomeInformation'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HostonMenu from './HostonMenu';
function NewMenu() {
  return (
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
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
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
                  <Nav.Link href="#action2">Fleet</Nav.Link>
                  <Nav.Link href="#action2">Health & Safety</Nav.Link>
                  <Nav.Link href="#action2">Contact Us</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
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
  )
}

export default NewMenu