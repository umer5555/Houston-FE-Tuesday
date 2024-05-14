import React from 'react'
import { Container, Row, Col, } from 'reactstrap'

function HomeAdvantages() {
  return (
    <>
         <div className='sevenSec'>
                <Container>
                    <Row>
                        <Col lg="8"  md="12" style={{
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
                                        <p>Comfort & Safety</p>
                                    </div>
                                </div>
                                <div className='sevenCont'>
                                    <img src='/73.png'></img>
                                    <div className='sevenIcon'>
                                        <p>Professional drivers</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4" md="12" >
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
    </>
  )
}

export default HomeAdvantages