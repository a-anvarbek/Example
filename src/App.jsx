import { BrowserRouter } from "react-router";
import styled from "styled-components";

import MainRouter from "./routes/MainRouter";

import "./App.css";
import Header from "./components/Header";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const MainWrapper = styled.div`
  width: 100%;
  /* padding-top: 120px; */
`;

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Header />

        <MainWrapper>
          <MainRouter />
        </MainWrapper>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
