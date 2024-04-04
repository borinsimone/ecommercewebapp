import React, { useRef } from "react";
import styled, { css } from "styled-components";
import bg from "../../assets/aboutbg.png";
import Faq from "./Faq";
import Info from "./Info";
import { useInView } from "framer-motion";
function SectionComponent({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Section
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition:
          "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
    >
      {children}
    </Section>
  );
}
function About({ aboutRef, shopRef }) {
  return (
    <Container ref={aboutRef}>
      {/* <div className="img">
        <Bg src={bg} />
      </div>
      <SectionComponent className="about">
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
      </SectionComponent>
      <SectionComponent className="design">
        <Title>EXCLUSIVE DESIGN</Title>
        <SectionText>
          Discover our exclusive designs crafted with
          intricate details and deep spiritual significance.
          Each piece in our collection is thoughtfully
          created to resonate with your spiritual journey,
          offering both aesthetic beauty and profound
          meaning.
        </SectionText>
        design
      </SectionComponent>
      <SectionComponent className="handmade">
        <Title>HANDMADE WORK</Title>
        <SectionText>
          Experience the artistry and dedication of handmade
          craftsmanship in every item we offer. Our products
          are lovingly crafted by skilled artisans who pour
          their passion and expertise into every detail,
          ensuring quality and authenticity that you can
          trust.
        </SectionText>
        handmade
      </SectionComponent>
      <SectionComponent className="delivery">
        <Title>Careful Delivery</Title>
        <SectionText>
          Rest assured that your spiritual treasures will be
          handled with the utmost care from our store to
          your doorstep. We take great pride in ensuring
          that your orders are meticulously packaged and
          promptly shipped, so you can enjoy your purchases
          with peace of mind and excitement upon delivery.
        </SectionText>
        delivery
      </SectionComponent> */}

      <div class="img">
        <Bg src={bg} />
      </div>
      <div class="about cell">
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
        <ShopBtn
          onClick={() => {
            shopRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Shop Now
        </ShopBtn>
      </div>
      <div class="design cell">
        <Title>EXCLUSIVE DESIGN</Title>
        <SectionText>
          Discover our exclusive designs crafted with
          intricate details and deep spiritual significance.
          Each piece in our collection is thoughtfully
          created to resonate with your spiritual journey,
          offering both aesthetic beauty and profound
          meaning.
        </SectionText>
      </div>
      <div class="handmade cell">
        <Title>HANDMADE WORK</Title>
        <SectionText>
          Experience the artistry and dedication of handmade
          craftsmanship in every item we offer. Our products
          are lovingly crafted by skilled artisans who pour
          their passion and expertise into every detail,
          ensuring quality and authenticity that you can
          trust.
        </SectionText>
      </div>
      <div class="delivery cell">
        <Title>Careful Delivery</Title>
        <SectionText>
          Rest assured that your spiritual treasures will be
          handled with the utmost care from our store to
          your doorstep. We take great pride in ensuring
          that your orders are meticulously packaged and
          promptly shipped, so you can enjoy your purchases
          with peace of mind and excitement upon delivery.
        </SectionText>
      </div>
    </Container>
  );
}

export default About;
const Container = styled.div`
  padding: 30px 0;
  width: 100%;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto auto;
  gap: 30px 0px;
  grid-template-areas:
    "img"
    "about"
    "design"
    "handmade"
    "delivery";
  /* place-items: center; */
  .cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .img {
    grid-area: img;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  .about {
    justify-self: center;
    grid-area: about;
  }
  .design {
    justify-self: center;
    grid-area: design;
  }
  .handmade {
    justify-self: center;
    grid-area: handmade;
  }
  .delivery {
    justify-self: center;
    grid-area: delivery;
    background-color: #000;
    color: #fff;
  }
  @media (min-width: 1025px) {
    all: unset;
    width: 100%;
    height: 100svh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "img img about"
      "img img about"
      "design handmade delivery";
    .cell {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 30px 0;
    }
    .img {
      grid-area: img;
      background-color: #fff;
    }

    .about {
      grid-area: about;
      padding: 10% 0;
    }

    .design {
      grid-area: design;
    }

    .handmade {
      grid-area: handmade;
    }

    .delivery {
      grid-area: delivery;
    }
  }
`;
const Bg = styled.img`
  width: 100%;
  height: auto;
`;
const Section = styled.div`
  /* width: 90%;
*/
  /* display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #fff; */
  /* ${(props) =>
    props.last &&
    css`
      background-color: #191919;
      color: #fff;
    `}; */
`;
const Title = styled.div`
  text-transform: capitalize;
  font-weight: 500;
  font-family: var(--primary-text);
  font-size: 1.7rem;
  width: 90%;
  text-align: center;
`;
const SectionText = styled.div`
  width: 70%;
  text-align: center;
  font-size: 0.8rem;
`;
const ShopBtn = styled.button`
  all: unset;
  text-transform: uppercase;
  font-family: var(--primary-text);
  font-weight: 800;
  border-bottom: 2px solid black;
`;
