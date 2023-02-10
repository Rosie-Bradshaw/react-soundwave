import styled from "styled-components";
import { DivHalf, theme } from "../../Global.styles";

export const HeroContainer = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0; 
    padding: 10px;
    @media screen and (max-width: 700px){
    padding: 40px
    }
`

export const HeroDivHalf = styled(DivHalf)`
    @media screen and (max-width: 700px){
    display: none;
    }
`

export const HeroImage = styled.img`
    margin: auto 0 0 auto;
    height: 70vh;
    position: fixed;
    bottom: 0;
    right: 58%;
    
`

export const HeroText = styled.div`
    margin: auto auto auto 0;
    max-width: 550px;
    
`

export const HeroBackgroundPurpleCircle = styled.div`
    background-color: ${theme.purpleCircle}; 
    width: 550px; 
    height: 550px; 
    border-radius: 50%; 
    position: fixed; 
    bottom: 10%; 
    left: 1%;
    z-index: -1;
    @media screen and (max-width:1700px){
        width: 300px;
        height: 300px;
    }
    @media screen and (max-width:700px){
        width: 100px;
        height: 100px;
    }
`

export const HeroBigBackgroundBlueCircle = styled.div`
    background-color: ${theme.blueCircle}; 
    width: 1200px; 
    height: 1200px; 
    border-radius: 50%; 
    position: fixed; 
    bottom: -60%; 
    right: -20%;
    z-index: -1;
    @media screen and (max-width:1700px){
        width: 600px;
        height: 600px;
        bottom: -10%; 
        right: -10%;
    }
    @media screen and (max-width:700px){
        width: 200px;
        height: 200px;
        bottom: -10%; 
        right: -20%;
    }

`

export const HeroBackgroundBlueCircle = styled.div`
    background-color: ${theme.blueCircle}; 
    width: 550px; 
    height: 550px; 
    border-radius: 50%; 
    position: fixed; 
    top: 15%; 
    left: 27%; 
    z-index: -1;
    @media screen and (max-width:1700px){
        width: 300px;
        height: 300px;
        bottom: -10%; 
        right: -10%;
    }
    @media screen and (max-width:700px){
        width: 100px;
        height: 100px;
    }
`