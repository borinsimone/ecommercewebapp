import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { IoClose, IoShareOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import styled from "styled-components";

function CartPanel({
  cartContent,
  setCartContent,

  setCartPanelOpen,
}) {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const convertPriceToNumber = (priceString) => {
      return parseFloat(priceString.replace("$", ""));
    };

    const totalPrice = cartContent.reduce(
      (acc, product) => {
        // Moltiplica il prezzo del prodotto per la sua quantità
        const productPrice =
          convertPriceToNumber(product.price) *
          product.quantity;
        return acc + productPrice;
      },
      0
    );

    setTotalPrice(totalPrice);
  }, [cartContent]);

  return (
    <Container
      as={motion.div}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
    >
      <IconContainer
        onClick={() => {
          setCartPanelOpen(false);
        }}
      >
        <CloseIcon />
      </IconContainer>
      <Title>My Cart</Title>

      {cartContent.map((product, i) => (
        <CartItem
          onClick={() => {
            console.log(
              "===================================="
            );
            console.log(cartContent);
            console.log(
              "===================================="
            );
          }}
          key={product.name}
        >
          <ItemImg src={product.img} alt="img" />
          <ItemDetails>
            <ItemName>{product.name}</ItemName>
            <ItemPrice>{product.price}</ItemPrice>
          </ItemDetails>
          <ItemAction>
            <div style={{ display: "flex", gap: "10px" }}>
              <ItemIconContainer
                onClick={() => {
                  let newArray = [...cartContent];
                  newArray = newArray.filter(
                    (item) => item.id !== product.id
                  );
                  setCartContent(newArray);
                }}
              >
                <DeleteIcon />
              </ItemIconContainer>
              <ItemIconContainer>
                <ShareItemIcon />
              </ItemIconContainer>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <ReduceQuantity
                onClick={() => {
                  const updatedCart = cartContent.map(
                    (item) => {
                      if (
                        item.id === product.id &&
                        item.quantity > 1
                      ) {
                        return {
                          ...item,
                          quantity: item.quantity - 1,
                        };
                      }
                      return item;
                    }
                  );

                  setCartContent(updatedCart);
                }}
              />
              {product.quantity}
              <IncreaseQuantity
                onClick={() => {
                  const updatedCart = cartContent.map(
                    (item) => {
                      if (item.id === product.id) {
                        return {
                          ...item,
                          quantity: item.quantity + 1,
                        };
                      }
                      return item;
                    }
                  );

                  setCartContent(updatedCart);
                }}
              />
            </div>
          </ItemAction>
        </CartItem>
      ))}
      <Total>
        <TotalText>total amount</TotalText>
        <TotalPrice>$ {totalPrice.toFixed(2)}</TotalPrice>
      </Total>
      <CheckoutBtn>checkout</CheckoutBtn>
    </Container>
  );
}

export default CartPanel;
const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  background-color: #fff;
  height: fit-content;
  border-radius: 15px 15px 0 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const Title = styled.div`
  font-family: var(--primary-text);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
`;
const CartItem = styled.div`
  padding: 30px 0;
  display: flex;
  gap: 20px;
  border-top: 4px solid #d9d9d9;
  font-family: var(--primary-text);
`;
const ItemImg = styled.img`
  background-color: #d9d9d9;
  height: 100px;
  aspect-ratio: 1;
  border-radius: 10px;
`;
const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100px;
`;
const ItemName = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: capitalize;
`;
const ItemPrice = styled.div``;
const Line = styled.div`
  /* height: 4px;
  width: 100%;
  background-color: grey; */
`;
const CheckoutBtn = styled.button`
  all: unset;
  font-size: 1.3rem;
  font-family: var(--primary-text);
  text-transform: capitalize;
  font-weight: 700;
  background-color: #000;
  color: white;
  padding: 0.5rem 2.4rem;
  width: fit-content;
  margin: 0 auto;
  margin-top: auto;
  border-radius: 50px;
`;
const IconContainer = styled.div`
  position: absolute;
  cursor: pointer;
  right: 10px;
  top: 10px;
  height: 35px;
  border-radius: 50%;
  aspect-ratio: 1;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CloseIcon = styled(IoClose)`
  font-size: 1.4rem;
  color: white;
`;
const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const TotalText = styled.div`
  font-family: var(--primary-text);
  text-transform: capitalize;
  font-weight: 600;
`;
const TotalPrice = styled.div`
  font-family: var(--primary-text);
  font-weight: 600;
`;

const ItemIconContainer = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border-radius: 2px solid rgba(0, 0, 0, 0.3);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
const ItemAction = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const DeleteIcon = styled(MdDeleteOutline)`
  font-size: 1.4rem;
`;
const ShareItemIcon = styled(IoShareOutline)`
  font-size: 1.3rem;
`;
const ReduceQuantity = styled(FaChevronLeft)``;
const IncreaseQuantity = styled(FaChevronRight)``;
