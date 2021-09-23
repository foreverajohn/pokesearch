import React from 'react'
import { useGlobalContext } from '../context'
import { SectionTitle, Stat, StatsSection, StatsTable, Subtitle, TableData } from '../Global.styles'

const Stats = () => {
    const { pokemon } = useGlobalContext()

    return (
        <StatsSection>
            <Subtitle>Stats</Subtitle>
            <StatsTable>
                <thead>
                    <tr>
                        <TableData start='true'>
                            <SectionTitle>Stats</SectionTitle>
                        </TableData>
                        <TableData >
                            <SectionTitle>Value</SectionTitle>
                        </TableData>
                    </tr>
                </thead>
                <tbody>
                    {pokemon?.stats?.slice(0, 3).map((stat, index) => (
                        <tr key={index}>
                            <TableData start='true'><Stat>{stat.stat.name}</Stat></TableData>
                            <TableData ><Stat>{stat.base_stat}</Stat></TableData>
                        </tr>
                    ))}
                </tbody>
            </StatsTable>
        </StatsSection>
    )
}

export default Stats
