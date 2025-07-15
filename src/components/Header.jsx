import { useNavigate } from "react-router";
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
    border-bottom: 1.5px solid #fff;
  }

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    left: 0;
    bottom: 0px;
    transition: width 0.3s ease;
    border-bottom: 1.5px solid #fff;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <Container>
          <Logo onClick={() => navigate("/")}>NIPPON IMPERIAL</Logo>

          <Menu>
            <Ul>
              <Li onClick={() => navigate("/imperial-history")}>
                The Imperial Story
              </Li>

              <Li onClick={() => navigate("/concierge-lifestyle")}>
                Concierge & Lifestyle
              </Li>

              <Li onClick={() => navigate("/signature-tours")}>
                Signature Tours
              </Li>

              <Li onClick={() => navigate("*")}>For Organizations</Li>
            </Ul>
          </Menu>
        </Container>
      </Wrapper>
    </>
  );
};

export default Header;
