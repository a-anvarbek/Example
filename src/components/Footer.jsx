// Libraries
import styled from "styled-components";

// Components
import Title from "./Title";

// Icons
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #fff;
  padding: 20px 50px;
  transition: 0.3s;

  &:hover {
    color: #808080;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #808080;
  padding: 60px 0;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  width: 287px;
`;

const Called = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || "25px"};
  margin-bottom: ${({ $marginBottom }) => $marginBottom || "0"};
  line-height: 33px;

  span {
    color: #fff;
  }
`;

const A = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  margin-right: 15px;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;

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
    height: 2px;
    background-color: #fff;
    transform: scale(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  svg {
    font-size: 24px;
    vertical-align: middle;
  }
`;

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Title name="NIPPON IMPERIAL" margin="0" text="center" />
        <Container>
          <Card>
            <Called $fontSize="35px" $marginBottom="20px">
              <span>About</span>
            </Called>

            <Called>
              Offering Uxury travel experiences in Japan with
              tailo-ediLmeraries, and exceptional service.
            </Called>
          </Card>

          <Card>
            <Called $fontSize="35px" $marginBottom="20px">
              <span>Navigation</span>
            </Called>

            <Called>
              <A href="">Concierge & Lifestyle</A> <br />
              <A href="">Signature Tours</A> <br />
              <A href="">For Organizations</A>
            </Called>
          </Card>

          <Card>
            <Called $fontSize="35px" $marginBottom="20px">
              <span>Contact</span>
            </Called>

            <Called>
              <A href="mailto:info@nipponimperial.com">
                Info@nipponimperial.com
              </A>
              <br />
              <A href="tel:+81312345673">+81 3-1234-5673</A>
            </Called>
          </Card>

          <Card>
            <Called $fontSize="35px" $marginBottom="20px">
              <span>Follow Us</span>
            </Called>
              
            <Called>
              <A href="https://facebook.com" target="_blank" rel="noreferrer">
                <IoLogoFacebook />
              </A>
            
              <A href="https://twitter.com" target="_blank" rel="noreferrer">
                <AiFillTwitterCircle />
              </A>
            
              <A href="https://t.me" target="_blank" rel="noreferrer">
                <FaTelegram />
              </A>
            </Called>
          </Card>
        </Container>
      </Wrapper>
    </>
  );
};

export default Footer;
