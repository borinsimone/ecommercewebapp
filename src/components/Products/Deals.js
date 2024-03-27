import React from "react";
import styled from "styled-components";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";
function Deals() {
  let productsList = [
    {
      img: "",
      name: "",
      price: "",
      desciption: "",
      rating: "",
    },
  ];
  return (
    <Container>
      <ProductCard>
        <ProductImg src="" alt="product img" />
        <Details>
          <MainDetails>
            <Name>name</Name> <Price>$99.99</Price>
          </MainDetails>
          <Description>Product description</Description>
          <Rating>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Rating>

          <BtnContainer>
            <WhislistBtn>
              <HeartIcon />
            </WhislistBtn>
            <AddToCart>add to cart</AddToCart>
          </BtnContainer>
        </Details>
      </ProductCard>
    </Container>
  );
}

export default Deals;
const Container = styled.div`
  width: 100%;
  height: fit-content;
  /* background-color: #fff; */
`;
const ProductCard = styled.div`
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.4); */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  font-family: var(--primary-text);
`;
const ProductImg = styled.img`
  background-color: #d9d9d9;
  width: 80%;
  aspect-ratio: 1;
  border-radius: 10px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 5px;
  flex: 1;
  width: 90%;
  /* width: 100%; */
`;
const MainDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Name = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: capitalize;
`;
const Price = styled.div`
  font-weight: 500;
`;
const Description = styled.div``;
const Rating = styled.div``;
const WhislistBtn = styled.button`
  all: unset;
  height: 30px;
  aspect-ratio: 1;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;
const AddToCart = styled.button`
  all: unset;
  text-transform: uppercase;
  height: 30px;
  padding: 0 1em;
  border-radius: 50px;
  border: 2px solid black;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  font-weight: 500;
`;
const StarIcon = styled(FaStar)`
  color: orange;
`;
const HeartIcon = styled(FaRegHeart)``;
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 20px;
`;
// const ProductCard = styled.div`
//   width: 100%;
//   /* background-color: rgba(0, 0, 0, 0.4); */
//   display: flex;
//   gap: 10px;
//   padding: 10px;
//   border-radius: 10px;
//   font-family: var(--primary-text);
// `;
// const ProductImg = styled.img`
//   background-color: #d9d9d9;
//   height: 100px;
//   width: 100px;
//   border-radius: 10px;
// `;
// const Details = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   gap: 5px;
//   flex: 1;
//   /* width: 100%; */
// `;
// const MainDetails = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
// `;
// const Name = styled.div`
//   font-size: 1.3rem;
//   font-weight: 600;
//   text-transform: capitalize;
// `;
// const Price = styled.div``;
// const Description = styled.div``;
// const Rating = styled.div``;
// const WhislistBtn = styled.button`
//   all: unset;
//   height: 30px;
//   aspect-ratio: 1;
//   background-color: #fff;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
// `;
// const AddToCart = styled.button`
//   all: unset;
//   text-transform: uppercase;
//   height: 30px;
//   padding: 0 1em;
//   border-radius: 50px;
//   border: 2px solid black;
//   box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
//   font-weight: 500;
// `;
// const StarIcon = styled(FaStar)`
//   color: orange;
// `;
// const HeartIcon = styled(FaRegHeart)``;
// const BtnContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: auto;
//   gap: 10px;
// `;
