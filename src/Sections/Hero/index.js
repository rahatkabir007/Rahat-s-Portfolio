// This is HeroSection component, Main top section of website

import styled from "styled-components";
import Typical from 'react-typical';


const HomeSection = styled.section`
  width: 100vw;
  height: 55vw;
  background-image: url('https://i.ibb.co/nBypSqJ/hero.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color: #0a0b10; */
  display: flex;
  justify-content: flex-end;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 80vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;


const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin-left: 40%;
  line-height: 1.5;
  color: var(--black);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(6rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
     margin-left: 0%;
     border: 1px solid black;
     padding: 15px;
     border-radius: 10px;
     background-color: rgba(0,0,0,0.6);
     color: white;
  }
  @media only Screen and (max-width: 40em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
     margin-left: 0%;
     border: 1px solid black;
     padding: 10px;
     border-radius: 10px;
     background-color: rgba(0,0,0,0.6);
     color: white;
  }
`;

const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav);
  color: var(--white);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #b9c7d2;
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

const SubText = styled.h5`
  font-size: calc(0.5rem + 1.5vw);
  color: black;
  @media only Screen and (max-width: 48em){
      color: #b9c7d2;
  }
`;

const CTA = styled.button`
  background-color: #b9c7d2;
  padding: 0.8rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.8rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const HeroSection = () => {
  return (
    <HomeSection id="home" >
      <MainContent id="home">
        <Lb id="leftBlock">
          <Topic>
            <Circle />
            <span>Junior Web Developer</span>
          </Topic>
          <Title>Hi, I am Rahat Kabir</Title>
          <SubText>
            Hire me as a <Typical
              loop={Infinity}
              steps={[
                "Junior Front End Developer", 1000,
                "Mern Stack Developer", 1000,
                "React.js Developer", 1000,
              ]}
            />
          </SubText>
          <CTA>
            <a href="rahat.pdf" download="Rahat.pdf" style={{textDecoration: 'none', color: 'black', margin: 0, padding: 0}}>Download Resume
              </a>
          </CTA>
        </Lb>
      </MainContent>
    </HomeSection>
  );
};

export default HeroSection;
