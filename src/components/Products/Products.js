import React from "react";
import styled from "styled-components";
import furnitureImg from "../../assets/furniture.png";
import ornamentsImg from "../../assets/bodyornaments.png";
import incenseImg from "../../assets/incense.png";
import candleImg from "../../assets/candle.png";
function Products() {
  let TopCategoriesList = [
    {
      name: "furniture",
      img: furnitureImg,
    },
    {
      name: "body ornaments",
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
  return (
    <Container>
      <Title>Shop our top categories</Title>
      <TopCategories>
        {TopCategoriesList.map((card, i) => (
          <TopCategoriesCard key={i}>
            <CardTitle>{card.name}</CardTitle>
            <CardImg src={card.img} />
          </TopCategoriesCard>
        ))}
      </TopCategories>
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
  overflow-x: hidden;
  gap: 20px;
`;
const Title = styled.div`
  text-transform: uppercase;
  font-weight: 500;
  font-family: var(--primary-text);
  font-size: 1.7rem;
`;
const TopCategories = styled.div`
  width: 100%;
  overflow-x: auto;
  gap: 20px;
  /* background-color: red; */
  white-space: nowrap;
  position: relative;
  padding-bottom: 20px;
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
  overflow: hidden;
  padding: 10px;
`;
const CardTitle = styled.div`
  text-transform: capitalize;
  font-family: var(--secondary-text);
  font-weight: 400;
  z-index: 10;
  color: white;
  letter-spacing: 1px;
`;
const CardImg = styled.img`
  position: absolute;
  /* height: 100%;
  width: 100%; */
  bottom: -20%;
  width: 120%;
  height: auto;
`;
