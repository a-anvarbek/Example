import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 650px;
  margin: auto;
  margin-top: 50px;
`;

const P = styled.p`
  font-size: 60px;
  color: #fff;
  font-weight: 100;
`;

const Title = () => {
  return (
    <Wrapper>
      <Container>
        <P>Every Detail, Handled with Precision and Grace.</P>
      </Container>
    </Wrapper>
  );
};

export default Title;
