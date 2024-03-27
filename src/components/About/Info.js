import React from "react";
import styled from "styled-components";
import bg from "../../assets/infobg.png";
function Info() {
  return (
    <Container>
      <NewsletterContainer>
        <Bg src={bg} />
        <Title>exclusive news & content</Title>
        <Subtitle>
          Subscribe to our newsletter to keep up to date
          with all the events
        </Subtitle>
        <Subscribe>
          <InputRange placeholder="Email address" />
          <Submit>Sign Up</Submit>
        </Subscribe>
      </NewsletterContainer>
      <InfoContainer>
        <InfoColumn>
          <InfoTitle>service</InfoTitle>
          <InfoLink>shop</InfoLink>
          <InfoLink>our story</InfoLink>
          <InfoLink>FAQ</InfoLink>
          <InfoLink>contact us</InfoLink>
        </InfoColumn>
        <InfoColumn>
          <InfoTitle>company</InfoTitle>
          <InfoLink>about</InfoLink>
          <InfoLink>blog</InfoLink>
          <InfoLink>press</InfoLink>
          <InfoLink>partners</InfoLink>
        </InfoColumn>
        <InfoColumn>
          <InfoTitle>legal</InfoTitle>
          <InfoLink>claim</InfoLink>
          <InfoLink>privacy</InfoLink>
          <InfoLink>terms</InfoLink>
        </InfoColumn>
      </InfoContainer>
      <Title>LANGUAGE & CURRENCY</Title>
    </Container>
  );
}

export default Info;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  width: 100%;
  overflow: hidden;
`;

const Bg = styled.img`
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 0;
  height: 100%;
`;
const NewsletterContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 30svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: white;
`;
const Title = styled.div`
  text-transform: capitalize;
  font-weight: 500;
  font-family: var(--primary-text);
  font-size: 1.7rem;
  z-index: 1;
`;
const Subtitle = styled.div`
  z-index: 1;
  font-family: var(--secondary-text);
  text-align: center;
  width: 80%;
`;
const Subscribe = styled.div`
  width: 80%;
  border: 2px solid white;
  z-index: 1;
  border-radius: 50px;
  display: flex;
  height: 2.5rem;
`;
const InputRange = styled.input`
  all: unset;
  width: 70%;
  color: white;
  border-right: 2px solid white;

  padding-left: 20px;
  &::placeholder {
    opacity: 1;
    color: white;
    font-family: var(--secondary-text);
    font-size: 0.8rem;
  }
`;
const Submit = styled.button`
  all: unset;
  width: 30%;
  font-family: var(--primary-text);
  height: 100%;
  text-align: center;
`;
const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const InfoTitle = styled.div`
  font-family: var(--primary-text);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.2rem;
`;
const InfoLink = styled.div`
  font-family: var(--primary-text);
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 700;
`;
