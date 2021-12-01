import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import develop from '../../assets/development.png'
import './Service.css';
const Service = () => {
    return (
        <>
            <h1 className="service-head">What I Do?</h1>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="main">
                            <div className="service">
                                <div className="service-logo">
                                    <img src={develop} alt="" />
                                </div>
                                <h4>Web Design</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, mollitia.</p>
                            </div>
                            <div className="shadowOne"></div>
                            <div className="shadowTwo"></div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="main">
                            <div className="service">
                                <div className="service-logo">
                                    <img src={develop} alt="" />
                                </div>
                                <h4>Web Design</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, mollitia.</p>
                            </div>
                            <div className="shadowOne"></div>
                            <div className="shadowTwo"></div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="main">
                            <div className="service">
                                <div className="service-logo">
                                    <img src={develop} alt="" />
                                </div>
                                <h4>Web Design</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, mollitia.</p>
                            </div>
                            <div className="shadowOne"></div>
                            <div className="shadowTwo"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Service;