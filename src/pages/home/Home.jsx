// Libraries
import { useEffect } from "react";
import styled from "styled-components";
import ScrollReveal from "scrollreveal";

// Pages
import LifestyleHome from "../conciergeLifestyle/LifestyleHome";
import HistoryHome from "../imperialHistory/HistoryHome";
import ToursHome from "../tours/ToursHome";
import Detail from "./Detail";

// Components
import Title from "../../components/Title";
import fadeIn from "../../components/Animation";

// Images
import BG from "../../images/home/HomeBG.jpg";
import Logo from "../../images/home/Logo.png";

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
  color: #fff;
`;

const Container = styled.div`
  width: 540px;
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Content = styled.p`
  font-size: 25px;
  margin-top: 20px;
  width: 466px;
  text-align: center;
`;

const Home = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    // Home section
    sr.reveal(".home-img");
    sr.reveal(".home-title", { delay: 200 });
    sr.reveal(".home-content", { delay: 400 });

    // Detail section
    sr.reveal(".detail-title", { delay: 100 });
    sr.reveal(".detail-text", { delay: 300 });
    sr.reveal(".detail-card", { interval: 200 });
  }, []);

  return (
    <>
      <Wrapper id="home">
        <Container>
          <Img src={Logo} className="home-img" />

          <Title name="NIPPON IMPERIAL" margin={"30px"} />

          <Content className="home-content">
            Bringing timeless tradition into modern precision.
          </Content>
        </Container>
      </Wrapper>

      <Detail />

      {/* <HistoryHome /> */}

      {/* <LifestyleHome /> */}

      {/* <ToursHome /> */}
    </>
  );
};

export default Home;
