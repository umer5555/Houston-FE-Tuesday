import React from 'react'
import { Container, Row, Col } from "reactstrap";

function AboutCompany() {
  return (
    <>
        <div className="aboutCompany">
        <Container>
          <Row>
            <Col xl="6" lg="6" md="6">
              <h6>Our Company</h6>
              <h3>
                A Glimpse into Our Vision,<br></br>Values, and Commitmentto <br></br> Excellence
              </h3>

              <p>
                Houston 365 is committed to providing high-class ground
                transportation services at competitive prices. Our team of
                drivers has a wealth of experience in delivering personalized
                chauffeur services to clients. While our fleet is driven and
                managed by professionals who have extensive experience in the
                industry.
              </p>

              <p>
                For years, we have served clients with an unwavering dedication
                to excellence. We have been delivering the highest level of
                customer care and always make sure that they arrive at their
                destination safely on time. We ensure that every time our
                vehicles arrive at our location, they are clean and stocked with
                water, ice, and amenities to always make your travel experience
                a pleasant one.
              </p>
            </Col>
            <Col xl="6" lg="6" md="6">
              
              <img src={`${process.env.PUBLIC_URL}/aboutcompany.png`} className='img-fluid' />
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default AboutCompany