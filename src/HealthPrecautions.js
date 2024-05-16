import React from 'react'
import { Container, Row, Col } from 'reactstrap'

function HealthPrecautions() {
    return (
        <div className='healthPrecautions healthSafety'>


            <Container>
                <Row>
                    <Col xl="12">
                        <h6>Our Safety </h6>
                        <h2>Precautions for COVID-19</h2>
                        <hr />
                    </Col>
                    <Col xl="6">
                        <p>For Houston 365 there is nothing more important than our passenger’s safety and
                            well being. As COVID-19 continues to spread, we are making efforts to protect our
                            passengers and get to their destination safely and healthy.</p>

                        <p>We are taking serious measures to ensure the health and safety of our clients. We
                            are disinfecting our vehicles with Electrostatics foggers, between passenger
                            changes. Further, we have asked all our chauffeurs to wear face coverings to
                            protect themselves as well as our clients. Additionally, we are also supplying hand
                            sanitizers, and face masks and gloves upon request made at the time of booking to
                            our clients to make their journey safer.</p>
                    </Col>
                    <Col xl="6"><img src={`${process.env.PUBLIC_URL}/covid.png`} className='covid' /></Col>

                </Row>
            </Container>
        </div>
    )
}

export default HealthPrecautions