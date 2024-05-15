import React from 'react'
import { Container, Row, Col } from 'reactstrap'

function HomeServices() {
  return (
    <> 
    <div className='thirdSec'>
                <h3>Professional Chauffeur Services</h3>
                <span>To contribute to positive change and achieve our sustainability goals with many extraordinary</span>
                <hr  ></hr>
                <img className='carimg' src={`${process.env.PUBLIC_URL}/car.png`}></img>
                <Container>
                    <div className='thirdBox'>
                        <Row>
                            <Col lg="4" xs="12">
                                <div className='box'>
                                    <img src={`${process.env.PUBLIC_URL}/b1.png`}></img>
                                    <h6>Rental of cars with a driver</h6>
                                    <span>Rental of cars with a driver for a specified period of time or for a long-term period.</span>
                                </div>
                            </Col>
                            <Col lg="4" xs="12"> <div className='box'>
                                <img src={`${process.env.PUBLIC_URL}/b2.png`}></img>
                                <h6>Executive Transfer Services</h6>
                                <span>Airport transfers to and from the airport, as well as transportation to/from hotels or other places of residence..</span>
                            </div></Col>
                            <Col lg="4" xs="12"> <div className='box'>
                                <img src={`${process.env.PUBLIC_URL}/b3.png`}></img>
                                <h6>Corporate Transportation Services</h6>
                                <span>Corporate transportation services for business clients, including transportation to conferences,meetings, exhibitions, and other events.</span>
                            </div></Col>
                            <Col lg="4" xs="12"> <div className='box'>
                                <img src={`${process.env.PUBLIC_URL}/b4.png`}></img>
                                <h6>Transportation for Special Events</h6>
                                <span>Transportation for special events such as weddings, anniversaries, birthdays, graduations,and other events.</span>
                            </div></Col>
                            <Col lg="4" xs="12"> <div className='box'>
                                <img src={`${process.env.PUBLIC_URL}/b5.png`}></img>
                                <h6>Long-distance & International Trips</h6>
                                <span>Organization of long-distance and international trips, such as city tours, trips to other countries or continents.</span>
                            </div></Col>
                            <Col lg="4" xs="12"> <div className='box'>
                                <img src={`${process.env.PUBLIC_URL}/b6.png`}></img>
                                <h6>Personal Driver Services</h6>
                                <span>Personal driver services when clients need a driver to transport them throughout the day or for an extended period of time.</span>
                            </div></Col>

                        </Row>
                    </div>
                </Container>
            </div>
    </>
  )
}

export default HomeServices