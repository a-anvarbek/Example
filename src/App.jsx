import { BrowserRouter } from "react-router";

import MainRouter from "./routes/MainRouter";

import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <MainRouter />
        
      </BrowserRouter>
    </>
  );
}

export default App;
