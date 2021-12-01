import React from 'react';
// import { Link } from 'react-router-dom';
// import {Container} from 'react-bootstrap';
import styled from "styled-components";
import './Projects.css';
const Projects = () => {
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
    width: 10%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid #2C394B;
  }
`;
    return (

        <div id="projects">
            <Title>My Projects</Title>
            <div className="project-area">
                <div className="box">
                    <div className="imgBx">
                        <img src="https://i.ibb.co/9pBrRVL/photo-1564507592333-c60657eea523.jpg" alt="" />
                    </div>
                    <div className="content">
                        <div>
                            <h2>Carget</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, soluta?<br /><br />
                                <a href="">See Details</a>
                                <a href="">Live Website</a></p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src="https://i.ibb.co/9pBrRVL/photo-1564507592333-c60657eea523.jpg" alt="" />
                    </div>
                    <div className="content">
                        <div>
                            <h2>Carget</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, soluta?<br /><br />
                                <a href="">See Details</a>
                                <a href="">Live Website</a></p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src="https://i.ibb.co/9pBrRVL/photo-1564507592333-c60657eea523.jpg" alt="" />
                    </div>
                    <div className="content">
                        <div>
                            <h2>Carget</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, soluta?<br /><br />
                                <a href="">See Details</a>
                                <a href="">Live Website</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Projects;

//   <Circle style={{ backgroundColor: "#2C394B" }} />
//               <Circle style={{ backgroundColor: "#b9c7d2" }} />
//               <Circle style={{ backgroundColor: "var(--black)" }} />