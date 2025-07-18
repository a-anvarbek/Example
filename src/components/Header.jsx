import { useEffect, useState } from "react";
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
`;

const Container = styled.div`
  padding: 40px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding: 20px 30px;
  }
`;

const Logo = styled.a`
  font-size: 30px;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 0;
    height: 3px;
    background-color: #fff;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`;

const Menu = styled.nav`
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Li = styled.li`
  font-size: 20px;
  list-style: none;
  cursor: pointer;
  position: relative;

  a {
    color: ${({ $active }) => ($active ? "#fff" : "#aaa")};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #fff;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: ${({ $active }) => ($active ? "100%" : "0")};
    height: 2px;
    background-color: #fff;
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const sections = [
  {
    id: "imperial-story",
    label: "The Imperial Story",
  },

  {
    id: "concierge-lifestyle",
    label: "Concierge & Lifestyle",
  },

  {
    id: "signature-tours",
    label: "Signature Tours",
  },

  {
    id: "for-organizations",
    label: "For Organizations",
  },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      for (let section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper>
      <Container>
        <Logo href="#home">NIPPON IMPERIAL</Logo>
        <Menu>
          <Ul>
            {sections.map((section) => (
              <Li key={section.id} $active={activeSection === section.id}>
                <a href={`#${section.id}`}>{section.label}</a>
              </Li>
            ))}
          </Ul>
        </Menu>
      </Container>
    </Wrapper>
  );
};

export default Header;
