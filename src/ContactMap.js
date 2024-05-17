import React from 'react'
import {Container, Row,Col } from 'reactstrap'

function ContactMap() {
  return (
    <div>
        <Container fluid>
        <Row>
    <Col  >
    <img src={`${process.env.PUBLIC_URL}/map.png` } style= {{display:"block" , width:"100%"}} className=' img-fluid '    /> 
    </Col>
  </Row>
        </Container>

    </div>
  )
}

export default ContactMap