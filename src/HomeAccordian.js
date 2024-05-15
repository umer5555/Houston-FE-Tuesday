import React from 'react'
import { Container, Row, Col, Button, FormGroup, Input } from 'reactstrap'
import { useState,useEffect } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import { AiOutlineCheck } from "react-icons/ai";

function HomeAccordian() {
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
         <div className='tenthSec'>


<h4>Reviewed by People</h4>
<Col lg="3" xs="12" md="10" style={{ float: 'left' }}><img  className='accimg' src={`${process.env.PUBLIC_URL}/9.png`} ></img></Col>
<Col lg="9" md="10">
    <h2>Clients' Testimonials</h2>
    <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting.<br></br>
        Pretended exquisite see cordially the you. Weeks quiet do vexed.</p>
    <hr></hr>
</Col>
<Container>
    <Row>
        <Col lg="8" xl="12" md="10"  className='container-fluid'  >
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
     </>
  )
}

export default HomeAccordian