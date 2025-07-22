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
  font-size: 60px;
  color: #fff;
  font-weight: 100;
`;

const Title = ({ name, margin }) => {
  return (
    <Wrapper>
      <Container className="home-title">
        <P $marginTop={margin}>{name}</P>
      </Container>
    </Wrapper>
  );
};

export default Title;
