import React from 'react'
import { useGlobalContext } from '../context'
import { Name, Thumbnail, ThumbnailContainer } from '../Global.styles'

const Sprite = () => {
    const { pokemon } = useGlobalContext()

    return (
        <>
            <ThumbnailContainer>
                <Thumbnail src={pokemon?.sprite} alt={pokemon} />
            </ThumbnailContainer>
            <Name>No.{pokemon?.id} {pokemon?.name}</Name>
        </>
    )
}

export default Sprite