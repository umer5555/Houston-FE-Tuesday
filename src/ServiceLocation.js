import React from 'react'
import { Container, Row, Col } from 'reactstrap';

function ServiceLocation() {
    return (
        <div className='serviceLocation'>
            <Container>
                <Row>
                    <Col xs="6"><img src={`${process.env.PUBLIC_URL}/sl.png`} /></Col>
                    <Col xs="6" className='locationcont'>
                        <h3>BEST PRICE</h3>
                        <h2>Book A Ride Now</h2>
                        <p>Whatever your transportation needs, take our world-class chauffeuring service. We offer a diverse range of executive and luxury vehicles, and transport you to your destination safely, efficiently, and with unmatched professionalism.<br></br><span>Call us and book your ride now!</span></p>
                        <Row>
                            <Col xs="6"><h3>CYPRESS</h3>
                                <p>Address : 13038 Mills Creek Meadow Dr. Houston TX 77070</p>
                                <h3>+1-713-804-6600</h3>
                            </Col>
                            <Col xs="6"><h3>HOUSTON</h3>
                                <p>Airports We Service : George Bush Intercontinental Airport (IAH) 2800 NTerminal Rd Houston, TX 77032 , William
                                    P. Hobby Airport (HOU) 7800 Airport
                                    Boulevard · Houston, TX 77061 , West
                                    Houston Airport (IWS) 18000 Groeschke
                                    Rd Houston, TX 77084 , Ellington Airport
                                    (EFD) 11602 Aerospace Ave. Houston,
                                    TX 77034</p>
                            </Col>
                             

                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default ServiceLocation