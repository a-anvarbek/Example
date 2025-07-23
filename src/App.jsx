// Libraries
import { BrowserRouter } from "react-router";
import styled from "styled-components";

// Pages and components
import MainRouter from "./routes/MainRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Style
import "./App.css";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const MainWrapper = styled.div`
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Header />

        <MainWrapper>
          <MainRouter />
        </MainWrapper>

        <Footer />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
