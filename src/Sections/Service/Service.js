import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from "styled-components";
import develop from '../../assets/development.png';
import './Service.css';
const Service = () => {
    const Title = styled.h1`
  color: #0a0b10;
  /* display: inline-block; */
  font-size: calc(1rem + 1.5vw);
  margin-top: 2rem;
  text-align: center;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 40%;
    position: absolute;
    margin: 20px auto 20px;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 2rem);
    /* or 100px */
    border-bottom: 2px solid #2C394B;
  }
`;
    return (
        <React.Fragment>
            <Title>What I Do?</Title>
            <Container id="services">
                <Row className="my-5">
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
        </React.Fragment>
    );
};

export default Service;