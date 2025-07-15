import styled from "styled-components";

import fadeIn from "./Animation";

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 650px;
  margin: auto;
  margin-top: 50px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const P = styled.p`
  font-size: 60px;
  color: #fff;
  font-weight: 100;
`;

const Title = ({ name }) => {
  return (
    <Wrapper>
      <Container>
        <P>{name}</P>
      </Container>
    </Wrapper>
  );
};

export default Title;
