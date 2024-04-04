import React, { useRef } from "react";
import styled from "styled-components";
import furnitureImg from "../../assets/furniture.png";
import ornamentsImg from "../../assets/bodyornaments.png";
import incenseImg from "../../assets/incense.png";
import candleImg from "../../assets/candle.png";
import Deals from "./Deals";
import { useInView } from "framer-motion";
function Products({
  setCartContent,
  cartContent,
  whisContent,
  setWhisContent,
  shopRef,
}) {
  let TopCategoriesList = [
    {
      name: "furniture",
      img: furnitureImg,
    },
    {
      name: "ornaments",
      img: ornamentsImg,
    },
    {
      name: "incenses",
      img: incenseImg,
    },
    {
      name: "candle",
      img: candleImg,
    },
    {
      name: "vases",
      img: "",
    },
  ];
  const ShopTitle = useRef();
  const isShopInView = useInView(ShopTitle);
  const DealTitle = useRef();
  const isDealInView = useInView(DealTitle);

  return (
    <Container ref={shopRef}>
      <Title
        ref={ShopTitle}
        style={{
          opacity: isShopInView ? 1 : 0,
          top: isShopInView ? 0 : "100px",
          transition: "400ms",
        }}
      >
        Shop our top categories
      </Title>
      <TopCategories>
        {TopCategoriesList.map((card, i) => (
          <TopCategoriesCard key={i}>
            <CardTitle>{card.name}</CardTitle>
            <CardImg src={card.img} />
          </TopCategoriesCard>
        ))}
      </TopCategories>
      <Title
        ref={DealTitle}
        style={{
          opacity: isDealInView ? 1 : 0,
          top: isDealInView ? 0 : "100px",
          transition: "400ms",
        }}
      >
        best deals for you
      </Title>
      <Deals
        cartContent={cartContent}
        setCartContent={setCartContent}
        whisContent={whisContent}
        setWhisContent={setWhisContent}
      />
    </Container>
  );
}

export default Products;
const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 20px;
`;
const Title = styled.div`
  text-transform: capitalize;
  font-weight: 500;
  font-family: var(--primary-text);
  font-size: 1.7rem;
  position: relative;
`;
const TopCategories = styled.div`
  width: 100%;
  gap: 20px;
  /* background-color: red; */
  white-space: nowrap;
  position: relative;
  padding-bottom: 20px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    background-color: #d9d9d9;
    height: 5px;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: black !important;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-track {
    /* background-color: red; */
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: red;
  }
  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;
const TopCategoriesCard = styled.div`
  height: 145px;
  width: 180px;
  background-color: #fff;
  display: inline-flex;
  margin-right: 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  position: relative;
  padding: 10px;
  overflow: hidden;
  @media (min-width: 1024px) {
  }
`;
const CardTitle = styled.div`
  text-transform: capitalize;
  font-family: var(--secondary-text);
  font-weight: 700;
  z-index: 10;
  color: white;
  letter-spacing: 1px;
  width: 100%;
  height: fit-content;
  text-align: center;
  overflow-wrap: break-word;
`;
const CardImg = styled.img`
  position: absolute;
  /* height: 100%;
  width: 100%; */
  bottom: -20%;
  width: 120%;
  height: auto;
  transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    width: 160%;
    bottom: -50%;
  }
`;
