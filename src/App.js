import styled from "styled-components";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import CartPanel from "./components/CartPanel";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Faq from "./components/About/Faq";
import Info from "./components/About/Info";
import WhisPanel from "./components/WhisPanel";

function App() {
  const [cartContent, setCartContent] = useState([]);
  const [whisContent, setWhisContent] = useState([]);
  const [cartPanelOpen, setCartPanelOpen] = useState(false);
  const [whisPanelOpen, setWhisPanelOpen] = useState(true);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const shopRef = useRef(null);

  const contactRef = useRef(null);
  return (
    <Container>
      <Home
        setCartPanelOpen={setCartPanelOpen}
        setWhisPanelOpen={setWhisPanelOpen}
        cartContent={cartContent}
        whisContent={whisContent}
        homeRef={homeRef}
        aboutRef={aboutRef}
        shopRef={shopRef}
        contactRef={contactRef}
      />

      <About aboutRef={aboutRef} shopRef={shopRef} />
      <Products
        cartContent={cartContent}
        setCartContent={setCartContent}
        whisContent={whisContent}
        setWhisContent={setWhisContent}
        shopRef={shopRef}
      />

      <Faq />
      <Info contactRef={contactRef} />
      <AnimatePresence>
        {cartPanelOpen && (
          <CartPanel
            cartContent={cartContent}
            setCartContent={setCartContent}
            setCartPanelOpen={setCartPanelOpen}
          />
        )}
        {cartPanelOpen && (
          <Utility
            key="utility"
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
        {whisPanelOpen && whisContent.length !== 0 && (
          <WhisPanel
            whisContent={whisContent}
            setWhisContent={setWhisContent}
            setWhisPanelOpen={setWhisPanelOpen}
          />
        )}
      </AnimatePresence>
    </Container>
  );
}

export default App;
const Container = styled.div`
  height: fit-content;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff9e9;
  overflow-y: auto;
  position: relative;
`;
const Utility = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 100;
`;
