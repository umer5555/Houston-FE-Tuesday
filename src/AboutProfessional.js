import React from 'react'
import { Container,Row,Col, Button } from 'reactstrap'

function AboutProfessional() {
  return (
    <>
        <div className=' aboutProfessional item-center'>
            <Container>
                <Row>
                    <Col xl="6"><img src={`${process.env.PUBLIC_URL}/aboutpro.png`}  /></Col>
                    <Col xl="6">
                        <h4>Professional Drivers</h4>
                        <h2>ONLY QUALIFIED CHAUFFEURS</h2>
                        <p>Houston 365 Only Qualified Chauffeurs, excellence is our driving
                            force. Our handpicked, highly skilled chauffeurs redefine luxury
                            travel, ensuring each journey is a seamless blend of
                            professionalism and sophistication. Elevate your experience with
                            the assurance that comes from choosing the best—Choose Only
                            Qualified Chauffeurs.</p>
                            <Button className='btn-lg' style={{backgroundColor:"#FF5C1D",border:"1px solid #FF5C1D"}}>Book Now</Button>
                    </Col>

                </Row>
            </Container>
        </div>
    </>
  )
}

export default AboutProfessional