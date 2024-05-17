import React from 'react'
import { Container, Row, Col, Input, Form, Label, FormGroup, Button } from 'reactstrap'

function ContactForm() {
  return (
    <div >

      <div className='contactForm'>
      <Container>
        <Row>
          <Col xl="6" className='formcont' >
            <h3>Message Us</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially unchanged.</p>
          </Col>
          <Col xl="6">


            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">
                      Name:
                    </Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      // placeholder="with a placeholder"
                      type="Name"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">
                      Email:
                    </Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      // placeholder="password placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">
                      Phone Number:
                    </Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      // placeholder="with a placeholder"
                      type="Name"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">
                      Company Name:
                    </Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      // placeholder="password placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>


              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label for="exampleEmail">
                      Message:
                    </Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      // placeholder="with a placeholder"
                      type="textarea"
                      // minRows={6}
                      rows="6"


                    />
                  </FormGroup>
                </Col>

              </Row>

              <div className="d-grid gap-2">
                <Button variant="" size="lg" style={{ background: "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)", boxShadow: "0px 4px 15px 0px #FF5C1D66", border: "1px solid #FF5C1D" }}>
                  Ask a Question
                </Button>

              </div>

            </Form>

          </Col>

        </Row>
      </Container> </div>   
      <div>
      
        </div>  
      
    
      {/* <img src={`${process.env.PUBLIC_URL}/map.png`}  style={{width:"100%", height:"500px",marginTop:"100px"}} /> */}
    </div>
    
  )
}

export default ContactForm

