import {React} from 'react'
import { Container, Row, Col } from 'reactstrap'
import CountUp from "react-countup";

function HomeCompany() {
  return (
    <><div className='fourSec'>
    <Container>
        <Row>
            <Col lg="6" md="12" sm="12" > <img className='mainimg' src='/4.png'></img></Col>
            <Col  lg="6" md="12" sm="12">
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
                            <p><span>Car Type</span></p>
                        </Col>
                        <Col xs="4"><img src='/z2.png'></img>
                            <h1><CountUp start={0} end={85} duration={3} />+</h1>
                            <p><span>Car Rental Outlets</span></p></Col>
                        <Col xs="4"><img src='/z3.png'></img>
                            <h1><CountUp start={0} end={20} duration={3} />+</h1>
                            <p><span>Car Repair Shop</span></p></Col>

                    </Row>
                </div>
            </Col>
        </Row>
    </Container>
</div></>
  )
}

export default HomeCompany