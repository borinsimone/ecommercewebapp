import React from "react";
import { FaShareAlt, FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";
import { IoShareOutline } from "react-icons/io5";
function WhisPanel({
  whisContent,
  setWhisContent,
  setWhisPanelOpen,
}) {
  return (
    <Container>
      <TopBar>
        <Title>my whislist</Title>
        <Action>
          <ShareIcon />
          <>Share your list</>
          <IconContainer
            onClick={() => {
              setWhisPanelOpen(false);
            }}
          >
            <CloseIcon />
          </IconContainer>
        </Action>
      </TopBar>
      {whisContent.map((product, i) => (
        <WhisItem key={product.name}>
          <ItemImg src={product.img} alt="product" />
          <ItemDetails>
            <ItemName>{product.name}</ItemName>
            <ItemRating>
              {product.rating.map((rate, i) => {
                return <StarIcon key={i} active={rate} />;
              })}
            </ItemRating>
            <Price>{product.price}</Price>
          </ItemDetails>
          <ItemAction>
            {product.addedDate.toLocaleString(undefined, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            <ActionContainer>
              <ItemIconContainer
                onClick={() => {
                  let newArray = [...whisContent];
                  newArray = newArray.filter(
                    (item) => item.id !== product.id
                  );
                  setWhisContent(newArray);
                }}
              >
                <DeleteIcon />
              </ItemIconContainer>
              <ItemIconContainer>
                <ShareItemIcon />
              </ItemIconContainer>
            </ActionContainer>
          </ItemAction>
        </WhisItem>
      ))}
    </Container>
  );
}

export default WhisPanel;
const Container = styled.div`
  position: fixed;
  bottom: 0;
  height: 100svh;
  width: 100vw;
  background-color: #fff;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  font-family: var(--primary-text);
`;
const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  font-family: var(--primary-text);
  text-transform: capitalize;
  font-weight: 600;
`;
const Action = styled.div`
  display: flex;
  align-items: center;
`;
const ShareIcon = styled(FaShareAlt)``;
const IconContainer = styled.div`
  /* background-color: #000; */
  display: flex;
  align-items: center;
  border-left: 2px solid grey;
  margin-left: 10px;
`;
const CloseIcon = styled(IoClose)`
  font-size: 1.4rem;
  color: black;
`;
const WhisItem = styled.div`
  height: 150px;
  display: flex;
`;
const ItemImg = styled.img`
  background-color: #d9d9d9;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 10px;
`;
const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const ItemName = styled.div`
  font-weight: 600;
  text-transform: capitalize;
`;
const Price = styled.div`
  font-weight: 500;
`;
const ItemRating = styled.div`
  margin-top: auto;
`;
const StarIcon = styled(FaStar)`
  color: ${(props) => (props.active ? "orange" : "grey")};
  font-size: 1.4rem;
`;
const ItemAction = styled.div`
  display: flex;
  flex-direction: column;
`;
const ActionContainer = styled.div`
  display: flex;
  gap: 10px;
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
const DeleteIcon = styled(MdDeleteOutline)`
  font-size: 1.4rem;
`;
const ShareItemIcon = styled(IoShareOutline)`
  font-size: 1.3rem;
`;
