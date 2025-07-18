import styled from "styled-components";

import fadeIn from "../../components/Animation";

import Img6 from "../../images/lifestyle/Img6.png";
import Img7 from "../../images/lifestyle/Img7.png";
import Img8 from "../../images/lifestyle/Img8.png";
import Img9 from "../../images/lifestyle/Img9.png";
import Img10 from "../../images/lifestyle/Img10.png";
import Img11 from "../../images/lifestyle/Img11.png";
import Img12 from "../../images/lifestyle/Img12.png";

const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  color: #fff;
`;

const Container = styled.div`
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || "30px"};
  font-weight: 400;
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  margin-bottom: 15px;
  margin-top: ${({ $marginTop }) => $marginTop || ""};
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const Case = styled.div`
  width: 260px;
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: ${fadeIn} ease-in-out;
  animation-duration: ${({ $animationDuration }) => $animationDuration || "1s"};

  &:hover {
    transform: scale(1.05);
  }
`;

const Img = styled.img`
  width: 257px;
  height: 326px;
  border-radius: 15px;
  margin-bottom: 25px;
`;

const Card = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: ${fadeIn} ease-in-out;
  animation-duration: ${({ $animationDuration }) => $animationDuration || "1s"};

  &:hover {
    transform: scale(1.05);
  }
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
`;

const experiences = [
  {
    img: Img6,
    name: "Tea Ceremony",
  },

  {
    img: Img7,
    name: "Mt. Fuji Tour",
  },

  {
    img: Img8,
    name: "Michelin Dining",
  },

  {
    img: Img9,
    name: "Samurai Encunter",
  },
];

const works = [
  {
    img: Img10,
    brief: ["Share", <br />, "Your Interests"],
  },

  {
    img: Img11,
    brief: ["Receive", <br />, "Your Tallered Plan"],
  },

  {
    img: Img12,
    brief: ["Enjov", <br />, "Japan with VIP Service"],
  },
];

const OurSignature = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <P $fontSize="50px">Our Signature Experiences</P>

          <Box>
            {experiences.map((experience, index) => (
              <Case key={index}>
                <Img src={experience.img} />
                <P $textAlign="center">{experience.name}</P>
              </Case>
            ))}
          </Box>

          <P $fontSize="50px" $marginTop="80px">
            How It Works
          </P>
          <Box>
            {works.map((work, index) => (
              <Card key={index}>
                <Icon src={work.img} />
                <P>{work.brief}</P>
              </Card>
            ))}
          </Box>
        </Container>
      </Wrapper>
    </>
  );
};

export default OurSignature;
