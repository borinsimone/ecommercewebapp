import React, { useState } from "react";
import styled from "styled-components";
import { IoClose, IoMenu } from "react-icons/io5";
import {
  AnimatePresence,
  motion,
  useInView,
} from "framer-motion";
import bg from "../../assets/image mobile.png";
import {
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
} from "react-icons/fa";
function Home({
  setCartPanelOpen,
  cartContent,

  homeRef,
  aboutRef,
  shopRef,
  faqRef,
  contactRef,
  setWhisPanelOpen,
  whisContent,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  let menuLinks = [
    {
      name: "home",
      link: homeRef,
    },
    {
      name: "about",
      link: aboutRef,
    },
    {
      name: "shop",
      link: shopRef,
    },
    { name: "contact", link: contactRef },
  ];
  const isInView = useInView(homeRef);

  return (
    <Container ref={homeRef}>
      <Navbar>
        <Logo>SoulDec</Logo>
        <DesktopLinks>
          {menuLinks.map((item, i) => (
            <DesktopLinksItem
              key={i}
              onClick={() => {
                item.link.current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {item.name}
            </DesktopLinksItem>
          ))}
        </DesktopLinks>
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
        <div className="desktopIcon">
          <WhisIcon
            className="whisIcon"
            onClick={() => {
              if (whisContent.length !== 0) {
                setWhisPanelOpen(true);
              }
            }}
          />
          <CartIcon
            className="cartIcon"
            onClick={() => {
              setCartPanelOpen(true);
            }}
          />
        </div>
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
              {menuLinks.map((item, i) => (
                <Link
                  key={item.name}
                  onClick={() => {
                    item.link.current.scrollIntoView({
                      behavior: "smooth",
                    });
                    setMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </LinksContainer>
          </Menu>
        )}
      </AnimatePresence>
      <Body>
        <Title
          as={motion.div}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          products for the soul
        </Title>
        <SubTitle
          as={motion.div}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Breathing new life trough cultural crafts
        </SubTitle>
        <CTA
          as={motion.button}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            opacity: { delay: 0.2 },
            y: { delay: 0.2 },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            shopRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          shop now
        </CTA>
      </Body>

      <BgImg
        src={bg}
        as={motion.img}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      />
      <BtnContainer
        as={motion.div}
        style={{
          flexDirection: isInView ? "column" : "row",
          bottom: isInView ? "10svh" : "0",
        }}
      >
        <BottomIconContainer>
          <CartNotification>
            {cartContent.length}
          </CartNotification>
          <CartIcon
            onClick={() => {
              setCartPanelOpen(true);
            }}
          />
        </BottomIconContainer>
        <BottomIconContainer>
          <WhisIcon
            onClick={() => {
              if (whisContent.length !== 0) {
                setWhisPanelOpen(true);
              }
            }}
          />
        </BottomIconContainer>
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
  position: relative;
  padding: 10px;
  overflow: hidden;
`;
const IconContainerOpen = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;
const IconContainerClose = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
`;
const MenuIcon = styled(IoMenu)`
  font-size: 2rem;
`;
const CloseIcon = styled(IoClose)`
  font-size: 2rem;
`;
const Navbar = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: var(--primary-text);
  z-index: 102;
  overflow: hidden;
  position: relative;
  .desktopIcon {
    @media (max-width: 1025px) {
      display: none;
    }
  }
  .cartIcon {
    @media (max-width: 1025px) {
      display: none;
    }
    margin: 0 10px;
  }
  .whisIcon {
    @media (max-width: 1025px) {
    }
  }
`;
const Logo = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 2px;
`;
const DesktopLinks = styled.ul`
  @media (max-width: 1024px) {
    display: none;
  }
  display: flex;
  justify-content: space-evenly;
  gap: 10%;
  list-style-type: none;
  position: absolute;
  left: 30%;
  width: 40%;
`;
const DesktopLinksItem = styled.li`
  text-transform: capitalize;
  cursor: pointer;
`;

const BgImg = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: 300ms;
  @media (min-width: 1024px) {
    left: 0;
    bottom: -10%;
    width: 60%;
  }
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
  width: 100%;
`;
const SubTitle = styled.div`
  font-family: var(--secondary-text);
  font-size: 2rem;
  opacity: 0.8;
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
  cursor: pointer;
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
  z-index: 101;
  @media (min-width: 1025px) {
    display: none;
  }
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
  cursor: pointer;
`;
const BtnContainer = styled.div`
  position: fixed;
  right: 0;
  display: flex;
  /* flex-direction: column; */
  gap: 20px;
  padding: 10px;
  z-index: 100;
  transition: 300ms;
`;

const BottomIconContainer = styled.div`
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  border: 4px solid #191919;
  aspect-ratio: 1;
  height: 3.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: none;
  }
`;
const CartIcon = styled(FaShoppingCart)`
  font-size: 1.7rem;

  color: #191919;
`;
const WhisIcon = styled(FaHeart)`
  font-size: 1.7rem;

  color: red;
`;
const CartNotification = styled.div`
  background-color: red;
  height: 1.4rem;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 800;
  border-radius: 50%;
  position: absolute;
  top: -10%;
  right: -10%;
`;
