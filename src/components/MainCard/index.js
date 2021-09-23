import SearchBar from "../SearchBar"
import { MainContainer, Title } from "./MainCard.styles"

const MainCard = () => {
    return (
        <MainContainer>
            <Title>PokéSearch</Title>
            <SearchBar />
        </MainContainer>
    )
}

export default MainCard
