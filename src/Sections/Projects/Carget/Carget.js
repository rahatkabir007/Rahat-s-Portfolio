import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer';
import HeroSection from '../../Hero';
import './Carget.css';

const Carget = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <Container>
               
                <Row>
                    <Link to="/home" style={{width:'50%', margin: '20px auto 0 auto', textAlign: 'center', textDecoration: "none", backgroundColor: "#b9c7d2", color: "black", padding: "10px 7px", borderRadius: "5px" }}>Return To Home Page</Link>
                    <Col lg={7} className="left-side">
                        <Row>
                          
                                <img src="https://i.ibb.co/6gM34SV/carget-1.png" alt="" />
                            
                            <div className="second-img">
                                <img src="https://i.ibb.co/qsmzjy5/carget-3.png" alt="" />
                                <img src="https://i.ibb.co/s93ZVf5/carget-4.png" alt="" />
                                <img src="https://i.ibb.co/S66QKnt/carget-5.png" alt="" />
                                <img src="https://i.ibb.co/1zhBDnz/carget-6.png" alt="" />
                               </div>
                           
                        </Row>
                    </Col>
                    <Col lg={5} className="px-4 my-5">
                        <h1>Website Title: CARGET</h1>
                        <p className="mt-4">
                            Key Features:<br/>
                            •	Dashboard Functionality (Admin & User Operations).<br />
                            •	CRUD Operations on Dashboard Panel.<br />
                            •	Booking and Review system for User.<br />
                            •	Email and Google Authentication.<br />
                            •	Admin and User Role Distinction by Login.<br /><br />
                            <p>Technology & Tools:  React.js, Node.js, Express.js, React Router, MongoDB, Firebase.</p><br/><br/>
                            <a href="https://carget-69504.web.app/" style={{ textDecoration: "none",backgroundColor: "#b9c7d2",color: "black",marginright: "6px",padding: "10px 7px",borderRadius: "5px"}}>Live Website</a>
                        </p>
                        <p className="mt-3" style={{lineHeight: '30px'}}>
                            Details: <br />

                            My Website is about Car Dealership Company. It mainly focuses on seliing cars of various brands.

                            This was a really big project for me. Its completely full-stacked! I have designed this website with utmost care!

                            I will break down my full website designing in 6 breakpoints.

                            Client Side-<br />

                            UI Designing<br />
                            -I have gotten my idea of the website from colorlib. I researched a lot of website to go perfectly with my taste.<br />
                            -My website has 3 pages Home, Explore and About. Other than that it also has login and register page.<br />
                            -After user logs in he will see dashboard where he can see his orders, share reviews and payment(not implemented yet).<br />
                            -Also if an admin logs in he will see dashboard too but the pages he will see will be different from user's, such as Manage products, -Manage Orders, Add Products. He can also make an user admin of the website.<br />
                            -Each page has different contents.<br />
                            -The home page has different type of sections.<br />
                            -I have used Bootstarp cdn and Material UI both to design the responsiveness of the UI.<br />
                            -Mostly used 2 colors throughout the website.<br />
                            -Every page has header and footer.<br />
                            -I have created a not found page too in case pages are not available.<br />

                            Structure<br />
                            -I have divided the websites in to various components.<br />
                            -The src file have hooks, context and components in different folder.<br />
                            -The component folder has A main folder call pages. Where i have kept all of the pages individually. Navigation, Footer is in shared component.<br />
                            -The Home folder has various child components on it!<br />
                            -Also i placed the privateroute folder and adminroute folder in the signin component.<br />

                            Router<br />
                            -I have implemented react router dom.<br />
                            -This helps us to walk thorugh between different pages without reloading.<br />
                            -I have placed the routes on app.js ! and wrapped them around Authcontext. Every route has there different loctions.<br />
                            -I have implemented dynamic route on the service section of the home page to redirect us to selected data's detailed information.<br />

                            -Firebase Authentication<br />
                            -I have created a firebase project and hosted my files on it as an web app.<br />
                            -I have implemented email password and Google Sign In both for my login.<br />
                            -The user information will be stored on my firebase project as well as in mongodb server.<br />
                            -The header shows the users name everytime the user signs in.<br />

                            Backend Side-<br />

                            Data<br />
                            -I have used node.js and express.js for the backend. And Connected My Backend server with MongoDB!<br />
                            -I have Created a project on mongodb and conneted it with my Backend using ID and Password.<br />
                            -I have done get, post ,delete and update operation on the backend side.<br />
                            -This operations are connected with my client side.<br />
                            -At last I have hosted my website with Heroku. and used heroku live server link for my client side.<br />

                            Functionality<br />

                            -The Website is mainly full stacked!<br />
                            -When users are not logged in they cant use the functionality as the navbar will only show 3 routes!<br />
                            -But once the user log is it will show 1 more routes named dashboard where user will see some different functionalities such as-<br />
                            -User's orders , Review Sharing also Payment(not implemented).<br />
                            -User can book any car and he will be redirected to place order page where he can share his address and phone number while seeing the -products details.<br />
                            -After User places orders he can go to dashboard and check his orders on myorders menu. User can cancel his order too.<br/>
                            -User can share their reviews and it will show on the homepage dynamically. He can give rating too!<br />
                            -I also implimented Admin functionality. That Means when user logs in he cant see admin's functionality on Dashboard. Only when admin logs in he can see some new functionality such as Add Products where he can add new products for the website. He can see all the products in Manage Products. Admin has the ability to delete those products from the website too. Admin can also see all of the users orders in Manage Order page where he can see all the details.<br />
                            -Admin can delete those orders and has a update ability to change the order's pending status to shipped.<br />
                            -Admin can make other users admin if he want from make admin option.<br />
                            -For admin functionality i had to create AdminRoute to secure it.<br />
                            -This website is responsive for both desktop and mobile.<br />


                            This project was really important part to me! I really enjoyed doing it!
                        </p>
                    </Col>
                    <Link to="/home" style={{ width: '50%', margin: '20px auto 0 auto', textAlign: 'center', textDecoration: "none", backgroundColor: "#b9c7d2", color: "black", padding: "10px 7px", borderRadius: "5px" }}>Return To Home Page</Link>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Carget;

// 
//
// 
// 
// 
// 