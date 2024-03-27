import React from "react";
import styled, { css } from "styled-components";
import bg from "../../assets/aboutbg.png";
import Faq from "./Faq";
function About() {
  return (
    <Container>
      <Bg src={bg} />
      <Section>
        <Title>about us</Title>
        <SectionText>
          Welcome to our online store dedicated to
          spirituality! We are a team passionate about
          exploring and spreading spiritual awareness
          through a wide range of products designed to
          inspire, heal, and elevate the mind, body, and
          spirit. In our assortment, you'll find a carefully
          curated selection of spiritual books, incense,
          crystals, sacred symbol jewelry, and much more. We
          are committed to offering high-quality products
          that foster your personal growth and connection
          with the universe. Thank you for being part of our
          spiritual community.
        </SectionText>
        <ShopBtn>Shop Now</ShopBtn>
      </Section>
      <Section>
        <Title>EXCLUSIVE DESIGN</Title>
        <SectionText>
          Discover our exclusive designs crafted with
          intricate details and deep spiritual significance.
          Each piece in our collection is thoughtfully
          created to resonate with your spiritual journey,
          offering both aesthetic beauty and profound
          meaning.
        </SectionText>
      </Section>
      <Section>
        <Title>HANDMADE WORK</Title>
        <SectionText>
          Experience the artistry and dedication of handmade
          craftsmanship in every item we offer. Our products
          are lovingly crafted by skilled artisans who pour
          their passion and expertise into every detail,
          ensuring quality and authenticity that you can
          trust.
        </SectionText>
      </Section>
      <Section last={true}>
        <Title>Careful Delivery</Title>
        <SectionText>
          Rest assured that your spiritual treasures will be
          handled with the utmost care from our store to
          your doorstep. We take great pride in ensuring
          that your orders are meticulously packaged and
          promptly shipped, so you can enjoy your purchases
          with peace of mind and excitement upon delivery.
        </SectionText>
      </Section>
      <Faq />
    </Container>
  );
}

export default About;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const Bg = styled.img`
  width: 100vw;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  ${(props) =>
    props.last &&
    css`
      background-color: #191919;
      color: #fff;
    `};
`;
const Title = styled.div`
  text-transform: capitalize;
  font-weight: 500;
  font-family: var(--primary-text);
  font-size: 1.7rem;
`;
const SectionText = styled.div`
  font-family: var(--secondary-text);
  width: 70%;
  text-align: center;
`;
const ShopBtn = styled.button`
  all: unset;
  text-transform: uppercase;
  font-family: var(--primary-text);
  font-weight: 800;
  border-bottom: 2px solid black;
`;
