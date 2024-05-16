import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Input from 'reactstrap'
function ContactForm() {
  return (
    <div className='contactForm'>

        <Container>
            <Row>
                <Col xl="6" className=''>
                    <h3>Message Us</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book. It has survived not only five centuries, but also
the leap into electronic typesetting, remaining essentially unchanged.</p>
                </Col>
                <Col xl="6">
</Col>

            </Row>
        </Container>
    </div>
  )
}

export default ContactForm