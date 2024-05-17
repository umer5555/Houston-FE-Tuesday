import React from 'react'
import { Container, Row, Col, Button, FormGroup, Input } from 'reactstrap'
import { Carousel, Card, Stack } from "react-bootstrap";
const reviews = [
    { _id: 1, text: "abc" },
    { _id: 2, text: "def" },
    { _id: 3, text: "ghi" },
    { _id: 4, text: "jkl" },

];
function FleetLuxury() {
    return (
        <div> <div className='nineSec'>
            <h6>Reviewed by People</h6>
            <h2>Clients' Testimonials</h2>
            <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting.<br></br>Pretended exquisite see cordially the you. Weeks quiet do vexed.</p>
            <hr></hr>
            <div className="bg-dark bg-opacity-25 container-fluid">
                <Container>
                    <Row>
                        <Col xl="6"><Carousel style={{ height: 500 }}>
                            {reviews.map((review, index) => (
                                <Carousel.Item style={{ height: 500 }}>

                                    <Stack
                                        direction="horizontal"
                                        className="h-100 justify-content-center align-items-center"
                                        gap={3}
                                    >
                                        <Card className='first-slide' style={{ width: "width: 520px;", height: "400px" }}>
                                            <Card.Body>
                                                <img className='testimg' src={`${process.env.PUBLIC_URL}/f1.png`} />
                                               
                                                
                                                {/* <Card.Title>Card Title</Card.Title> */}


                                            </Card.Body>
                                        </Card>




                                    </Stack>
                                </Carousel.Item>
                            ))}
                        </Carousel></Col>
                        <Col xl="6" className='fleetcontent'>
                            <h3>Mercedes Benz S580</h3>
                            <p>The Mercedes-Benz S-Class has long been considered one of the best luxury-
                                sedans on the market. hand-crafted displays of wealth and 'bespoke'
                                exclusivity, make today's S-Class one of the best flagship luxury vehicles that
                                articulates sophistication and class.</p>
                            <ul>
                                <li> Luxurious interior</li>
                                <li> Comfortable leather seats</li>
                                <li> Customization climate control</li>
                                <li> Seats 3 passengers</li>
                            </ul> 
                            <Button style={{ background: "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)", boxShadow: "0px 4px 15px 0px #FF5C1D66", border: "1px solid #FF5C1D",size:"sm"}}>Book Now</Button>
                        </Col>
                        <Col xl="6" className='fleetcontent'>
                            <h3>Cadillac Escalade</h3>
                            <p>The incredibly popular Cadillac Escalade was built with tough minded
                                determination. You will find yourself safely at home in this stylishly
                                bold luxury SUV.</p>
                            <ul>
                                <li> Bold powerful lines and fashionable style</li>
                                <li> Bose® Discreet Surround Sound System with a dual CD/DVD player</li>
                                <li> AudioPilot® noise compensation technology</li>
                                <li> Tri-zone climate control</li>
                                <li> Luxurious leather captain’s chairs</li>
                                <li> Seats 7 passengers</li>

                            </ul> 
                            <Button style={{ background: "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)", boxShadow: "0px 4px 15px 0px #FF5C1D66", border: "1px solid #FF5C1D" }}>Book Now</Button>
                        </Col>
                        <Col xl="6"><Carousel style={{ height: 500 }}>
                            {reviews.map((review, index) => (
                                <Carousel.Item style={{ height: 500 }}>

                                    <Stack
                                        direction="horizontal"
                                        className="h-100 justify-content-center align-items-center"
                                        gap={3}
                                    >
                                        <Card className='first-slide' style={{ width: "width: 520px;", height: "400px" }}>
                                            <Card.Body>
                                                <img className='testimg' src={`${process.env.PUBLIC_URL}/f2.png`} />
                                                {/* <Card.Title>Card Title</Card.Title> */}


                                            </Card.Body>
                                        </Card>




                                    </Stack>
                                </Carousel.Item>
                            ))}
                        </Carousel></Col>
                        <Col xl="6"><Carousel style={{ height: 500 }}>
                            {reviews.map((review, index) => (
                                <Carousel.Item style={{ height: 500 }}>

                                    <Stack
                                        direction="horizontal"
                                        className="h-100 justify-content-center align-items-center"
                                        gap={3}
                                    >
                                        <Card className='first-slide' style={{ width: "width: 520px;", height: "400px" }}>
                                            <Card.Body>
                                                <img className='testimg' src={`${process.env.PUBLIC_URL}/f3.png`} />
                                                {/* <Card.Title>Card Title</Card.Title> */}


                                            </Card.Body>
                                        </Card>




                                    </Stack>
                                </Carousel.Item>
                            ))}
                        </Carousel></Col>

                        <Col xl="6" className='fleetcontent'>
                            <h3>Chevy Suburban</h3>
                            <p>The Mercedes-Benz S-Class has long been considered one of the best luxury-
                                sedans on the market. hand-crafted displays of wealth and 'bespoke'
                                exclusivity, make today's S-Class one of the best flagship luxury vehicles that
                                articulates sophistication and class.</p>
                            <ul>
                                <li> Luxurious interior</li>
                                <li> Comfortable leather seats</li>
                                <li> Customization climate control</li>
                                <li> Seats 3 passengers</li>
                            </ul>  
                            <Button style={{ background: "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)", boxShadow: "0px 4px 15px 0px #FF5C1D66", border: "1px solid #FF5C1D" }}>Book Now</Button>
                        </Col>
                        <Col xl="6" className='fleetcontent'>
                            <h3>Mercedes Benz Sprinter Van</h3>
                            <p>The incredibly popular Cadillac Escalade was built with tough minded
                                determination. You will find yourself safely at home in this stylishly
                                bold luxury SUV.</p>
                            <ul>
                                <li> Bold powerful lines and fashionable style</li>
                                <li> Bose® Discreet Surround Sound System with a dual CD/DVD player</li>
                                <li> AudioPilot® noise compensation technology</li>
                                <li> Tri-zone climate control</li>
                                <li> Luxurious leather captain’s chairs</li>
                                <li> Seats 7 passengers</li>

                            </ul>  
                            <Button style={{ background: "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)", boxShadow: "0px 4px 15px 0px #FF5C1D66", border: "1px solid #FF5C1D" }}>Book Now</Button>
                        </Col>
                        <Col xl="6"><Carousel style={{ height: 500 }}>
                            {reviews.map((review, index) => (
                                <Carousel.Item style={{ height: 500 }}>

                                    <Stack
                                        direction="horizontal"
                                        className="h-100 justify-content-center align-items-center"
                                        gap={3}
                                    >
                                        <Card className='first-slide' style={{ width: "width: 520px;", height: "400px" }}>
                                            <Card.Body>
                                                <img className='testimg' src={`${process.env.PUBLIC_URL}/f4.png`} />
                                                {/* <Card.Title>Card Title</Card.Title> */}


                                            </Card.Body>
                                        </Card>




                                    </Stack>
                                </Carousel.Item>
                            ))}
                        </Carousel></Col>
                        <Col xl="6"><Carousel style={{ height: 500 }}>
                            {reviews.map((review, index) => (
                                <Carousel.Item style={{ height: 500 }}>

                                    <Stack
                                        direction="horizontal"
                                        className="h-100 justify-content-center align-items-center"
                                        gap={3}
                                    >
                                        <Card className='first-slide' style={{ width: "width: 520px;", height: "400px" }}>
                                            <Card.Body>
                                                <img className='testimg' src={`${process.env.PUBLIC_URL}/f5.png`} />
                                                {/* <Card.Title>Card Title</Card.Title> */}


                                            </Card.Body>
                                        </Card>




                                    </Stack>
                                </Carousel.Item>
                            ))}
                        </Carousel></Col>
                        <Col xl="6" className='fleetcontent'>
                            <h3>Mercedes Benz Sprinter Volvo</h3>
                            <p>The Mercedes-Benz S-Class has long been considered one of the best luxury-
                                sedans on the market. hand-crafted displays of wealth and 'bespoke'
                                exclusivity, make today's S-Class one of the best flagship luxury vehicles that
                                articulates sophistication and class.</p>
                            <ul>
                                <li> Luxurious interior</li>
                                <li> Comfortable leather seats</li>
                                <li> Customization climate control</li>
                                <li> Seats 3 passengers</li>
                            </ul>  
                            <Button style={{ background: "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)", boxShadow: "0px 4px 15px 0px #FF5C1D66", border: "1px solid #FF5C1D" }}>Book Now</Button>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div></div>
    )
}

export default FleetLuxury