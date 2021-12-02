//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
// import Services from "../Sections/Services/index";
import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";
import styled from "styled-components";
import Projects from "../Sections/Projects/Projects";
import Service from "../Sections/Service/Service";
import Header from "../components/Header";
import Footer from "../components/Footer";


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <>
     <Header />
    <MainContainer>
      <HeroSection />
      <About />
      <Service/>
      <Projects/>
      <Testimonials />
      <Contact />
      </MainContainer>
      <Footer />
      </>
  );
};

export default Home;
