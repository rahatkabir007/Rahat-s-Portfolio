import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer';
import HeroSection from '../../Hero';

const FitFreak = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <Container>

                <Row>
                    <Link to="/home" style={{ width: '50%', margin: '20px auto 0 auto', textAlign: 'center', textDecoration: "none", backgroundColor: "#b9c7d2", color: "black", padding: "10px 7px", borderRadius: "5px" }}>Return To Home Page</Link>
                    <Col lg={7} className="left-side">
                        <Row>
                            <img src="     https://i.ibb.co/WFrS7Xw/fitfreak-1.png" alt="" />
                            <img src=" https://i.ibb.co/NyLXjv0/fitfreak-2.png" alt="" />
                            <div className="second-img">
                                <img src=" https://i.ibb.co/sQHwbKT/fitfreak-3.png" alt="" />
                              
                            </div>

                        </Row>
                    </Col>
                    <Col lg={5} className="px-4 my-5">
                        <h1>Website Title: FitFreak</h1>
                        <p className="mt-4">
                            Key Features:<br />
                            •	Email and Google Login.<br />
                            •	Dark Mode UI.<br />
                            •	Responsive Design.<br /><br />
                            <p>Technology & Tools:  React.js, React Router, Firebase.</p><br /><br />
                            <a href="https://fitfreak-345ee.web.app/" style={{ textDecoration: "none", backgroundColor: "#b9c7d2", color: "black", marginright: "6px", padding: "10px 7px", borderRadius: "5px" }}>Live Website</a>
                        </p>
                        <p className="mt-3" style={{ lineHeight: '30px' }}>
                            Details: <br />
                            My Website is about Fitness And Gym Related. It mainly focuses on a gym training center which guides and teaches people to have a good fitness.

                            This was a really big project for me. I have designed this website with utmost care!

                            I will break down my full website designing in 5 breakpoints.<br />

                            1) UI Designing<br />
                            - I have gotten my idea of the website from colorlib. I researched a lot of website to go perfectly with my taste.<br />
                            - I have divide my website in 5 pages excludin signin/signup.<br />
                            - Each page has different contents.<br />
                            - The home page has different type of sections.<br />
                            - I have used Bootstarp cdn and react bootstrap to design the responsiveness of the UI.<br />
                            - Mostly used 3 colors throughout the website.<br />
                            - Every page has header and footer.<br />
                            - I have created a not found page too in case pages are not available.<br />
                            2) Structure<br />
                            - I have divided the websites in to various components.<br />
                            - The src file have hooks ,context and components in different folder.<br />
                            - The component folder has A main Folder call pages. Where i have kept all of the Navs and their selective pages individually.<br />
                            - The Home folder has various child components on it!<br />
                            - Also i placed the privateroute folder in the signin component.<br />
                            3) Data
                            - I have fetched data from public folder which i myself created for the website.<br />
                            - Gave the json files datas individual keys to avoid warning.<br />
                            - Most of the images are url based and are from pexels.<br />
                            4) Router
                            - I have implemented react router dom.<br />
                            - This helps us to walk thorugh between different pages without reloading.<br />
                            - I have placed the routes on app.js ! and wrapped them around Authcontext. Every route has there different loctions.<br />
                            - I have implemented dynamic route on the service section of the home page to redirect us to selected data's detailed information.<br />
                            5) Firebase Authentication<br />
                            - The most tricky part was firebase authentication<br />
                            - i have created a firebase project and hosted my files on it as an web app.<br />
                            - i have implemented two authorization for my sign in.<br />
                            - First one is with using google and second one with email and password.<br />
                            - The user information will be stored on my firebase project.<br />
                            - I have also implement verification of email, reset password.<br />
                            - The header shows the users name everytime the user signs in.<br />

                            This project was really important part for me! I really enjoyed doing it!
                        </p>
                    </Col>
                    <Link to="/home" style={{ width: '50%', margin: '20px auto 0 auto', textAlign: 'center', textDecoration: "none", backgroundColor: "#b9c7d2", color: "black", padding: "10px 7px", borderRadius: "5px" }}>Return To Home Page</Link>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default FitFreak;