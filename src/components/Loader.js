import React from 'react'
import pokeball from '../assets/pokeball.png'
import { LoaderContainer, Pokeball } from '../Global.styles'

const Loader = () => {
    return (
        <LoaderContainer>
            <Pokeball src={pokeball} alt='pokeball' />
        </LoaderContainer>
    )
}

export default Loader

