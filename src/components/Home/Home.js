import React, { useState } from "react";
import styled from "styled-components";
import { IoClose, IoMenu } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import bg from "../../assets/image mobile.png";
import {
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
} from "react-icons/fa";
function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  let menuLinks = ["home", "shop", "about", "contact"];
  return (
    <Container>
      <Navbar>
        <Logo>SoulDec</Logo>
        <AnimatePresence mode="wait">
          {menuOpen && (
            <IconContainerClose
              key="closeIcon"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              as={motion.div}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              //   initial={{ x: 100 }}
              //   animate={{ x: 0 }}
              //   exit={{ x: 100 }}
            >
              <CloseIcon />
            </IconContainerClose>
          )}
          {!menuOpen && (
            <IconContainerOpen
              key="menuIcon"
              as={motion.div}
              //   initial={{ x: 100 }}
              //   animate={{ x: 0 }}
              //   exit={{ x: 100 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <MenuIcon />
            </IconContainerOpen>
          )}
        </AnimatePresence>
      </Navbar>
      <AnimatePresence>
        {menuOpen && (
          <Menu
            as={motion.div}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <LinksContainer>
              {menuLinks.map((link, i) => (
                <Link key={link}>{link}</Link>
              ))}
            </LinksContainer>
          </Menu>
        )}
      </AnimatePresence>
      <Body>
        <Title>products for the soul</Title>
        <SubTitle>
          Breathing new life trough cultural crafts
        </SubTitle>
        <CTA>shop now</CTA>
      </Body>
      <BgImg src={bg} />
      <BtnContainer>
        <CartIcon />
        <WhisIcon />
      </BtnContainer>
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100svh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  overflow: hidden;
  position: relative;
`;
const IconContainerOpen = styled.div``;
const IconContainerClose = styled.div``;
const MenuIcon = styled(IoMenu)`
  font-size: 30px;
`;
const CloseIcon = styled(IoClose)`
  font-size: 30px;
`;
const Navbar = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: var(--primary-text);
  z-index: 12;
`;
const Logo = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 2px;
`;
const BgImg = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 70svh;
  z-index: 10;
`;
const Title = styled.div`
  text-transform: uppercase;
  font-weight: 500;
  font-family: var(--primary-text);
  font-size: 4rem;
`;
const SubTitle = styled.div`
  font-family: var(--secondary-text);
  font-size: 2rem;
  opacity: 0.6;
`;
const CTA = styled.button`
  all: unset;
  text-transform: capitalize;
  font-family: var(--primary-text);
  font-weight: 500;
  border: 3px solid black;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  width: fit-content;
  font-size: 1.7rem;
`;
const Menu = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 11;
`;
const LinksContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  gap: 20px;
`;
const Link = styled.li`
  font-family: var(--primary-text);
  text-transform: capitalize;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 2px;
`;
const BtnContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  gap: 20px;
  padding: 10px;
`;
const CartIcon = styled(FaShoppingCart)`
  font-size: 30px;
  border: 2px solid white;
  height: 50px;
  width: 50px;
  padding: 10px;
  border-radius: 50%;
  color: white;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
`;
const WhisIcon = styled(FaHeart)`
  font-size: 30px;
  border: 2px solid white;
  height: 50px;
  width: 50px;
  padding: 10px;
  border-radius: 50%;
  color: white;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
  color: red;
`;
