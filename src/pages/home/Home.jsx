import styled from "styled-components";

import LifestyleHome from "../conciergeLifestyle/LifestyleHome";
import HistoryHome from "../imperialHistory/HistoryHome";
import ToursHome from "../tours/ToursHome";

import Title from "../../components/Title";
import fadeIn from "../../components/Animation";

import BG from "../../images/home/HomeBG.png";
import Img1 from "../../images/home/Img1.png";
import Img2 from "../../images/home/Img2.png";
import Img3 from "../../images/home/Img3.png";
import Img4 from "../../images/home/Img4.png";
import Img5 from "../../images/home/Img5.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 120px;
`;

const Container = styled.div`
  width: 935px;
  margin: 25px auto;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Text = styled.p`
  font-size: 30px;
  color: #fff;
`;

const Box = styled.div`
  display: flex;
  padding: 0 50px;
  justify-content: space-between;
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
  width: 130px;
  height: 130px;
  margin-bottom: -20px;
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || "20px"};
  margin-bottom: 15px;
  font-weight: 400;
`;

const services = [
  {
    img: Img1,
    name: "VIP Chauffeur Services",
    brief: "Executive, class vehicles with multlingual drivers",
    time: "1s",
  },

  {
    img: Img2,
    name: "Restaurant Reservations",
    brief: "Michelin-star, Kaiseki private dining",
    time: "1.5s",
  },

  {
    img: Img3,
    name: "Wellness & Spa Experiences",
    brief: "Ryokan-style onsens, aeethetic clinics, massages",
    time: "2s",
  },

  {
    img: Img4,
    name: "Private Shopping",
    brief: "Flagship boutiques, stylists, exclusive appointments",
    time: "2.5s",
  },

  {
    img: Img5,
    name: "Entertainment Bookings",
    brief: "Kabuki. Gelsha, Tea ceremonies, sumo traning",
    time: "3s",
  },
];

const Home = () => {
  return (
    <>
      <Wrapper id="home">
        <Title name="Every Detail, Handled with Precision and Grace." />

        <Container>
          <Text>
            From dinner at a Michelin-star restaurant to personal assistants and
            spa bookings, our lifestyle team curates your lapan in full.
          </Text>
        </Container>

        <Box>
          {services.map((service, index) => (
            <Case key={index} >
              <Img src={service.img} />

              <P $fontSize={"25px"}>{service.name}</P>

              <P>{service.brief}</P>
            </Case>
          ))}
        </Box>
      </Wrapper>

      {/* <HistoryHome /> */}

      <LifestyleHome />

      <ToursHome />
    </>
  );
};

export default Home;
