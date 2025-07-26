import { useNavigate } from "react-router";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 430px;
  background-color: #000;
  color: #ffd387;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 80px;
`;

const Within = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #ffd387;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || "25px"};
  width: 650px;
  text-align: center;
`;

const Button = styled.button`
  width: 363px;
  height: 70px;
  border: none;
  border-radius: 20px;
  background-color: #b3935c;
  color: #000;
  font-size: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #fff;
    border: 2px solid #b3935c;
    background: linear-gradient(90deg, #000 0%, #b3935c 100%);
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.98);
  }
`;

const ImperialHero = () => {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <Within>
          <P $fontSize="50px" className="imperial-title">
            Rooted in Tradition. Refined by Intention.
          </P>

          <P className="imperial-content">
            Through elegance and discipline, we carry forward Japan’s cultural
            soul with a modern spirit.
          </P>

          <Button
            className="imperial-button"
            onClick={() => navigate("/imperial-story")}
          >
            Discover The Imperial Story
          </Button>
        </Within>
      </Wrapper>
    </>
  );
};

export default ImperialHero;
