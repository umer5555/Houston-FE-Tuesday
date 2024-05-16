import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'


function ServicesProfessional() {
    return (
        <>
            <div className=' aboutProfessional item-center' >
                <Container>
                    <Row>
                        <Col xl="6" lg="6" md="6" sm="12" xs="12"><img src={`${process.env.PUBLIC_URL}/sp.png`} /></Col>
                        <Col xl="6" lg="6" md="6" sm="12" xs="12">
                            <h4>Professional Drivers</h4>
                            <h2>Chauffeur Services in Over 1200 Cities Worldwide</h2>
                            <p style={{fontSize:"15px"}}>Any company can drive someone from point A to point B. We pride
                                ourselves on being much more than just a chauffeur service by
                                hiring only the best. As a high-end chauffeur service, we offer the
                                best in elegance and luxury and provide a wide assortment of
                                beautiful, opulent vehicles at your disposal. Let us professionally
                                handle your transportation needs. Work with the leading professionals
                                of chauffeured hospitality and you’ll quickly see why we are considered
                                world-class.</p>
                            <Button className='btn-lg' style={{ backgroundColor: "#FF5C1D", border: "1px solid #FF5C1D" }}>Book Now</Button>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ServicesProfessional