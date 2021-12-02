import React from 'react';
import { Link } from 'react-router-dom';
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
                        <img src="https://i.ibb.co/FB4bBPp/carget-0.png" alt="" />
                    </div>
                    <div className="content">
                        <div>
                            <h2>Carget</h2>
                            <p> •	Dashboard Functionality (Admin & User Operations).<br/>
                                •	CRUD Operations on Dashboard Panel.<br />
                                •	Booking and Review system for User.<br />
                                •	Email and Google Authentication.<br />
                                •	Admin and User Role Distinction by Login.<br /><br />
                                <Link to='/carget'>See Details</Link>
                                <a href="https://carget-69504.web.app/">Live Website</a></p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src="https://i.ibb.co/87V1xQC/travello-0.png" alt="" />
                    </div>
                    <div className="content ">
                        <div>
                            <h2>Travelo</h2>
                            <p> •	Login with Google.<br />
                                •	CRUD Operations for Users.<br />
                                •	Placing and Deleting Bookings.<br /><br />
                                <Link to='/travelo'>See Details</Link>
                                <a href="http://travelo-db936.web.app/">Live Website</a></p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src="https://i.ibb.co/Lg9DS9P/fitfreak-0.png" alt="" />
                    </div>
                    <div className="content">
                        <div>
                            <h2>FitFreak</h2>
                            <p> •	Email and Google Login.<br />
                                •	Dark Mode UI.<br />
                                •	Responsive Design.<br /><br />
                                <Link to='/fitfreak'>See Details</Link>
                                <a href="https://fitfreak-345ee.firebaseapp.com/">Live Website</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Projects;