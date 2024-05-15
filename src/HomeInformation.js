import React from 'react'
import { Container, Row, Col } from 'reactstrap'

function HomeInformation() {
  return (
    <>
        
        <div className='elevenSec item-center'>
                <Container>
                    <Row>
                        <Col lg="2">
                        <img className='elevenimg' src={`${process.env.PUBLIC_URL}/112.png`}  /> 
                        </Col>
                        <Col lg="6" className='item-center' >
                            <h3>
                            For more information or to schedule service,
                            contact us today! <strong>(888) 777-1820</strong>
                            </h3>
                        </Col>
 
                    </Row>
                </Container>
           
            </div>
     </>
  )
}

export default HomeInformation