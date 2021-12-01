import styled, { keyframes } from "styled-components";
import me from "../../assets/aboutme.jpg";
import human from "../../assets/human.svg";



const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const AboutSection = styled.section`
  width: 100vw;
  background-image: url('https://i.ibb.co/SQkmFSv/circle-scatter-haikei.png');
  background-position: center;
  background-repeat: no-repeat;
    background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const Main = styled.div`
  margin: 0 15rem;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: inline-block;
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Me = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 30%;
  padding-bottom: 5rem;
  border-radius: 20px;

  @media only Screen and (max-width: 40em) {
    width: 40vw;
    padding-bottom: 15px;
  }
`;

const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;
    animation: ${move} 2.5s ease infinite;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;
const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;
const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
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
    padding: 0.5rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Main>
        <div>
          <Title>About Me</Title>
          <CurvedLine />
        </div>
        <Content>
          <Me>
            <img src={me} alt="" width="300" height="400" />
          </Me>
          <AboutText>
            <Human>
              <img src={human} alt="" width="400" height="400" />
            </Human>

            <Text>
              I am a Junior Web Developer Who Is Pursuing His Career Through Learning
              More And More Everyday. I Am a Student. And I have Skills on React.js, Javascript And Many More.
            </Text>
            <div>
              <Circle style={{ backgroundColor: "#2C394B" }} />
              <Circle style={{ backgroundColor: "#b9c7d2" }} />
              <Circle style={{ backgroundColor: "var(--black)" }} />
              <CTA>
                <a href="github.com" style={{ textDecoration: 'none', color: 'black', margin: 0, padding: 0 }}>Read More
                </a>
              </CTA>
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
