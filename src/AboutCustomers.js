import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import CountUp from 'react-countup';
function AboutCustomers() {
  return (
    <>
     <div className='aboutcustomer item-center'>
        <Container>
        <Row>
            <Col xl="3" lg="3" md="3" sm="6" xs="12"><h3><CountUp end={100} duration={2.7}  /></h3>
                <p>Happy Customer</p>
            </Col>
            <Col xl="3" lg="3" md="3" sm="6" xs="12"><h3><CountUp end={12} duration={2.7}  /></h3>
                <p>LUXURY LIMOS</p>
            </Col>
            <Col xl="3" lg="3" md="3" sm="6" xs="12"><h3><CountUp start={800369} end={900000} duration={2.7}  /></h3>
                <p>MILES</p>
            </Col>
            <Col xl="3" lg="3" md="3" sm="6" xs="12"><h3><CountUp end={30} duration={2.7}  /></h3>
                <p>QUALIFIED CHAUFFUERS</p>
            </Col>

        </Row>
    </Container>
        </div>    
    </>

    
  )
}

export default AboutCustomers