import React from 'react'
import { useGlobalContext } from '../context'
import { AboutSection, Bio, Subtitle } from '../Global.styles'

const About = () => {
    const { pokemon } = useGlobalContext()

    return (
        <AboutSection>
            <Subtitle>About</Subtitle>
            <Bio>
                {pokemon.about}
            </Bio>
        </AboutSection>
    )
}

export default About
