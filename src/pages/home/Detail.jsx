// Libraries
import styled from "styled-components";

// Components
import Title from "../../components/Title";

// Images
import BG from "../../images/home/HomeBG2.jpg";
import Img1 from "../../images/home/Img1.png";
import Img2 from "../../images/home/Img2.png";
import Img3 from "../../images/home/Img3.png";
import Img4 from "../../images/home/Img4.png";
import Img5 from "../../images/home/Img5.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BG});
  background-blend-mode: multiply;
  background-color: #666464;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 120px;
`;

const Container = styled.div`
  width: 935px;
  margin: 25px auto;
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
  },

  {
    img: Img2,
    name: "Restaurant Reservations",
    brief: "Michelin-star, Kaiseki private dining",
  },

  {
    img: Img3,
    name: "Wellness & Spa Experiences",
    brief: "Ryokan-style onsens, aeethetic clinics, massages",
  },

  {
    img: Img4,
    name: "Private Shopping",
    brief: "Flagship boutiques, stylists, exclusive appointments",
  },

  {
    img: Img5,
    name: "Entertainment Bookings",
    brief: "Kabuki. Gelsha, Tea ceremonies, sumo traning",
  },
];

const Detail = () => {
  return (
    <>
      <Wrapper id="detail">
        <Title name="Every Detail, Handled with Precision and Grace." />

        <Container>
          <Text className="detail-text">
            From dinner at a Michelin-star restaurant to personal assistants and
            spa bookings, our lifestyle team curates your lapan in full.
          </Text>
        </Container>

        <Box>
          {services.map((service, index) => (
            <Case key={index} className="detail-card">
              <Img src={service.img} className="detail-img" />
              <P $fontSize={"25px"} className="detail-name">
                {service.name}
              </P>
              <P className="detail-brief">{service.brief}</P>
            </Case>
          ))}
        </Box>
      </Wrapper>
    </>
  );
};

export default Detail;
