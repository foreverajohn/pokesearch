import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { SearchIcon, TextInput, TextInputContainer, Title } from '../Global.styles'

const Header = () => {
    const { setSearchTerm } = useGlobalContext()
    const [local, setLocal] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchTerm(local)
    }

    return (
        <>
            <Title>PokeSearch</Title>
            <TextInputContainer onSubmit={(e) => handleSubmit(e)}>
                <TextInput autoFocus={true} placeholder='Search Pokémon' value={local} onChange={(e) => setLocal(e.target.value)} />
                <SearchIcon onClick={(e) => handleSubmit(e)} />
            </TextInputContainer>
        </>
    )
}

export default Header
