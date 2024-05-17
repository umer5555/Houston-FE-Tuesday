import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardMedia, CardActions, CardContent, Button, Typography } from '@mui/material';

function Allservices() {
    return (
        <div className='allservices item-center'>
            <Container>
                <Row>
                    <Col xl="12">
                        <div className='servicecontent'>
                            <h6>Our Services</h6>
                            <h2>Elevate Your Experience with Our Distinct Offerings</h2>
                            <p>To contribute to positive change and achieve our sustainability goals with many extraordinary</p>
                            <hr />
                        </div>
                    </Col>
                    <Row>
                        <Col xl="4" lg="4" md="6" sm="6">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia className='cardimg'
                                    sx={{ height: 200 }}
                                    image={`${process.env.PUBLIC_URL}/s1.png`}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='cardheading'>
                                        Houston Airport Transfers
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className='cardcont'>
                                        Elevate Your Airport Experience
                                        with Our Premier Chauffeur Service.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* Add buttons or other actions here if needed */}
                                </CardActions>
                            </Card>
                        </Col>
                        <Col xl="4" lg="4" md="6" sm="6">        
                        <Card sx={{ maxWidth: 345 }}>
                                <CardMedia className='cardimg'
                                    sx={{ height: 200 }}
                                    image={`${process.env.PUBLIC_URL}/s2.png`}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='cardheading'>
                                    Corporate Travel
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className='cardcont'>
                                        Elevate Your Airport Experience
                                        with Our Premier Chauffeur Service.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* Add buttons or other actions here if needed */}
                                </CardActions>
                            </Card>
                            </Col>
                        <Col xl="4" lg="4" md="6" sm="6"> <Card sx={{ maxWidth: 345 }}>
                                <CardMedia className='cardimg'
                                    sx={{ height: 200 }}
                                    image={`${process.env.PUBLIC_URL}/s3.png`}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='cardheading'>
                                    Hotels & Concierges 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className='cardcont'>
                                        Elevate Your Airport Experience
                                        with Our Premier Chauffeur Service.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* Add buttons or other actions here if needed */}
                                </CardActions>
                            </Card></Col>
                            <Col xl="4" lg="4" md="6" sm="6"> <Card sx={{ maxWidth: 345 }}>
                                <CardMedia className='cardimg'
                                    sx={{ height: 200 }}
                                    image={`${process.env.PUBLIC_URL}/s4.png`}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='cardheading'>
                                    Hotels & Concierges 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className='cardcont'>
                                        Elevate Your Airport Experience
                                        with Our Premier Chauffeur Service.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* Add buttons or other actions here if needed */}
                                </CardActions>
                            </Card></Col>
                            <Col xl="4" lg="4" md="6" sm="6"> <Card sx={{ maxWidth: 345 }}>
                                <CardMedia className='cardimg'
                                    sx={{ height: 200 }}
                                    image={`${process.env.PUBLIC_URL}/s5.png`}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='cardheading'>
                                    Executive Assistant & Admin 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className='cardcont'>
                                        Elevate Your Airport Experience
                                        with Our Premier Chauffeur Service.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* Add buttons or other actions here if needed */}
                                </CardActions>
                            </Card></Col>
                            <Col xl="4" lg="4" md="6" sm="6"> <Card sx={{ maxWidth: 345 }}>
                                <CardMedia className='cardimg'
                                    sx={{ height: 200 }}
                                    image={`${process.env.PUBLIC_URL}/s6.png`}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='cardheading'>
                                    Travel Managers 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className='cardcont'>
                                        Elevate Your Airport Experience
                                        with Our Premier Chauffeur Service.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* Add buttons or other actions here if needed */}
                                </CardActions>
                            </Card></Col>
                            <Col xl="4" lg="4" md="6" sm="6"> <Card sx={{ maxWidth: 345 }}>
                                <CardMedia className='cardimg'
                                    sx={{ height: 200 }}
                                    image={`${process.env.PUBLIC_URL}/s7.png`}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='cardheading'>
                                    Road Shows 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className='cardcont'>
                                        Elevate Your Airport Experience
                                        with Our Premier Chauffeur Service.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* Add buttons or other actions here if needed */}
                                </CardActions>
                            </Card></Col>
                            <Col xl="4" lg="4" md="6" sm="6"> <Card sx={{ maxWidth: 345 }}>
                                <CardMedia className='cardimg'
                                    sx={{ height: 200 }}
                                    image={`${process.env.PUBLIC_URL}/s8.png`}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='cardheading'>
                                    Private Jet Aviation FBO 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className='cardcont'>
                                        Elevate Your Airport Experience
                                        with Our Premier Chauffeur Service.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* Add buttons or other actions here if needed */}
                                </CardActions>
                            </Card></Col>
                            <Col xl="4" lg="4" md="6" sm="6"> <Card sx={{ maxWidth: 345 }}>
                                <CardMedia className='cardimg'
                                    sx={{ height: 200 }}
                                    image={`${process.env.PUBLIC_URL}/s9.png`}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='cardheading'>
                                    Diplomatic & Foreign Delegations
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className='cardcont'>
                                        Elevate Your Airport Experience
                                        with Our Premier Chauffeur Service.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* Add buttons or other actions here if needed */}
                                </CardActions>
                            </Card></Col>
                            <Col xl="4" lg="4" md="6" sm="6"> <Card sx={{ maxWidth: 345 }}>
                                <CardMedia className='cardimg'
                                    sx={{ height: 200 }}
                                    image={`${process.env.PUBLIC_URL}/s10.png`}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='cardheading'>
                                    National & International Trip
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className='cardcont'>
                                        Elevate Your Airport Experience
                                        with Our Premier Chauffeur Service.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* Add buttons or other actions here if needed */}
                                </CardActions>
                            </Card></Col>
                            <Col xl="4" lg="4" md="6" sm="6"> <Card sx={{ maxWidth: 345 }}>
                                <CardMedia className='cardimg'
                                    sx={{ height: 200 }}
                                    image={`${process.env.PUBLIC_URL}/s11.png`}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='cardheading'>
                                    Galveston Cruises Ride
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className='cardcont'>
                                        Elevate Your Airport Experience
                                        with Our Premier Chauffeur Service.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* Add buttons or other actions here if needed */}
                                </CardActions>
                            </Card></Col>
                            <Col xl="4" lg="4" md="6" sm="6"> <Card sx={{ maxWidth: 345 }}>
                                <CardMedia className='cardimg'
                                    sx={{ height: 200 }}
                                    image={`${process.env.PUBLIC_URL}/s12.png`}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='cardheading'>
                                    Meeting & Events
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className='cardcont'>
                                        Elevate Your Airport Experience
                                        with Our Premier Chauffeur Service.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* Add buttons or other actions here if needed */}
                                </CardActions>
                            </Card></Col>
                    </Row>
                </Row>
            </Container>
        </div>
    );
}

export default Allservices;
