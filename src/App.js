import MainCard from "./components/MainCard";
import styled from "styled-components";
import SvgComponent1 from "./components/SvgComponent1";
import SvgComponent2 from "./components/SvgComponent2";

function App() {
  return (
    <AppContainer>
      <SvgComponent1 width={1440} height='100%' />
      <SvgComponent2 width={1440} height='100%' />
      <MainCard />
    </AppContainer>

  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  background-color: #fff;
`
