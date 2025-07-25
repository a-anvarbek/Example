// Libraries
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";

// Images
import BG from "../images/home/Logo.png";

// Styled Components
const Wrapper = styled.div`
  width: 100%;
  background-color: #000;
  color: #b3935c;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: 0.3s;

  &:hover {
    color: #9c7e4f;
  }
`;

const Container = styled.div`
  padding: 25px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const LogoImg = styled.img`
  width: 120px;
  height: auto;
  object-fit: contain;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};

  &:hover {
    transform: scale(1.05);
  }
`;

const Menu = styled.div`
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 33px;
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
    color: #ffd387;
    transition: all 0.3s ease;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.5px;
    background-color: #ffd387;
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
  const navigate = useNavigate();
  const logoRef = useRef(null);
  const triggerRef = useRef(null);
  const navLogoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      logoRef.current,
      {
        y: 0,
        scale: 9,
        opacity: 1,
      },
      {
        yPercent: -50,
        scale: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      navLogoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top+=100",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <Wrapper>
        <Container>
          <LogoImg
            ref={navLogoRef}
            src={BG}
            alt="logo"
            onClick={() => navigate("/")}
          />

          <Menu>
            <Ul>
              <Li>
                <A href="#imperial-story">Imperial Story</A>
              </Li>

              <Li>
                <A href="#concierge-lifestyle">Concierge</A>
              </Li>

              <Li>
                <A href="#signature-tours">Services</A>
              </Li>

              <Li>
                <A href="#for-organizations">Partnership</A>
              </Li>

              <Li>
                <A href="#for-organizations">Contact us</A>
              </Li>
            </Ul>
          </Menu>
        </Container>
      </Wrapper>

      <LogoWrapper ref={triggerRef}>
        <LogoImg ref={logoRef} src={BG} alt="centered logo" />
      </LogoWrapper>
    </>
  );
};

export default Header;
