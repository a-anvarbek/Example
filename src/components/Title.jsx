// Libraries
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 650px;
  margin: auto;
`;

const P = styled.p`
  margin-top: ${({ $marginTop }) => $marginTop || "50px"};
  text-align: ${({ $textAlign }) => $textAlign || ""};
  font-size: 60px;
  color: #ffd387;
  font-weight: 100;
`;

const Title = ({ name, margin, text }) => {
  return (
    <Wrapper>
      <Container className="home-title">
        <P $marginTop={margin} $textAlign={text}>
          {name}
        </P>
      </Container>
    </Wrapper>
  );
};

export default Title;
