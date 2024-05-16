import React from 'react'
import { Container, Row, Col } from 'reactstrap'

function HealthSafety() {
    return (
        <div className='healthSafety'>
            <Container>
                <Row>
                    <Col xl="12">
                        <h6>Our Safety </h6>
                        <h2>Your Safety Always Comes First with Our<br></br> Professional Chauffeur Service</h2>
                        <p>We believe that your ride should not only be comfortable, but as safe as possible. To ensure this, we have a variety of procedures in place to <br></br>make sure that you and your loved ones are transported with the utmost care.</p>
                        <hr />
                    </Col>
                    <Col xl="6"><img src={`${process.env.PUBLIC_URL}/safety.png`} /></Col>
                    <Col xl="6" className='healthpara'>
                        <Row>
                            <Col xl="6" ><img className='safetyimg' src={`${process.env.PUBLIC_URL}/sf1.png`} />
                                <h3>Thorough Background Checks</h3>
                                <p>All employees, both in our office and in the field,
                                    undergo extensive Federal, State, and DMV
                                    background screenings before being hired.</p>
                            </Col>
                            <Col xl="6" ><img className='safetyimg' src={`${process.env.PUBLIC_URL}/sf1.png`} />
                                <h3>Thorough Background Checks</h3>
                                <p>All employees, both in our office and in the field,
                                    undergo extensive Federal, State, and DMV
                                    background screenings before being hired.</p>
                            </Col>
                            <Col xl="6" ><img className='safetyimg' src={`${process.env.PUBLIC_URL}/sf1.png`} />
                                <h3>Thorough Background Checks</h3>
                                <p>All employees, both in our office and in the field,
                                    undergo extensive Federal, State, and DMV
                                    background screenings before being hired.</p>
                            </Col>
                            <Col xl="6" ><img className='safetyimg' src={`${process.env.PUBLIC_URL}/sf1.png`} />
                                <h3>Thorough Background Checks</h3>
                                <p>All employees, both in our office and in the field,
                                    undergo extensive Federal, State, and DMV
                                    background screenings before being hired.</p>
                            </Col>

                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HealthSafety