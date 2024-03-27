import styled from "styled-components";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import About from "./components/About/About";

function App() {
  return (
    <Container>
      <Home />
      <Products />
      <About />
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
  overflow-x: hidden;
`;
