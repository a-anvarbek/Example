import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: #000;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  transition: 0.3s;
  height: 120px;

  &:hover {
    color: #808080;
  }
`;

const Container = styled.div`
  padding: 40px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.p`
  font-size: 30px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.05);
    color: #fff;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 3px;
    background-color: #fff;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const Menu = styled.div`
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const Li = styled.li`
  font-size: 20px;
  list-style: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  padding: 5px 0;

  &:hover {
    transform: scale(1.05);
    color: #fff;
    transition: all 0.3s ease;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.5px;
    background-color: #fff;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    width: 100%;
  }
`;

const A = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Header = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Logo>
            <A href="#home">NIPPON IMPERIAL</A>
          </Logo>

          <Menu>
            <Ul>
              <Li>
                <A href="#imperial-story">The Imperial Story</A>
              </Li>

              <Li>
                <A href="#concierge-lifestyle">Concierge & Lifestyle</A>
              </Li>

              <Li>
                <A href="#signature-tours">Signature Tours</A>
              </Li>

              <Li>
                <A href="#for-organizations">For Organizations</A>
              </Li>
            </Ul>
          </Menu>
        </Container>
      </Wrapper>
    </>
  );
};

export default Header;
