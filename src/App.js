import styled from "styled-components";
import MainCard from "./components/MainCard";
import SvgComponent1 from "./components/SvgComponent1";
import SvgComponent2 from "./components/SvgComponent2";
import { useGlobalContext } from "./context";

function App() {
  const { colors: { shade, color, tint } } = useGlobalContext()
  return (
    <AppContainer>
      <SvgComponent2 tint={tint} />
      <SvgComponent1 shade={shade} color={color} />
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
  width: 100vw;
  position: relative;
  background-color: #fff;
`
