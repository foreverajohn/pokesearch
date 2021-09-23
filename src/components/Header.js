import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { SearchIcon, TextInput, TextInputContainer, Title } from '../Global.styles'

const Header = () => {
    const { setSearchTerm, setAlert } = useGlobalContext()
    const [local, setLocal] = useState('')

    const handleSubmit = (e) => {
        if (local >= 898) {
            e.preventDefault()
            setAlert(true)
        } else {
            e.preventDefault()
            setSearchTerm(local)
            setAlert(false)
        }
    }

    return (
        <>
            <Title>PokéSearch</Title>
            <TextInputContainer onSubmit={(e) => handleSubmit(e)}>
                <TextInput autoFocus={true} placeholder='Search by ID or name' value={local} onChange={(e) => setLocal(e.target.value)} />
                <SearchIcon onClick={(e) => handleSubmit(e)} />
            </TextInputContainer>
        </>
    )
}

export default Header
