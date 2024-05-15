import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import { Container, Row, Col, Button } from 'reactstrap'

function HomePricing() {
  return (
    <>
          <div className='eightSec' >
                <img style={{  }} className='eightimg' src={`${process.env.PUBLIC_URL}/8.png`} ></img>
                <Container>
                    <Row>
                        <h6>FINEST TRANSPORT</h6>
                        <Col xs="6">

                            <h3>Our fleet with maximum comfort</h3>
                        </Col>

                        <Col xs="6">
                            <Button color="primary" size="lg" style={{ float: "right", background: "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)", color: "white", border: "#FF5C1D" }}> Book Now  </Button>
                        </Col>

                    </Row>
                </Container>
                <Container>
                    <div className='eightPriceBox'>
                        <Row>

                            <Col xl="4" lg="12" md="12">
                                <div className='eightBox'>
                                    <h6> Mercedes E-class </h6>
                                    <h3>45<span><strong>$</strong></span></h3>
                                    <img    className='priceimg' src={`${process.env.PUBLIC_URL}/p1.png`} ></img>
                                    <ul className='priceList'>
                                        <li className="icon-color"> <span><AiOutlineCheck /></span> 2018</li>
                                        <li className="icon-color"> <span><AiOutlineCheck /></span>   3 passengers</li>
                                        <li className="icon-color"> <span><AiOutlineCheck /></span>   2 bags </li>


                                    </ul>
                                    <Button size="lg" className="priceBtn "  >Book Now</Button>

                                </div>
                            </Col>
                            <Col xl="4" lg="12" md="12">
                                <div className='eightBox'>
                                    <h6> Mercedes E-class </h6>
                                    <h3>45<span><strong>$</strong></span></h3>
                                    <img   className='priceimg' src={`${process.env.PUBLIC_URL}/p2.png`} ></img>
                                    <ul className='priceList'>
                                        <li className="icon-color"> <span><AiOutlineCheck /></span> 2018</li>
                                        <li className="icon-color"> <span><AiOutlineCheck /></span>   3 passengers</li>
                                        <li className="icon-color"> <span><AiOutlineCheck /></span>   2 bags </li>


                                    </ul>
                                    <Button size="lg" className="priceBtn "  >Book Now</Button>

                                </div>
                            </Col>
                            <Col xl="4" lg="12" md="12">
                                <div className='eightBox'>
                                    <h6> Mercedes E-class </h6>
                                    <h3>45<span><strong>$</strong></span></h3>
                                    <img   className='priceimg' src={`${process.env.PUBLIC_URL}/p3.png`} ></img>
                                    <ul className='priceList'>
                                        <li className="icon-color"> <span><AiOutlineCheck /></span> 2018</li>
                                        <li className="icon-color"> <span><AiOutlineCheck /></span>   3 passengers</li>
                                        <li className="icon-color"> <span><AiOutlineCheck /></span>   2 bags </li>


                                    </ul>
                                    <Button size="lg" className="priceBtn "  >Book Now</Button>

                                </div>
                            </Col>


                        </Row>
                    </div>
                </Container>
            </div>
    </>
  )
}

export default HomePricing