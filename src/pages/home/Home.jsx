// Libraries
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import styled from "styled-components";

// Pages
import ImperialHero from "./ImperialHero";
import LifestyleHome from "../conciergeLifestyle/LifestyleHome";
import HistoryHome from "../imperialHistory/HistoryHome";
import ToursHome from "../tours/ToursHome";
import Detail from "./Detail";

// Components
import Title from "../../components/Title";

// Images
import BG from "../../images/home/HomeBG.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  color: #ffd387;
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const Within = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${BG});
  background-blend-mode: multiply;
  background-color: #666464;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.p`
  font-size: 25px;
  margin-top: 20px;
  width: 700px;
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

    // Imperial Story
    sr.reveal(".imperial-title", {delay: 200});
    sr.reveal(".imperial-content", {delay: 350});
    sr.reveal(".imperial-button", {delay: 500});

    // Detail section
    sr.reveal(".detail-title", { delay: 100 });
    sr.reveal(".detail-text", { delay: 300 });
    sr.reveal(".detail-card", { interval: 200 });
  }, []);

  return (
    <>
      <Wrapper id="home">
        <Within>
          <Title
            text="center"
            name="Every Detail, Handled
                  with Precision and Grace."
          />

          <Content className="home-content">
            From dinner at a Michelin-star restaurant to personal assistants and
            spa bookings, our lifestyle team curates your lapan in full.
          </Content>
        </Within>
      </Wrapper>

      <ImperialHero />

      {/* <Detail /> */}

      {/* <HistoryHome /> */}

      {/* <LifestyleHome /> */}

      {/* <ToursHome /> */}
    </>
  );
};

export default Home;
