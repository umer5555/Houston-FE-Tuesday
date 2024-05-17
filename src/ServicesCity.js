import React from 'react'
import {Container, Row, Col } from 'reactstrap';
import { Card, CardMedia, CardActions, CardContent, Button, Typography } from '@mui/material';

function ServicesCity() {
  return (
    
    <div className='allservicescity item-center '>
    <Container>
        <Row>
            <Col xl="12">
                <div className='servicecontent'>
                    <h6>Houston City Limo</h6>
                    <h2>+1-713-804-6600</h2>
                    <p>Professional and safe chauffeured transportation is what sets us apart.</p>
                    <hr />
                </div>
            </Col>
            <Row>
                <Col xl="4" lg="4" md="4" sm="12">
                    <div className='serviceBox'>
                    <img src={`${process.env.PUBLIC_URL}/ss1.png`}  />
                        <h3>Stability, Integrity & Consistency</h3>
                        <p>We are on the verge to become industry leaders, with outstanding service quality and sound business practices.</p>
                    </div>
                </Col>
                <Col xl="4" lg="4" md="4" sm="12">   
                    <div className='serviceBox'>
                    <img src={`${process.env.PUBLIC_URL}/ss2.png`}  />
                        <h3>Proficient Chauffeur Staff</h3>
                        <p>We have the best trained and most experienced chauffeur staff that is committed to provide a great drive experience..</p>
                    </div>
                </Col>  
                <Col xl="4" lg="4" md="4" sm="12"> 
                    <div className='serviceBox'>
                    <img src={`${process.env.PUBLIC_URL}/ss3.png`}  />
                        <h3>Up-To-Date Fleet</h3>
                        <p>Our fleet consists of the latest executive class vehicles and is maintained to the highest industry standards.</p>
                    </div>
                </Col>              
                </Row>

                
        </Row>
    </Container>
</div>
   
  )
}

export default ServicesCity