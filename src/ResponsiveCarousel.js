import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Container, Row, Col } from 'reactstrap'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


function ResponsiveCarousel(props) {
  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        image:<img src={`${process.env.PUBLIC_URL}/f1.png`}  style={{width:"100%"}} />
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        image:<img src={`${process.env.PUBLIC_URL}/f12.jpg`} style={{width:"100%"}}  />
    }
]

  return (
    <div>   
      <Container>
        <Row>
          <Col xl="6" lg="6" md="6" sm="12" xs="12">
          <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
          </Col>
        </Row>
      </Container>

    </div>
  )
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

export default ResponsiveCarousel