import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer';
import HeroSection from '../../Hero';

const Travelo = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <Container>
                <Row>
                    <Link to="/home" style={{ width: '50%', margin: '20px auto 0 auto', textAlign: 'center', textDecoration: "none", backgroundColor: "#b9c7d2", color: "black", padding: "10px 7px", borderRadius: "5px" }}>Return To Home Page</Link>
                    <Col lg={7} className="left-side">
                        <Row>
                            <img src="  https://i.ibb.co/PYLjDHy/travello-1.png" alt="" />
                            <div className="second-img">
                                <img src=" https://i.ibb.co/6tVDnvM/travello-2.png" alt="" />
                                <img src=" https://i.ibb.co/sQgxnNz/travello-3.png" alt="" />
                            </div>

                        </Row>
                    </Col>
                    <Col lg={5} className="px-4 my-5">
                        <h1>Website Title: Travelo</h1>
                        <p className="mt-4">
                            •	Login with Google.<br />
                            •	CRUD Operations for Users.<br />
                            •	Placing and Deleting Bookings.<br /><br />
                            <a href="https://travelo-db936.web.app/" style={{ textDecoration: "none", backgroundColor: "#b9c7d2", color: "black", marginright: "6px", padding: "10px 7px", borderRadius: "5px" }}>Live Website</a>
                        </p>
                        <p className="mt-3" style={{ lineHeight: '30px' }}>

                        My Website is about Travel Company.It mainly focuses on helping tourists to go to beautiful locations by booking website's services!

                        This was a really big project for me.Its completely full-stacked!I have designed this website with utmost care!

                        I will break down my full website designing in 6 breakpoints.

                        Client Side-

                            UI Designing<br />
                            -I have gotten my idea of the website from colorlib.I researched a lot of website to go perfectly with my taste.<br />
                            -I have divide my website in 6 pages excluding signin.<br />
                            -Each page has different contents.<br />
                            -The home page has different type of sections.<br />
                            -I have used Bootstarp cdn and react bootstrap to design the responsiveness of the UI.<br />
                            -Mostly used 2 colors throughout the website.<br />
                            -Every page has header and footer.<br />
                            -I have created a not found page too in case pages are not available.<br />

                            Structure<br />
                            -I have divided the websites in to various components.<br />
                            -The src file have hooks, context and components in different folder.<br />
                            -The component folder has A main folder call pages.Where i have kept all of the Navs and their selective pages individually.<br />
                            -The Home folder has various child components on it!<br />
                            -Also i placed the privateroute folder in the signin component.<br />

                            Router<br />
                            -I have implemented react router dom.<br />
                            -This helps us to walk thorugh between different pages without reloading.<br />
                            -I have placed the routes on app.js !and wrapped them around Authcontext.Every route has there different loctions.<br />
                            -I have implemented dynamic route on the service section of the home page to redirect us to selected data's detailed information.<br />

                            Firebase Authentication<br />
                            -I have created a firebase project and hosted my files on it as an web app.<br />
                            -I have implemented only one authorization for my sign in which is Google Sign In.<br />
                            -The user information will be stored on my firebase project.<br />
                            -The header shows the users name everytime the user signs in.<br />

                            Backend Side-<br />

                            Data<br />
                            -I have used node.js and express.js for the backend.And Connected My Backend server with MongoDB!<br />
                            -I have Created a project on mongodb and conneted it with my Backend using ID and Password.<br />
                            -I have done get , post and delete operation on the backend side.<br />
                            -This operations are connected with my client side.<br />
                            -At last I have hosted my website with Heroku.and used heroku live server link for my client side.<br />

                            Functionality<br />

                            -The Website is mainly full stacked!<br />
                            -When users are not logged in they cant use the functionality as the navbar will only show 3 routes!<br />
                            -But once the user log is it will show 3 more routes also users can book any of the services from the website.<br />
                            -User can cancel the services they booked or placed.<br />
                            -User can also see which users have logged in and purchased which service on the Manage Order option.<br />
                            -User can even add new services to the website.This is an admin fuctionaliy which we might learn later.<br />
                            -This website is responsive for both desktop and mobile.<br />


                        This project was really important part to me!I really enjoyed doing it!
                        </p>
                    </Col>
                    <Link to="/home" style={{ width: '50%', margin: '20px auto 0 auto', textAlign: 'center', textDecoration: "none", backgroundColor: "#b9c7d2", color: "black", padding: "10px 7px", borderRadius: "5px" }}>Return To Home Page</Link>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Travelo;