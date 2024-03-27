import React, { useState } from "react";
import styled from "styled-components";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";
import { IoCart } from "react-icons/io5";
function Deals() {
  let productsList = [
    {
      img: "",
      name: "name",
      price: "$99.99",
      desciption: "",
      rating: [true, true, true, true, false],
    },
    {
      img: "",
      name: "name2",
      price: "$99.99",
      desciption: "",
      rating: [true, true, true, true, false],
    },
  ];
  const [cardOpen, setCardOpen] = useState(
    productsList.map((product) => false)
  );
  return (
    <Container>
      {productsList.map((product, i) => (
        <ProductContainer key={i} active={cardOpen[i]}>
          <ProductCard active={cardOpen[i]}>
            <ProductImg src="" alt="product img" />
            <Details
              onClick={() => {
                let newArray = [...cardOpen];
                if (cardOpen[i] === true) {
                  newArray[i] = false;
                } else {
                  newArray = productsList.map(
                    (product) => false
                  );

                  newArray[i] = true;
                }
                setCardOpen(newArray);
              }}
            >
              <MainDetails>
                <Name>{product.name}</Name>{" "}
                <Price>{product.price}</Price>
              </MainDetails>
              {/* <Description>Product description</Description> */}
              <Rating>
                {product.rating.map((rate, i) => {
                  return <StarIcon key={i} active={rate} />;
                })}
                {/* <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon /> */}
                <span>(128)</span>
              </Rating>

              {/* <BtnContainer>
            <WhislistBtn>
              <HeartIcon />
            </WhislistBtn>
            <AddToCart>add to cart</AddToCart>
          </BtnContainer> */}
            </Details>
          </ProductCard>
          <WhislistPanel active={cardOpen[i]}>
            <IconContainer>
              <HeartIcon />
            </IconContainer>
          </WhislistPanel>
          <CartPanel active={cardOpen[i]}>
            <IconContainer cart={true}>
              <CartIcon />
            </IconContainer>
          </CartPanel>
        </ProductContainer>
      ))}
    </Container>
  );
}

export default Deals;
const Container = styled.div`
  width: 100%;
  height: fit-content;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* background-color: #fff; */
`;
const ProductContainer = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 30px;
  position: relative;
  /* overflow: hidden; */
  box-shadow: ${(props) =>
    props.active
      ? "4px 8px 8px rgba(0, 0, 0, 0.3)"
      : "none"};
  transition: box-shadow 600ms;
  @media (min-width: 760px) {
  }
`;
const ProductCard = styled.div`
  z-index: 10;
  width: ${(props) => (props.active ? "60%" : "100%")};
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px 20px;
  padding: 10px;
  border-radius: inherit;
  font-family: var(--primary-text);
  position: absolute;
  transition: width 600ms
    cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
`;
const ProductImg = styled.img`
  background-color: #d9d9d9;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 10px;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  flex: 1;
  width: 90%;
  /* min-width: 300px; */
  height: 170px;
  /* background-color: #fff; */
  padding: 40px 0;
`;
const MainDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  height: 100%;
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
const Rating = styled.div`
  width: fit-content;
  /* height: 100%; */
  margin-top: auto;
  display: flex;
  span {
    font-size: 0.8rem;
    margin-bottom: auto;
  }
`;
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
  color: ${(props) => (props.active ? "orange" : "grey")};
  font-size: 1.4rem;
`;

const IconContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeartIcon = styled(FaRegHeart)`
  font-size: 3rem;
  border-radius: 50%;
  background-color: #fff;
  padding: 10px;
  color: red;
`;
const CartIcon = styled(IoCart)`
  font-size: 3rem;
  border-radius: 50%;
  background-color: #fff;
  padding: 10px;
`;
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 20px;
`;
const WhislistPanel = styled.div`
  width: ${(props) => (props.active ? "40%" : "60%")};
  height: 100%;
  background-color: #ffeab2;
  position: absolute;
  top: 0;
  left: 40%;
  z-index: 5;
  border-radius: 30px !important;
  transition: width 600ms
    cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 200ms;
  display: flex;
  align-items: center;
  justify-content: end;
`;
const CartPanel = styled.div`
  width: ${(props) => (props.active ? "40%" : "40%")};
  /* width: 10px; */
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  /* background-color: #000; */
  position: absolute;
  top: 0;
  right: 0;
  z-index: 4;
  border-radius: 30px !important;
  transition: width 600ms
    cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: 400ms;
  display: flex;
  align-items: center;
  justify-content: end;
`;
