import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Button } from 'react-bootstrap'
function HomeProfessional() {
  return (
    <>
           <div className='fifthSec'>
                <Container>
                    <div className='Contsec item-center'>
                        <Row>
                            <Col lg="6"  md="6">
                                <h1>Safe with <span>Professional Chauffeured</span> Car Services</h1>
                                <p>Top Airports. Local Suppliers. 24/7 Support.</p>

                            </Col>
                            <Col lg="6"  md="6"  className='right-button'  >
                                <Button  color="primary" size="lg" style={{ background: "#FF5C1D", color: "white", border: "#FF5C1D" }}> Book Now  </Button>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </div>
     </>
  )
}

export default HomeProfessional