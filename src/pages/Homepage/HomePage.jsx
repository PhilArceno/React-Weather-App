import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import waves from '../../../uploads/wave.svg'
import getLocation from './coordinates.js'
import checkDevice from '../../hooks/device.js'

const Background = styled.div`
position:fixed;
z-index:-2;
height:100vh;
width:100vw;
top:0;
right:0;
/* background-color: #EFF3F9; */
background-image: linear-gradient(to bottom right, #99ECFF, #0AD3FF);
`

const Container = styled.div`
margin: 0 auto;
color:#343434;
position:fixed;
top:0;
left:0;
display:flex;
flex-direction:column;
justify-content:center;
align-content:center;
height:100%;
width:100%;
    /* position: absolute;
    top: 50%;
    transform: translateY(-50%); */
`

const TopBar = styled.div`
    text-align:center;
`

const Hero = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-items:center;
    gap: 10px;
    margin:0 auto;
    width:95%;

@media screen and (min-width: 1080px) {
    width: 1000px;
}

@media screen and (min-width: 1200px) {
    width: 1150px;
}
`

const LeftBox = styled.div`
    > p {
        padding-left: .1em;
    }
@media screen and (min-width: 768px) {
    > h1 {
    font-size:2.5em;
    }
}
`

const RightBox = styled.div`
text-align:end;
`

const Blob = styled.img`
@media screen and (max-width: 1080px) {
    max-width:450px;
}
`

const Button = styled.button`
margin: 2em auto 0;
padding: 1em 3em;
display:block;
border: 0;
border-radius: 5px;
background-color: #7C00FF;
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
    const thisDevice = checkDevice()

    useEffect(() => {
        thisDevice.reportWindowSize()
        getLocation()
        window.onresize = thisDevice.reportWindowSize;
    },[])

    return (
        <div style={{margin: '0 auto'}}>
        <Background/>
        <Container>
            <Hero>
                <LeftBox>
                    <h1>Weather App</h1>
                    <p>Simple front-end react app project which fetches a weather API. 
                        Designed and developed by Phil-Jonathan Arceno.</p>
                </LeftBox>
                <RightBox>
                    <Blob src={thisDevice.device.window}/>   
                </RightBox>
            </Hero>
            <Button onClick={() => {props.history.push('/weather')}}>Try it out!</Button>
        </Container>
        <Waves src={waves}/>
        </div>
    )
}

export { HomePage }