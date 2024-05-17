import React from 'react'
import { Container, Row, Col, Button, FormGroup, Input } from 'reactstrap'
import { Carousel, Card, Stack } from "react-bootstrap";

const reviews = [
    { _id: 1, text: "abc" },
    { _id: 2, text: "def" },
    { _id: 3, text: "ghi" },
    { _id: 4, text: "jkl" },

];
function HomeTestimonials() {
  return (
    <>
           <div className='nineSec'>
                <h6>Reviewed by People</h6>
                <h2>Clients' Testimonials</h2>
                <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting.<br></br>Pretended exquisite see cordially the you. Weeks quiet do vexed.</p>
                <hr></hr>
                <div className="bg-dark bg-opacity-25 container-fluid">
                    <Container>
                        <Row>
                            <Carousel style={{ height: 500}}>
                                {reviews.map((review, index) => (
                                    <Carousel.Item key={index} style={{ height: 500 }}>

                                        <Stack
                                            direction="horizontal"
                                            className="h-100 justify-content-center align-items-center"
                                            gap={3}
                                        >
                                            <Card className='first-slide' style={{ width: "520px", height: "280px" }}>
                                                <Card.Body>
                                                    {/* <Card.Title>Card Title</Card.Title> */}
                                                    <Card.Text className='cardText '>
                                                        “Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting.”
                                                    </Card.Text>
                                                    <Row>
                                                        <Col xs="6"><img className='testimg' src={`${process.env.PUBLIC_URL}/cor3.png`} ></img></Col>
                                                        <Col xs="6"><img className='comma' src={`${process.env.PUBLIC_URL}/cor2.png`} style={{ float: "right", top: "20px" }}></img></Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                            <Card style={{ width: "520px", height: "280px" }}>
                                                <Card.Body className='second-slide' >
                                                    {/* <Card.Title>Card Title</Card.Title> */}
                                                    <Card.Text className='cardText '>
                                                        “Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting.”
                                                    </Card.Text>
                                                    <Row>
                                                        <Col xs="6"><img className='testimg' src={`${process.env.PUBLIC_URL}/cor3.png`} ></img></Col>
                                                        <Col xs="6"><img className='comma' src={`${process.env.PUBLIC_URL}/cor2.png`} style={{ float: "right", top: "20px" }}></img></Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
 
 

                                        </Stack>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Row>
                    </Container>
                </div>

            </div>

            
    </>
    

  )
}

export default HomeTestimonials