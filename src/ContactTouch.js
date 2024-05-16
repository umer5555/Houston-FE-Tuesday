import React from 'react'
import { Container, Row, Col } from 'reactstrap'

function ContactTouch() {
    return (
        <div className='healthSafety '>
            <Container>
                <Row>
                    <Col xl="12">

                        <h2>Get In Touch</h2>
                        <p>To contribute to positive change and achieve our sustainability goals with many extraordinary</p>
                        <hr />
                    </Col>
                    <Col xl="4" className='touchcont'><img src={`${process.env.PUBLIC_URL}/t1.png`} />
                        <h4>Phone</h4>
                        <p>713-804-6600</p>
                    </Col>
                    <Col xl="4" className='touchcont'><img src={`${process.env.PUBLIC_URL}/t2.png`} />
                        <h4>Address</h4>
                        <p>13038 Mills Creek Meadow<br />
                            Dr.Houston, Texas 77070<br />
                            United States</p>
                    </Col>

                    <Col xl="4" className='touchcont'><img src={`${process.env.PUBLIC_URL}/t4.png`} />
                        <h4>Email</h4>
                        <p>info@houston365.net</p>
                    </Col>







                </Row>
            </Container>
        </div>
    )
}

export default ContactTouch