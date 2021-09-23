import { MainContainer, StatsTypesSection } from "../Global.styles"
import { useGlobalContext } from '../context'
import Header from "./Header"
import About from "./About"
import Sprite from "./Sprite"
import Types from "./Types"
import Stats from "./Stats"

const MainCard = () => {
    const { searchTerm, loading } = useGlobalContext()

    return (
        <MainContainer>
            <Header />
            {searchTerm && !loading && (
                <>
                    <Sprite />
                    <About />
                    <StatsTypesSection>
                        <Types />
                        <Stats />
                    </StatsTypesSection>
                </>
            )}
        </MainContainer >
    )
}

export default MainCard
