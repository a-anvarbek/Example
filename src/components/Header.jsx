// Libraries
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";

// Images
import BG from "../images/home/Logo.png";

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
    color: #614f33;
  }
`;

const Container = styled.div`
  padding: 25px 80px;
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

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  user-select: none;

  &:hover > ul {
    display: block;
  }
`;

const Selected = styled.div`
  transition: 0.3s;

  &:hover {
    background-color: #1a1a1a;
    color: #ffd387;
    border-color: #ffd387;
  }
`;

const OptionsList = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #000;
  border: 1px solid #b3935c;
  border-radius: 6px;
  padding: 0;
  margin: 10px 0 0 0;
  list-style: none;
  min-width: 200px;
  z-index: 999;
`;

const OptionItem = styled.li`
  padding: 10px 14px;
  color: #b3935c;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #1a1a1a;
    color: #ffd387;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const logoRef = useRef(null);
  const triggerRef = useRef(null);
  const navLogoRef = useRef(null);
  const [selected, setSelected] = useState("Services");

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

  const handleSelect = (value, anchor) => {
    setSelected(value);
    if (anchor) {
      window.location.href = anchor;
    }
  };

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
              <Li onClick={() => navigate("/imperial-story")}>
                Imperial Story
              </Li>

              <Li>
                <A href="#concierge-lifestyle">Concierge</A>
              </Li>

              <Li>
                <DropdownWrapper>
                  <Selected>{selected}</Selected>

                  <OptionsList>
                    <OptionItem
                      onClick={() =>
                        handleSelect("Chauffeur service", "#signature-tours")
                      }
                    >
                      Chauffeur service
                    </OptionItem>

                    <OptionItem
                      onClick={() =>
                        handleSelect("Airport transfer", "#signature-tours")
                      }
                    >
                      Airport transfer
                    </OptionItem>

                    <OptionItem
                      onClick={() =>
                        handleSelect("One day tours", "#signature-tours")
                      }
                    >
                      One day tours
                    </OptionItem>

                    <OptionItem
                      onClick={() =>
                        handleSelect("Multiple days tours", "#signature-tours")
                      }
                    >
                      Multiple days tours
                    </OptionItem>
                  </OptionsList>
                </DropdownWrapper>
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
