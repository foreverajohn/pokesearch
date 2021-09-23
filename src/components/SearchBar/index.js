import { TextInput, TextInputContainer } from "./SearchBar.styles"
import { FaSearch } from 'react-icons/fa'

function SearchBar() {
    return (
        <TextInputContainer>
            <TextInput placeholder='Search' />
            <FaSearch style={{ height: 24 }} />
        </TextInputContainer>
    )
}

export default SearchBar
