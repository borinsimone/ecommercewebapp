import { transform } from "framer-motion";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styled, { css } from "styled-components";

function Faq() {
  let faqList = [
    {
      main: "How to place an order in our online store?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      main: "How much does the delivery cost?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      main: "How to use bonus card?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      main: "How to exchange or return the goods?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];
  const [faqOpen, setFaqOpen] = useState(
    faqList.map((faq) => false)
  );
  return (
    <Container>
      <Title>faq</Title>
      {faqList.map((faq, i) => (
        <FaqContainer
          key={i}
          open={faqOpen[i]}
          onClick={() => {
            let newArray = [...faqOpen];
            if (faqList[i] === true) {
              newArray[i] = false;
            } else {
              newArray = faqList.map((product) => false);
              newArray[i] = true;
            }
            setFaqOpen(newArray);
          }}
        >
          <Question>
            {faq.main}
            <ChevronIcon open={faqOpen[i]} />
          </Question>
          <Answer open={faqOpen[i]}>{faq.answer}</Answer>
        </FaqContainer>
      ))}
    </Container>
  );
}

export default Faq;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  text-transform: capitalize;
  font-weight: 500;
  font-family: var(--primary-text);
  font-size: 1.7rem;
`;
const FaqContainer = styled.div`
  border-bottom: 2px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  position: relative;
  gap: 10px;
`;
const Question = styled.div`
  font-family: var(--primary-text);
  font-weight: 700;
`;
const Answer = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-family: var(--secondary-text);
  height: 0;
  opacity: 0;
  ${(props) =>
    props.open &&
    css`
      height: 70px;
      opacity: 1;
    `};
  transition: 300ms;
  transition-delay: opacity 300ms;
`;
const ChevronIcon = styled(FaChevronDown)`
  position: absolute;
  right: 15px;
  transform: rotate(0deg);
  ${(props) => props.open && "transform: rotate(180deg);"};
  transition: 300ms;
`;
