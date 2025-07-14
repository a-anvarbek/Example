import styled from "styled-components";

import Title from "../../components/Title";
import BG from "../../images/HomeBG.png";

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
`;

const Text = styled.p`
  font-size: 30px;
  color: #fff;
`;

const Box = styled.div`

`;

const Home = () => {
  return (
    <>
      <Wrapper>
        <Title />

        <Container>
          <Text>
            From dinner at a Michelin-star restaurant to personal assistants and
            spa bookings, our lifestyle team curates your lapan in full.
          </Text>
        </Container>
      </Wrapper>
    </>
  );
};

export default Home;
