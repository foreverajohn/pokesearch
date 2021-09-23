import React, { useState, useContext, useEffect, createContext } from 'react'
import { useCallback } from 'react'
import useSWR from 'swr'
import { fetcher, typeColors } from './utils'

const url = 'https://pokeapi.co/api/v2/'
export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState(1)
    const [pokemon, setPokemon] = useState(null)
    const [colors, setColors] = useState({
        tint: '#62E18E',
        color: '#80EF91',
        shade: '#8CF691'
    })
    const { data } = useSWR(`${url}pokemon/${searchTerm}`, fetcher)
    const { data: abilityData } = useSWR(`${data?.abilities[0]?.ability?.url}`, fetcher)

    const fetchData = useCallback(async () => {
        setLoading(true)
        try {
            if (data) {
                const palette = data?.types.map(type => typeColors(type?.type.name))
                const pokemonData = await {
                    id: data.id,
                    name: data.name,
                    sprite: data.sprites.other.dream_world.front_default,
                    types: data.types,
                    stats: data.stats,
                    about: abilityData?.effect_entries.filter(entry => entry.language.name === 'en')[0].effect,
                    palette
                }
                setPokemon(pokemonData)
                setColors(palette[0])
            } else {
                setPokemon([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [data, abilityData])
    useEffect(() => {
        fetchData()
    }, [searchTerm, fetchData, data])
    return (
        <AppContext.Provider
            value={{ loading, pokemon, searchTerm, setSearchTerm, colors }}
        >
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}
