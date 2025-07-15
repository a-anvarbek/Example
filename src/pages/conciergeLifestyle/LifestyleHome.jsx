import styled from "styled-components";

import Title from "../../components/Title";
import fadeIn from "../../components/Animation";

import BG from "../../images/lifestyle/LifestyleBG.png";
import Img1 from "../../images/lifestyle/Img1.png";
import Img2 from "../../images/lifestyle/Img2.png";
import Img3 from "../../images/lifestyle/Img3.png";
import Img4 from "../../images/lifestyle/Img4.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 120px;
`;

const Box = styled.div`
  display: flex;
  padding: 0 50px;
  justify-content: space-between;
  margin-top: 50px;
`;

const Case = styled.div`
  width: 218px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: ${fadeIn} ease-in-out;
  animation-duration: ${({ $animationDuration }) => $animationDuration || "1s"};

  &:hover {
    transform: scale(1.05);
  }
`;

const Img = styled.img`
  width: 100px;
  height: 75px;
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || "25px"};
  margin-bottom: 15px;
  font-weight: 400;
  color: #fff;
`;

const Content = styled.div`
  width: 485px;
  transition: transform 0.3s ease;
  animation: ${fadeIn} 1s ease-in-out;
`;

const BoxBtn = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 50px;
  align-items: center;
`;

const Btn = styled.button`
  width: 260px;
  height: 100px;
  border: 2px solid #ffe9a0;
  background-color: transparent;
  color: #fff;
  font-size: 25px;
  padding: 17px 40px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: ${fadeIn} 1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const services = [
  {
    img: Img1,
    name: "Luzury Chaufffur Fleet",
    time: "1s",
  },

  {
    img: Img2,
    name: "Authentic Cuitural Access",
    time: "1.5s",
  },

  {
    img: Img3,
    name: "Concierge & VIP Services",
    time: "2s",
  },

  {
    img: Img4,
    name: "Curated Private Tours Across Japan",
    time: "2.5s",
  },
];

const LifestyleHome = () => {
  return (
    <>
      <Wrapper id="concierge-lifestyle">
        <Title name="Experience Japan in Comfort, Style, and Class." />

        <Box>
          {services.map((service, index) => (
            <Case key={index}>
              <Img src={service.img} />

              <P>{service.name}</P>
            </Case>
          ))}
        </Box>

        <Div>
          <Content>
            <P $fontSize="40px">
              Trusted by diplomats, dignitaries, and discerning travelers.
            </P>
          </Content>

          <BoxBtn>
            <Btn>Explore Signature Tours</Btn>
            <Btn>Request a Custom Itinerary</Btn>
          </BoxBtn>
        </Div>
      </Wrapper>
    </>
  );
};

export default LifestyleHome;
