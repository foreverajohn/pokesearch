import MainCard from "./components/MainCard";
import styled from "styled-components";
import Svg1 from './assets/vector_1.svg'
import Svg2 from './assets/vector_2.svg'

function App() {
  return (
    <AppContainer>
      <img src={Svg1} style={{ height: "100%", color: 'blue', position: ' absolute', zIndex: 5 }} />
      <img src={Svg2} style={{ height: "100%", color: 'blue', position: ' absolute', zIndex: 1, scale: 1.5 }} />
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
  flex: 1;
`
