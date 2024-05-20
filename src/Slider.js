import React from 'react'
import { Col } from 'reactstrap'
import {Button} from 'reactstrap'

function Slider() {
  return (
    <> 
        <div className='homeslider'>
                
                <Col xs="12">
                <div className='sliderCont'>
                    <h6>Plan your trip now</h6>
                    <h1>Professional <br></br>  <span>Chauffeured Car</span> Services</h1>
                    <p>Get a vehicle for any event and experience a safe,<br></br>pleasant trip to your destination.</p>
                    <Button className='fButton' style={{border:"1px solid #FF5C1D"}}> Book Now</Button>{' '}
                    <Button className='sButton' > Learn More </Button>{' '}
                    </div>
                    
                </Col>
            

        </div>
    
    
    </>
  )
}

export default Slider