import { transform, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styled, { css } from "styled-components";
function FaqComponent({ children, onClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <FaqContainer
      ref={ref}
      onClick={onClick} // Aggiungi la proprietà onClick
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition:
          "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      {children}
    </FaqContainer>
  );
}

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
        <FaqComponent
          key={i}
          open={faqOpen[i]}
          onClick={() => {
            console.log(
              "===================================="
            );
            console.log("test");
            console.log(
              "===================================="
            );
            let newArray = [...faqOpen];
            if (faqOpen[i] === true) {
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
        </FaqComponent>
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
  max-width: 1200px;
  position: relative;
  gap: 10px;
  cursor: pointer;
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
