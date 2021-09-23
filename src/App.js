import MainCard from "./components/MainCard";
import styled from "styled-components";
import SvgComponent1 from "./components/SvgComponent1";
import SvgComponent2 from "./components/SvgComponent2";
import { useGlobalContext } from "./context";

function App() {
  const { colors: { shade, color, tint } } = useGlobalContext()
  return (
    <AppContainer>
      <SvgComponent1 width={1440} height='100%' shade={shade} color={color} />
      <SvgComponent2 width={1440} height='100%' tint={tint} />
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
