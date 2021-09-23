import { useState } from "react"
import useSWR from "swr"
import { MainContainer, TextInput, TextInputContainer, Title } from "./MainCard.styles"
import { FaSearch } from 'react-icons/fa'

const fetcher = async (...args) => {
    try {
        const response = await fetch(...args)
        return response.json()
    } catch (error) {
        console.log(error, 'There was an error')
    }
}

const MainCard = () => {
    const [pokemon, setPokemon] = useState('')
    const [searchTerm, setSearchTerm] = useState(1)
    const [loading, setLoading] = useState(false)
    const { data } = useSWR(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`, fetcher)
    const { data: ability } = useSWR(`${data?.abilities[0].ability.url}`, fetcher)

    const abilityDesc = ability?.effect_entries?.filter(entry => entry.language.name === 'en')[0]

    const handleSubmit = () => {
        setLoading(true)
        setSearchTerm(pokemon)
        setLoading(false)
    }

    return (
        <MainContainer>
            <Title>PokéSearch</Title>
            <TextInputContainer>
                <TextInput placeholder='Search Pokémon' style={{ fontSize: 16 }} value={pokemon} onChange={(e) => setPokemon(e.target.value)} />
                <FaSearch style={{ height: 32, color: '#00000099', marginRight: 8, cursor: 'pointer' }} onClick={handleSubmit} />
            </TextInputContainer>
            {searchTerm && !loading && (
                <>
                    <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                        <img src={data?.sprites?.other?.dream_world?.front_default} alt={pokemon} style={{ height: 120, marginTop: 40, marginBottom: 16 }} />
                    </div>
                    <div>
                        <h1 style={{ textAlign: 'center' }}>No.{data?.id} {data?.name}</h1>
                        <h3 style={{ marginLeft: 24 }}>About</h3>
                        <p style={{ marginInline: 24, textAlign: 'justify', fontWeight: 400, fontFamily: 'Open Sans', fontSize: 18 }}>
                            {abilityDesc?.effect}
                        </p>
                    </div>
                    <div style={{ display: 'flex', marginTop: 64 }}>
                        <div style={{ height: 200, width: '70%' }}>
                            <h3 style={{ marginLeft: 24 }}>Types</h3>
                            <div style={{ marginLeft: 24 }}>
                                {data?.types?.map(({ slot, type }, index) => (
                                    <p key={slot} style={{ textTransform: 'capitalize', display: 'inline-flex' }}>{(index ? ', ' : '') + type.name}</p>
                                ))}
                            </div>
                        </div>
                        <div style={{ height: 200, width: '30%', marginRight: 24 }}>
                            <h3>Stats</h3>
                            <table style={{ width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: 'start' }}>
                                            <h4>Stats</h4>
                                        </th>
                                        <th style={{ textAlign: 'end' }}>
                                            <h4>Value</h4>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.stats?.slice(0, 3).map((stat, index) => (
                                        <tr key={index}>
                                            <td style={{ textAlign: 'start' }}><p style={{ fontSize: 14 }}>{stat.stat.name}</p></td>
                                            <td style={{ textAlign: 'end' }}><p style={{ fontSize: 14 }}>{stat.base_stat}</p></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}


        </MainContainer >
    )
}

export default MainCard
