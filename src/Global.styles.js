import styled, { keyframes } from "styled-components"
import { FaSearch } from 'react-icons/fa'

export const MainContainer = styled.div`
    min-height: 719px;
    width: 50%;
    box-shadow: 0px 3px 5px 0px #00000033;
    z-index: 10;
    background-color: #fff;
    align-content: center;
    @media screen and (max-width: 960px) {
        width: 80vw;
        height: 100vh;
    }
    @media screen and (max-width: 769px) {
        width: 100vw;
        height: 100vh;
    }
`
export const TextInputContainer = styled.form`
    width: 50%;
    height: 56px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border: 1px solid;
    border-color: #DADADA;
    border-radius: 4px;
    padding: 0px 10px;
    margin: 0 auto;
    @media screen and (max-width: 960px) {
        padding: 0px 4px;
        height: 40px;
    }
    @media screen and (max-width: 769px) {
        padding: 0px 4px;
        height: 32px;
    }
`
export const TextInput = styled.input`
    border: none;
    outline: none;
    font-size: 24px;
    width: 100%;
    font-family: Poppins;
    @media screen and (max-width: 960px) {
        font-size: 18px;
    }
    @media screen and (max-width: 769px) {
        font-size: 16px;
    }
`
export const SearchIcon = styled(FaSearch)`
    height: 48px; 
    color: #414141;
    margin-right: 8px; 
    cursor: pointer;
`
export const Title = styled.p`
    font-family: Poppins;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 54px;
    letter-spacing: 0em;
    height: 57px;
    margin: 16px;
    width: 100%;
    color: #414141;
    text-align: center;
    @media screen and (max-width: 769px) {
        font-size: 24px;
    }
`
export const ThumbnailContainer = styled.div`
    width: 100%; 
    justify-content: center; 
    display: flex;
`
export const Thumbnail = styled.img`
    height: ${({ scale }) => (scale > 649 ? '172px' : '120px')} ; 
    margin-top: 40px; 
`
export const Name = styled.h1`
    text-transform: capitalize;
    font-family: Poppins;
    color: #414141;
    text-align: center;
    margin-top: 16px;
    @media screen and (max-width: 769px) {
        font-size: 18px;
    }
`
export const Subtitle = styled.h3`
    text-transform: capitalize;
    font-family: 'Poppins';
    color: #414141;
    font-weight: 500;
    font-size: 24px;
    @media screen and (max-width: 769px) {
        font-size: 18px;
    }
`
export const AboutSection = styled.div`
    margin-inline: 24px;
    @media screen and (max-width: 769px) {
        margin-inline: 32px;
    }
`
export const Bio = styled.p`
    text-align: justify; 
    font-weight: 400; 
    font-family: Open Sans; 
    font-size: 18px;
    @media screen and (max-width: 769px) {
        font-size: 14px;
    }
`
export const StatsTypesSection = styled.div`
    display: flex; 
    margin-top: 64px; 
    margin-inline: 24px;
    @media screen and (max-width: 769px) {
        justify-content: center;
        margin-top: 16px; 
        margin-bottom: 16px; 
        display: block;
        margin-inline: 32px;
    }
`
export const TypesSection = styled.div`
    height: 200px; 
    width: 70%;
    @media screen and (max-width: 769px) {
        height: 80px; 
    }
`
export const Type = styled.p`
    text-transform: capitalize; 
    display: inline-flex;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    color: #414141;
    @media screen and (max-width: 769px) {
        font-size: 14px;
    }
`
export const StatsSection = styled.div`
    height: 200px; 
    width: 30%; 
    margin-right: 24px;
    @media screen and (max-width: 769px) {
        height: 100px; 
        width: 100%;
    }
`
export const StatsTable = styled.table`
    width: 100%;
    @media screen and (max-width: 769px) {
         
    }
`
export const SectionTitle = styled.h4`
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    color: #414141;
`
export const TableData = styled.th`
    text-align: ${({ start }) => (start ? 'start' : 'end')};
`
export const Stat = styled.p`
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: #414141;
`
const spin = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`
export const LoaderContainer = styled.div`
    display:flex;
    height: 480px;
    align-items: center;
    justify-content: center;    
`
export const Pokeball = styled.img`
    height: 100px;
    width: 100px;
    animation-name: ${spin};
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`