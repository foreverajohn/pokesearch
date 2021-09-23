import { tint, shade } from 'tint-shade-color'

export const fetcher = async (...args) => {
    const response = await fetch(...args)
    if (!response.ok) {
        throw new Error('An error occurred while fetching the data.')
    }
    return response.json()
}

export const typeColors = (type) => {
    const colors = [
        {
            type: 'normal',
            color: '#9CA071',
        },
        {
            type: 'fighting',
            color: '#AD2F29',
        },
        {
            type: 'psychic',
            color: '#DF4F7C',
        },
        {
            type: 'dragon',
            color: '#595091',
        },
        {
            type: 'water',
            color: '#6781B3',
        },
        {
            type: 'fairy',
            color: '#E591A0',
        },
        {
            type: 'ice',
            color: '#94D1CB',
        },
        {
            type: 'flying',
            color: '#9688B5',
        },
        {
            type: 'ghost',
            color: '#645085',
        },
        {
            type: 'fire',
            color: '#E17733',
        },
        {
            type: 'steel',
            color: '#B0B1C3',
        },
        {
            type: 'grass',
            color: '#71B951',
        },
        {
            type: 'ground',
            color: '#D6B965',
        },
        {
            type: 'rock',
            color: '#AD9A3C',
        },
        {
            type: 'dark',
            color: '#625041',
        },
        {
            type: 'electric',
            color: '#F2CD3C'
        },
        {
            type: 'poison',
            color: '#8E3E87',
        },
        {
            type: 'bug',
            color: '#9EB039',
        }
    ]
    const { color } = colors.filter(color => color.type === type)[0]
    const palette = {
        tint: tint(color, 0.4),
        color,
        shade: shade(color, 0.6)
    }
    return palette
}