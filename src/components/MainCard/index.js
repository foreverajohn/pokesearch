import { useEffect, useState } from "react"
import useSWR from "swr"
import { MainContainer, TextInput, TextInputContainer, Title } from "./MainCard.styles"
import { FaSearch } from 'react-icons/fa'

const fetcher = async (...args) => {
    const response = await fetch(...args)
    return response.json()
}

const MainCard = () => {
    const [pokemon, setPokemon] = useState('')
    const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, fetcher)

    console.log(data)

    useEffect(() => {
        if (!pokemon) {
            setPokemon('bulbasaur')
        }
    }, [pokemon])

    return (
        <MainContainer>
            <Title>PokéSearch</Title>
            <TextInputContainer>
                <TextInput placeholder='Search Pokémon' style={{ fontSize: 16 }} value={pokemon} onChange={(e) => setPokemon(e.target.value)} />
                <FaSearch style={{ height: 32, color: '#00000099', marginRight: 8 }} />
            </TextInputContainer>
            <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                <img src={data?.sprites.other.dream_world.front_default} alt={pokemon} style={{ height: 120, marginTop: 40, marginBottom: 16 }} />
            </div>
            <div>
                <h1 style={{ textAlign: 'center' }}>No.{data?.id} {pokemon}</h1>
                <h3 style={{ marginLeft: 32, fontWeight: 500 }}>About</h3>
                <p style={{ marginInline: 32, textAlign: 'justify', fontWeight: 400, fontFamily: 'Open Sans', fontSize: 18 }}>This Pokémon's damaging moves have a 10% chance to make the target flinch with each hit if they do not already cause flinching as a secondary effect. This ability does not stack with a held item. Overworld: The wild encounter rate is halved while this Pokémon is first in the party.
                </p>
            </div>
            <div style={{ display: 'flex', marginTop: 16 }}>
                <div style={{ height: 200, width: '60%' }}>
                    <h3 style={{ marginLeft: 32, fontWeight: 500 }}>Types</h3>
                    <div style={{ marginLeft: 32 }}>
                        {data.types.map(({ slot, type }, index) => (
                            <p key={slot} style={{ textTransform: 'capitalize', display: 'inline-flex' }}>{(index ? ', ' : '') + type.name}</p>
                        ))}
                    </div>
                </div>
                <div style={{ height: 200, width: '40%' }}>
                    <h3 style={{ marginLeft: 32, fontWeight: 500 }}>Stats</h3>
                </div>
            </div>
        </MainContainer >
    )
}

export default MainCard
