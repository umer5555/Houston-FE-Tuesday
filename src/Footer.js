import React from 'react'
import { Container, Row, Col, Button, FormGroup, Input } from 'reactstrap'
import {Form,Label} from 'reactstrap';


function Footer() {
  return (
    <>
              <footer className='footer'>
            <Container >
                <Row>
                <Col><img  src={`${process.env.PUBLIC_URL}/logofooter.png`}  style={{ display: 'block', margin: 'auto' }} ></img> </Col>
                </Row>
                <div className='mainCont'>
                <p >Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. <br></br>Pretended exquisite see cordially the you. Weeks quiet do vexed.</p>

                </div>

                <Row className="justify-content-md-center">
                    <Col xl="3" lg="3" md="12">
                        <h6>About Us</h6>
                        <p>Eiusmod condimentum totam, ultrices,quis elem entum, dui.</p>
                    </Col>
                    <Col xl="3" lg="3" md="12"> <h6>Useful Link</h6>
                            <ul>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Others</a></li>

                            </ul>
                    </Col>
                    <Col xl="3" lg="3" md="12"><h6>Services</h6>
                            <ul>
                                <li><a href="#">Houston Airport Transfer</a></li>
                                <li><a href="#">Corporate Travel</a></li>
                                <li><a href="#">Hotels & Concierges</a></li>
                                <li><a href="#">Travel Agency</a></li>
                                <li><a href="#">Travel Managers</a></li>
                                <li><a href="#">Others</a></li>
                            


                            </ul></Col>
                    <Col xl="3" lg="3" md="12"><h6>Subscribe</h6>
                    <p>Get our weekly newsletter for latest car
news exclusive offers and deals and more.</p>

<Form>
  <Row className="row-cols-lg-auto g-3 align-items-center">
    <Col>
      <Label
        className="visually-hidden"
        for="exampleEmail"
      >
        Email
      </Label>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
      />
      
    </Col>
   
   
    <Col>
      <Button style={{ background: "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)",border:"1px solid #FF5C1D" }}>
        Submit
      </Button>
    </Col>
  </Row>
</Form>

                    </Col>
                     
                </Row>
                <hr style={{ color: "#FF5C1D",opacity:1 }} />
            <p>Copyright © 2022 Autozone. All rights reserved.</p>                  
            </Container>

            </footer>  
    </>
  )
}

export default Footer