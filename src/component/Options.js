import React from 'react';
import { Container, Button, Col } from 'react-bootstrap';

export default function Options({ healthy, setHealthy }) {
    return (
        <> {healthy ? (
            <Container className='py-4'>
                <div className='p-5 mb-4 bg-light rounded-3'>
                    <Container fluid={true} className='py-5'>
                        <h1 className='display-5 fw-bold'> Keep it healthy </h1>
                            <Col xs={12} md={8}>
                                <Button className='mt-3' variant='success'>
                                    Add Avocado
                                </Button>
                            </Col>
                            <Col xs={12} md={8}>
                                <Button className='mt-3' variant='success'>
                                    Wrap it in lettuce
                                </Button>
                            </Col>
                            <Col xs={12} md={8}>
                                <Button className='mt-3' variant='success'>
                                    Substitute side for salad
                                </Button>
                            </Col>
                            <Col xs={12} md={8}>
                                <Button className='mt-3' onClick={() => setHealthy(!healthy)} variant='primary'>
                                    Ehhh i might want some cheese
                                </Button>
                            </Col>
                    </Container>
                </div>
            </Container>
        ) : (
            <Container className='py-4'>
                <div className='p-5 mb-4 bg-light rounded-3'>
                    <Container fluid={true} className='py-5'>
                        <h1 className='display-5 fw-bold'> I worked out today </h1>
                        <Col xs={12} md={8}>
                                <Button className='mt-3' variant='primary'>
                                    Add Cheese
                                </Button>
                            </Col>
                            <Col xs={12} md={8}>
                                <Button className='mt-3' variant='primary'>
                                    Hold the lettuce
                                </Button>
                            </Col>
                            <Col xs={12} md={8}>
                                <Button className='mt-3' variant='primary'>
                                    Large Fries
                                </Button>
                            </Col>
                            <Col xs={12} md={8}>
                                <Button className='mt-3' onClick={() => setHealthy(!healthy)} variant='success'>
                                    Lets keep it healthy
                                </Button>
                            </Col>
                    </Container>
                </div>
            </Container>
        )}
        </>
    )
}