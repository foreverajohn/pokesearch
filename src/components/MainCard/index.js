import { useState } from "react"
import { MainContainer, TextInput, TextInputContainer, Title } from "./MainCard.styles"
import { FaSearch } from 'react-icons/fa'
import { useGlobalContext } from '../../context'

const MainCard = () => {
    const { pokemon, setSearchTerm, searchTerm, loading } = useGlobalContext()
    const [local, setLocal] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchTerm(local)
    }

    return (
        <MainContainer>
            <Title>PokéSearch</Title>
            <TextInputContainer onSubmit={(e) => handleSubmit(e)}>
                <TextInput autoFocus={true} placeholder='Search Pokémon' style={{ fontSize: 16, fontFamily: 'Poppins' }} value={local} onChange={(e) => setLocal(e.target.value)} />
                <FaSearch style={{ height: 32, color: '#00000099', marginRight: 8, cursor: 'pointer' }} onClick={(e) => handleSubmit(e)} />
            </TextInputContainer>
            {searchTerm && !loading && (
                <>
                    <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                        <img src={pokemon?.sprite} alt={pokemon} style={{ height: 120, marginTop: 40, marginBottom: 16 }} />
                    </div>
                    <div>
                        <h1 style={{ textAlign: 'center' }}>No.{pokemon?.id} {pokemon?.name}</h1>
                        <h3 style={{ marginLeft: 24 }}>About</h3>
                        <p style={{ marginInline: 24, textAlign: 'justify', fontWeight: 400, fontFamily: 'Open Sans', fontSize: 18 }}>
                            {pokemon.about}
                        </p>
                    </div>
                    <div style={{ display: 'flex', marginTop: 64 }}>
                        <div style={{ height: 200, width: '70%' }}>
                            <h3 style={{ marginLeft: 24 }}>Types</h3>
                            <div style={{ marginLeft: 24 }}>
                                {pokemon?.types?.map(({ slot, type }, index) => {
                                    return (
                                        <p key={slot} style={{ textTransform: 'capitalize', display: 'inline-flex' }}>{(index ? ', ' : '') + type.name}</p>
                                    )
                                })}
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
                                    {pokemon?.stats?.slice(0, 3).map((stat, index) => (
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
