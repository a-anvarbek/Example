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
  border: 2px solid #b3935c;
  border-radius: 20px;
  background-color: #000;
  color: #fff;
  font-size: 25px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #b3935c;
    border: 2px solid #fff;
    transform: scale(1.05);
  }
`;

const ImperialHero = () => {
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

          <Button className="imperial-button">
            Discover The Imperial Story
          </Button>
        </Within>
      </Wrapper>
    </>
  );
};

export default ImperialHero;
