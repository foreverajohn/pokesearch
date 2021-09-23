import React from 'react'
import { useGlobalContext } from '../context'
import { Subtitle, Type, TypesSection } from '../Global.styles'

const Types = () => {
    const { pokemon } = useGlobalContext()

    return (
        <TypesSection>
            <Subtitle>Types</Subtitle>
            {pokemon?.types?.map(({ slot, type }, index) => (
                <Type key={slot}>{(index ? ', ' : '') + type.name}</Type>
            ))}
        </TypesSection>
    )
}

export default Types
