import React from 'react'
import { Container, Row, Col, Button, FormGroup, Input } from 'reactstrap'


function CarRental() {
  return (
    <> 
    <div className='secSection'>
                <h4>Plan Your Trip Now</h4>
                <h2>Quick & Easy Car Rental</h2>
                <hr  ></hr>
                <Container>
                    <div className='secBox'>
                        <Row>
                            <Col lg="4" >
                                <img src='/c1.png'></img>
                                <h3>Select Car</h3>
                                <p>To contribute to positive change and achieve our sustainability goals with many extraordinary</p>
                            </Col>
                            <Col lg="4">
                                <img src='/c2.png'></img>
                                <h3>Contact Operator</h3>
                                <p>To contribute to positive change and achieve our sustainability goals with many extraordinary</p>
                            </Col>
                            <Col lg="4">
                                <img src='/c3.png'></img>
                                <h3>Let’s Drive</h3>
                                <p>To contribute to positive change and achieve our sustainability goals with many extraordinary</p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

    
    
    </>
  )
}

export default CarRental