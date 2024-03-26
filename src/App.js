import styled from "styled-components";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";

function App() {
  return (
    <Container>
      <Home />
      <Products />
    </Container>
  );
}

export default App;
const Container = styled.div`
  min-height: 100svh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff9e9;
`;
