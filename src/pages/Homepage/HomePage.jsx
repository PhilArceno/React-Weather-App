import React from 'react'
import styled from 'styled-components'
import mobile from '../../../uploads/mobile.svg'
import waves from '../../../uploads/wave.svg'

const Background = styled.div`
position:fixed;
z-index:-2;
height:100vh;
width:100vw;
top:0;
right:0;
background-image: linear-gradient(to bottom right, #8915FF, #6B01D1)
`

const Container = styled.div`
width: 95%;
margin: 0 auto;
color:white;

@media screen and (min-width: 1080px) {
    width: 1000px;
}
`

const TopBar = styled.div`
    text-align:center;
`

const Hero = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-items:center;
    gap: 10px;
`

const LeftBox = styled.div`
`

const RightBox = styled.div`
text-align:end;
`

const Blob = styled.img`
max-width:450px;
`

const Button = styled.button`
margin: 2em auto 0;
padding: 1em 3em;
display:block;
border: 0;
border-radius: 5px;
background-color: #FF0066;
color:white;
cursor: pointer;

:focus {
    outline: none;
}
:hover {
    background-color: #8919ff;
}
:active {
    background-color:#6c00de;
}
`

const Waves = styled.img`
position:fixed;
bottom:0;
width:100%;
left: 0;
z-index:-1;
`

function HomePage(props) {
    return (
        <div>
            <Background/>
        <Container>
            <TopBar>
                Logo
            </TopBar>
            <Hero>
                <LeftBox>
                    <h1>Weather App</h1>
                    <p>Simple react app designed and developed by Phil-Jonathan Arceno</p>
                </LeftBox>
                <RightBox>
                    <Blob src={mobile}/>   
                </RightBox>
            </Hero>
            <Button>Try it out!</Button>
        </Container>
        <Waves src={waves}/>
        </div>
    )
}

export { HomePage }