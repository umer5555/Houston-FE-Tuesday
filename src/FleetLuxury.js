import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, Stack } from "react-bootstrap";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";



function FleetLuxury(props) {
    var items = [
        {
           
            image:<img src={`${process.env.PUBLIC_URL}/f1.png`}  style={{width:"100%"}} />
        },
        {
           
            image:<img src={`${process.env.PUBLIC_URL}/f12.jpg`} style={{width:"100%"}}  />
        },
        {
            
            image:<img src={`${process.env.PUBLIC_URL}/f13.jpg`} style={{width:"100%"}}  />
        },
        {
            
            image:<img src={`${process.env.PUBLIC_URL}/f14.jpg`} style={{width:"100%"}}  />
        }
    ]
 

    var items2 = [
        {
           
            image:<img src={`${process.env.PUBLIC_URL}/f2.png`}  style={{width:"100%"}} />
        },
        {
            
            image:<img src={`${process.env.PUBLIC_URL}/f12.jpg`} style={{width:"100%"}}  />
        },
        {
            
            image:<img src={`${process.env.PUBLIC_URL}/f13.jpg`} style={{width:"100%"}}  />
        },
        {
            
            image:<img src={`${process.env.PUBLIC_URL}/f14.jpg`} style={{width:"100%"}}  />
        }
    ]

    
    var chevy  = [
        {
           
            image:<img src={`${process.env.PUBLIC_URL}/f3.png`}  style={{width:"100%"}} />
        },
        {
            
            image:<img src={`${process.env.PUBLIC_URL}/f12.jpg`} style={{width:"100%"}}  />
        },
        {
            
            image:<img src={`${process.env.PUBLIC_URL}/f13.jpg`} style={{width:"100%"}}  />
        },
        {
            
            image:<img src={`${process.env.PUBLIC_URL}/f14.jpg`} style={{width:"100%"}}  />
        }
    ]
    var mercedes  = [
        {
           
            image:<img src={`${process.env.PUBLIC_URL}/f4.png`}  style={{width:"100%"}} />
        },
        {
            
            image:<img src={`${process.env.PUBLIC_URL}/f12.jpg`} style={{width:"100%"}}  />
        },
        {
            
            image:<img src={`${process.env.PUBLIC_URL}/f13.jpg`} style={{width:"100%"}}  />
        },
        {
            
            image:<img src={`${process.env.PUBLIC_URL}/f14.jpg`} style={{width:"100%"}}  />
        }
    ]
    var Sprinter  = [
      {
         
          image:<img src={`${process.env.PUBLIC_URL}/f5.png`}  style={{width:"100%"}} />
      },
      {
          
          image:<img src={`${process.env.PUBLIC_URL}/f12.jpg`} style={{width:"100%"}}  />
      },
      {
          
          image:<img src={`${process.env.PUBLIC_URL}/f13.jpg`} style={{width:"100%"}}  />
      },
      {
          
          image:<img src={`${process.env.PUBLIC_URL}/f14.jpg`} style={{width:"100%"}}  />
      }
  ]
     
  return (
    <div>
      {" "}
      <div className="nineSec">
        <h6>Reviewed by People</h6>
        <h2>Clients' Testimonials</h2>
        <p>
          Certain but she but shyness why cottage. Guy the put instrument sir
          entreaties affronting.<br></br>Pretended exquisite see cordially the
          you. Weeks quiet do vexed.
        </p>
        <hr></hr>
        <div className="bg-dark bg-opacity-25 container-fluid">
          <Container>
            <Row>
            <Col xl="6" lg="6" md="6" sm="12" xs="12">
          <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
          </Col>
               
              <Col xl="6" className="fleetcontent">
                <h3>Mercedes Benz S580</h3>
                <p>
                  The Mercedes-Benz S-Class has long been considered one of the
                  best luxury- sedans on the market. hand-crafted displays of
                  wealth and 'bespoke' exclusivity, make today's S-Class one of
                  the best flagship luxury vehicles that articulates
                  sophistication and class.
                </p>
                <ul>
                  <li> Luxurious interior</li>
                  <li> Comfortable leather seats</li>
                  <li> Customization climate control</li>
                  <li> Seats 3 passengers</li>
                </ul>
                <Button
                  style={{
                    background:
                      "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)",
                    boxShadow: "0px 4px 15px 0px #FF5C1D66",
                    border: "1px solid #FF5C1D",
                    size: "sm",
                    color:"white"
                  }}
                >
                  Book Now
                </Button>
              </Col>
               
              <Col xl="6" className="fleetcontent">
                <h3>Cadillac Escalade</h3>
                <p>
                  The incredibly popular Cadillac Escalade was built with tough
                  minded determination. You will find yourself safely at home in
                  this stylishly bold luxury SUV.
                </p>
                <ul>
                  <li> Bold powerful lines and fashionable style</li>
                  <li>
                    {" "}
                    Bose® Discreet Surround Sound System with a dual CD/DVD
                    player
                  </li>
                  <li> AudioPilot® noise compensation technology</li>
                  <li> Tri-zone climate control</li>
                  <li> Luxurious leather captain’s chairs</li>
                  <li> Seats 7 passengers</li>
                </ul>
                <Button
                  style={{
                    background:
                      "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)",
                    boxShadow: "0px 4px 15px 0px #FF5C1D66",
                    border: "1px solid #FF5C1D",
                    color:"white"
                  }}
                >
                  Book Now
                </Button>
              </Col>
              
              <Col xl="6" lg="6" md="6" sm="12" xs="12">
          <Carousel>
            {
                items2.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </Col>
        <Col xl="6" lg="6" md="6" sm="12" xs="12">
          <Carousel>
            {
                chevy.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
          </Col>

              <Col xl="6" className="fleetcontent">
                <h3>Chevy Suburban</h3>
                <p>
                  The Mercedes-Benz S-Class has long been considered one of the
                  best luxury- sedans on the market. hand-crafted displays of
                  wealth and 'bespoke' exclusivity, make today's S-Class one of
                  the best flagship luxury vehicles that articulates
                  sophistication and class.
                </p>
                <ul>
                  <li> Luxurious interior</li>
                  <li> Comfortable leather seats</li>
                  <li> Customization climate control</li>
                  <li> Seats 3 passengers</li>
                </ul>
                <Button
                  style={{
                    background:
                      "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)",
                    boxShadow: "0px 4px 15px 0px #FF5C1D66",
                    border: "1px solid #FF5C1D",
                    color:"white"
                  }}
                >
                  Book Now
                </Button>
              </Col>
              <Col xl="6" className="fleetcontent">
                <h3>Mercedes Benz Sprinter Van</h3>
                <p>
                  The incredibly popular Cadillac Escalade was built with tough
                  minded determination. You will find yourself safely at home in
                  this stylishly bold luxury SUV.
                </p>
                <ul>
                  <li> Bold powerful lines and fashionable style</li>
                  <li>
                    {" "}
                    Bose® Discreet Surround Sound System with a dual CD/DVD
                    player
                  </li>
                  <li> AudioPilot® noise compensation technology</li>
                  <li> Tri-zone climate control</li>
                  <li> Luxurious leather captain’s chairs</li>
                  <li> Seats 7 passengers</li>
                </ul>
                <Button
                  style={{
                    background:
                      "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)",
                    boxShadow: "0px 4px 15px 0px #FF5C1D66",
                    border: "1px solid #FF5C1D",
                    color:"white"
                  }}
                >
                  Book Now
                </Button>
              </Col>
              <Col xl="6" lg="6" md="6" sm="12" xs="12">
          <Carousel>
            {
                Sprinter.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </Col>
        
        <Col xl="6" lg="6" md="6" sm="12" xs="12">
          <Carousel>
            {
                chevy.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
          </Col>
       
          
               
              <Col xl="6" className="fleetcontent">
                <h3>Mercedes Benz Sprinter Volvo</h3>
                <p>
                  The Mercedes-Benz S-Class has long been considered one of the
                  best luxury- sedans on the market. hand-crafted displays of
                  wealth and 'bespoke' exclusivity, make today's S-Class one of
                  the best flagship luxury vehicles that articulates
                  sophistication and class.
                </p>
                <ul>
                  <li> Luxurious interior</li>
                  <li> Comfortable leather seats</li>
                  <li> Customization climate control</li>
                  <li> Seats 3 passengers</li>
                </ul>
                <Button
                  style={{
                    background:
                      "linear-gradient(90deg, #FF5C1D 0%, #DD460C 100%)",
                    boxShadow: "0px 4px 15px 0px #FF5C1D66",
                    border: "1px solid #FF5C1D",
                    color:"white"
                  }}
                >
                  Book Now
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

function Item(props)
{
    return (
        <Paper>
            <div>{props.item.image}</div>
            {/* <p></p> */}

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
        
    )
}
function items2(props)
{
    return (
        <Paper>
            <div>{props.items2.image}</div>
            {/* <p></p> */}

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
        
    )
}
function chevy (props)
{
    return (
        <Paper>
            <div>{props.items2.image}</div>
            {/* <p></p> */}

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
        
    )
}
function mercedes (props)
{
    return (
        <Paper>
            <div>{props.items2.image}</div>
            {/* <p></p> */}

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
        
    )
}
function Sprinter (props)
{
    return (
        <Paper>
            <div>{props.items2.image}</div>
            {/* <p></p> */}

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
        
    )
}
export default FleetLuxury;
