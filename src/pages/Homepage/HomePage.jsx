import React from 'react'
import styled from 'styled-components'
import mobile from '../../svg/mobile.svg'

const TopBar = styled.div`
    text-align:center;
`

const Hero = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
`

const Blob = styled.img`
max-width:450px;
`

function HomePage(props) {
    return (
        <div>
            <TopBar>
                Logo
            </TopBar>
            <Hero>
                <div>
                    <h1>Weather App</h1>
                    <p>Simple react app designed and developed by Phil-Jonathan Arceno</p>
                </div>
                <div>
                    <Blob src={mobile}/>         
                </div>
            </Hero>
        </div>
    )
}

export { HomePage }