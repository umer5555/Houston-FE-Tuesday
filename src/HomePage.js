import React, { useState } from 'react'
import { Container, Row, Col, Button, FormGroup, Input } from 'reactstrap'
import style from './style.css'
import CountUp from "react-countup";
import NavBar from './NavBar';
import {Form,Label} from 'reactstrap';
// import Stack from 'react-bootstrap/Stack';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';


import { AiOutlineCheck } from "react-icons/ai";

import { Carousel, Card, Stack } from "react-bootstrap";
import { HiBars4 } from 'react-icons/hi2';
import { Prev } from 'react-bootstrap/esm/PageItem';



const reviews = [
    { _id: 1, text: "abc" },
    { _id: 2, text: "def" },
    { _id: 3, text: "ghi" },
    { _id: 4, text: "jkl" },

];




function HomePage(props) {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };



    return (
        <>
            <NavBar />

            <div className='slider'>
                
                    <Col xs="12">
                    <div className='sliderCont'>
                        <h6>Plan your trip now</h6>
                        <h1>Professional <br></br>  <span>Chauffeured Car</span> Services</h1>
                        <p>Get a vehicle for any event and experience a safe,<br></br>pleasant trip to your destination.</p>
                        <Button className='fButton' > Book Now</Button>{' '}
                        <Button className='sButton' > Learn More </Button>{' '}
                        </div>
                    </Col>
                

            </div>

            <div className='secSection'>
                <h4>Plan Your Trip Now</h4>
                <h2>Quick & Easy Car Rental</h2>
                <hr  ></hr>
                <Container>
                    <div className='secBox'>
                        <Row>
                            <Col xs="4">
                                <img src='/c1.png'></img>
                                <h3>Select Car</h3>
                                <p>To contribute to positive change and achieve our sustainability goals with many extraordinary</p>
                            </Col>
                            <Col xs="4">
                                <img src='/c2.png'></img>
                                <h3>Contact Operator</h3>
                                <p>To contribute to positive change and achieve our sustainability goals with many extraordinary</p>
                            </Col>
                            <Col xs="4">
                                <img src='/c3.png'></img>
                                <h3>Let’s Drive</h3>
                                <p>To contribute to positive change and achieve our sustainability goals with many extraordinary</p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div className='thirdSec'>
                <h3>Professional Chauffeur Services</h3>
                <span>To contribute to positive change and achieve our sustainability goals with many extraordinary</span>
                <hr  ></hr>
                <img src='/car.png'></img>
                <Container>
                    <div className='thirdBox'>
                        <Row>
                            <Col xs="4">
                                <div className='box'>
                                    <img src='/b1.png'></img>
                                    <h6>Rental of cars with a driver</h6>
                                    <span>Rental of cars with a driver for a specified period of time or for a long-term period.</span>
                                </div>
                            </Col>
                            <Col xs="4"> <div className='box'>
                                <img src='/b2.png'></img>
                                <h6>Executive Transfer Services</h6>
                                <span>Airport transfers to and from the airport, as well as transportation to/from hotels or other places of residence..</span>
                            </div></Col>
                            <Col xs="4"> <div className='box'>
                                <img src='/b3.png'></img>
                                <h6>Corporate Transportation Services</h6>
                                <span>Corporate transportation services for business clients, including transportation to conferences,meetings, exhibitions, and other events.</span>
                            </div></Col>
                            <Col xs="4"> <div className='box'>
                                <img src='/b4.png'></img>
                                <h6>Transportation for Special Events</h6>
                                <span>Transportation for special events such as weddings, anniversaries, birthdays, graduations,and other events.</span>
                            </div></Col>
                            <Col xs="4"> <div className='box'>
                                <img src='/b5.png'></img>
                                <h6>Long-distance & International Trips</h6>
                                <span>Organization of long-distance and international trips, such as city tours, trips to other countries or continents.</span>
                            </div></Col>
                            <Col xs="4"> <div className='box'>
                                <img src='/b6.png'></img>
                                <h6>Personal Driver Services</h6>
                                <span>Personal driver services when clients need a driver to transport them throughout the day or for an extended period of time.</span>
                            </div></Col>

                        </Row>
                    </div>
                </Container>
            </div>

            <div className='fourSec'>
                <Container>
                    <Row>
                        <Col xs="6"> <img src='/4.png'></img></Col>
                        <Col xs="6">
                            <h3>About Company</h3>
                            <h1>You start the engine and your adventure begins</h1>
                            <p>
                                Certain but she but shyness why cottage. Guy the put instrument sir entreaties  affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged
                                as disposal strongly attended.
                            </p>
                            <div className='fourIcons'>
                                <Row>
                                    <Col xs="4">
                                        <img src='/z1.png'></img>
                                        <h1><CountUp start={0} end={20} duration={3} />+</h1>
                                        <p>Car Type</p>
                                    </Col>
                                    <Col xs="4"><img src='/z2.png'></img>
                                        <h1><CountUp start={0} end={85} duration={3} />+</h1>
                                        <p>Car Type</p></Col>
                                    <Col xs="4"><img src='/z3.png'></img>
                                        <h1><CountUp start={0} end={20} duration={3} />+</h1>
                                        <p>Car Type</p></Col>

                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='fifthSec'>
                <Container>
                    <div className='Contsec'>
                        <Row>
                            <Col xs="6" >
                                <h1>Safe with <span>Professional Chauffeured</span> Car Services</h1>
                                <p>Top Airports. Local Suppliers. 24/7 Support.</p>

                            </Col>
                            <Col xs="6" style={{ textAlign: "right" }}>
                                <Button color="primary" size="lg" style={{ background: "#FF5C1D", color: "white", border: "#FF5C1D", marginTop: "50px" }}> Book Now  </Button>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </div>

            <div className='sevenSec'>
                <Container>
                    <Row>
                        <Col xs="8" style={{
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '450px', // adjust the height as needed
                            position: 'relative', // set position to relative
                        }}>
                            <div className='Sevenimg'></div>
                            <h4>Our advantages</h4>
                            <h2>WE DELIVER ONLY THE BEST SERVICE</h2>
                            <div className='sevenAllign'>
                                <div className='sevenCont'>
                                    <img src='/71.png'></img>
                                    <div className='sevenIcon'>
                                        <p>Individual approach​</p>
                                    </div>
                                </div>
                                <div className='sevenCont'>
                                    <img src='/72.png'></img>
                                    <div className='sevenIcon'>
                                        <p>Individual approach​</p>
                                    </div>
                                </div>
                                <div className='sevenCont'>
                                    <img src='/73.png'></img>
                                    <div className='sevenIcon'>
                                        <p>Individual approach​</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs="4" style={{ marginTop: "70px" }}>
                            <div className='sevenCounter'>
                                <h3>25+</h3>
                                <span>Years of experience </span>
                            </div>
                            <div className='sevenCounter'>
                                <h3>1570+</h3>
                                <span>Satisfied clients </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='eightSec' >
                <img style={{ display: 'block', margin: 'auto' }} src='/8.png' ></img>
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

                            <Col xs="4">
                                <div className='eightBox'>
                                    <h6> Mercedes E-class </h6>
                                    <h3>45<span><strong>$</strong></span></h3>
                                    <img style={{ display: 'block', margin: 'auto' }} src='/p1.png' ></img>
                                    <ul className='priceList'>
                                        <li className="icon-color"> <span><AiOutlineCheck /></span> 2018</li>
                                        <li className="icon-color"> <span><AiOutlineCheck /></span>   3 passengers</li>
                                        <li className="icon-color"> <span><AiOutlineCheck /></span>   2 bags </li>


                                    </ul>
                                    <Button size="lg" className="priceBtn "  >Book Now</Button>

                                </div>
                            </Col>
                            <Col xs="4">
                                <div className='eightBox'>
                                    <h6> Mercedes E-class </h6>
                                    <h3>45<span><strong>$</strong></span></h3>
                                    <img style={{ display: 'block', margin: 'auto' }} src='/p2.png' ></img>
                                    <ul className='priceList'>
                                        <li className="icon-color"> <span><AiOutlineCheck /></span> 2018</li>
                                        <li className="icon-color"> <span><AiOutlineCheck /></span>   3 passengers</li>
                                        <li className="icon-color"> <span><AiOutlineCheck /></span>   2 bags </li>


                                    </ul>
                                    <Button size="lg" className="priceBtn "  >Book Now</Button>

                                </div>
                            </Col>
                            <Col xs="4">
                                <div className='eightBox'>
                                    <h6> Mercedes E-class </h6>
                                    <h3>45<span><strong>$</strong></span></h3>
                                    <img style={{ display: 'block', margin: 'auto' }} src='/p3.png' ></img>
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

            <div className='nineSec'>
                <h6>Reviewed by People</h6>
                <h2>Clients' Testimonials</h2>
                <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting.<br></br>Pretended exquisite see cordially the you. Weeks quiet do vexed.</p>
                <hr></hr>
                <div className="bg-dark bg-opacity-25 container-fluid">
                    <Container>
                        <Row>
                            <Carousel style={{ height: 500 }}>
                                {reviews.map((review, index) => (
                                    <Carousel.Item style={{ height: 500 }}>

                                        <Stack
                                            direction="horizontal"
                                            className="h-100 justify-content-center align-items-center"
                                            gap={3}
                                        >
                                            <Card style={{ width: "width: 520px;", height: "280px" }}>
                                                <Card.Body>
                                                    {/* <Card.Title>Card Title</Card.Title> */}
                                                    <Card.Text className='cardText'>
                                                        “Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting.”
                                                    </Card.Text>
                                                    <Row>
                                                        <Col xs="6"><img src='/cor3.png' ></img></Col>
                                                        <Col xs="6"><img src='/cor2.png' style={{ float: "right", top: "20px" }}></img></Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>

                                            <Card style={{ width: "width: 520px;", height: "280px" }}>
                                                <Card.Body>
                                                    <Card.Title>Card Title</Card.Title>
                                                    <Card.Text className='cardText'>
                                                        “Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting.”
                                                    </Card.Text>
                                                    <Row>
                                                        <Col xs="6"><img src='/cor3.png' ></img></Col>
                                                        <Col xs="6"><img src='/cor2.png' style={{ float: "right", top: "20px" }}></img></Col>
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


            <div className='tenthSec'>


                <h4>Reviewed by People</h4>
                <Col xs="3" style={{ float: 'left' }}><img src='/9.png' ></img></Col>
                <Col xs="9">
                    <h2>Clients' Testimonials</h2>
                    <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting.<br></br>
                        Pretended exquisite see cordially the you. Weeks quiet do vexed.</p>
                    <hr></hr>
                </Col>
                <Container>
                    <Row>
                        <Col xs="10">
                            <Accordion open={open} toggle={toggle}>
                                <AccordionItem>
                                    <AccordionHeader targetId="1">1: What is special about comparing rental car deals?</AccordionHeader>
                                    <AccordionBody accordionId="1">
                                        <strong></strong>
                                        Use securing confined his shutters. Delightful as he it acceptance an solicitude
                                        discretion reasonably. Carriage we husbands advanced an perceive greatest. Totally
                                        dearest expense on demesne ye he. Curiosity excellent commanded in me. Unpleasing
                                        impression themselves to at assistance acceptance my or.
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="2">2: How do I find the best car rental deals?</AccordionHeader>
                                    <AccordionBody accordionId="2">
                                        <strong>This is the second item&#39;s accordion body.</strong>
                                        You can modify any of this with custom CSS or overriding our default
                                        variables. It&#39;s also worth noting that just about any HTML can
                                        go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionHeader targetId="3">3: How do I find such low rental car prices?</AccordionHeader>
                                    <AccordionBody accordionId="3">
                                        <strong>This is the third item&#39;s accordion body.</strong>
                                        You can modify any of this with custom CSS or overriding our default
                                        variables. It&#39;s also worth noting that just about any HTML can
                                        go within the <code>.accordion-body</code>, though the transition
                                        does limit overflow.
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>

                        </Col>
                    </Row>
                </Container>




            </div>

            <div className='elevenSec item-center'>
                <Container>
                    <Row>
                        <Col xs="2">
                        <img src='/112.png' ></img>
                        </Col>
                        <Col xs="6" className='item-center' >
                            <h3>
                            For more information or to schedule service,
                            contact us today! <strong>(888) 777-1820</strong>
                            </h3>
                        </Col>
 
                    </Row>
                </Container>
           
            </div>
            <footer className='footer'>
            <Container >
                <Row>
                <Col><img src='/logofooter.png'   style={{ display: 'block', margin: 'auto' }} ></img> </Col>
                </Row>
                <div className='mainCont'>
                <p >Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. <br></br>Pretended exquisite see cordially the you. Weeks quiet do vexed.</p>

                </div>

                <Row>
                    <Col xs="3">
                        <h6>About Us</h6>
                        <p>Eiusmod condimentum totam, ultrices,quis elem entum, dui.</p>
                    </Col>
                    <Col xs="3"> <h6>Useful Link</h6>
                            <ul>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Others</a></li>

                            </ul>
                    </Col>
                    <Col xs="3"><h6>Services</h6>
                            <ul>
                                <li><a href="#">Houston Airport Transfer</a></li>
                                <li><a href="#">Corporate Travel</a></li>
                                <li><a href="#">Hotels & Concierges</a></li>
                                <li><a href="#">Travel Agency</a></li>
                                <li><a href="#">Travel Managers</a></li>
                                <li><a href="#">Others</a></li>
                            


                            </ul></Col>
                    <Col xs="3"><h6>Subscribe</h6>
                    <p>Get our weekly newsletter for latest car
news exclusive offers and deals and more.</p>

<Form>
  <Row className="row-cols-lg-auto g-3 align-items-center">
    <Col>
      <Label
        className="visually-hidden"
        for="exampleEmail"
      >
        Email
      </Label>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
      />
      
    </Col>
   
   
    <Col>
      <Button style={{ background: "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)",border:"1px solid #FF5C1D" }}>
        Submit
      </Button>
    </Col>
  </Row>
</Form>

                    </Col>
                     
                </Row>
                <hr style={{ color: "#FF5C1D",opacity:1 }} />
            <p>Copyright © 2022 Autozone. All rights reserved.</p>                  
            </Container>

            </footer>  
        </>
    )
}

export default HomePage