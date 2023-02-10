import styled from "styled-components";
import { theme } from "../../Global.styles";

export const DisplayTextDiv = styled.div`
    width: 500px;
    display: flex;

`

export const JoinBackgroundPurpleCircle = styled.div`
    background-color: ${theme.purpleCircle}; 
    width: 800px; 
    height: 800px; 
    border-radius: 50%; 
    position: fixed; 
    bottom: 0%; 
    left: -17%;
    z-index: -1;
    @media screen and (max-width:1700px){
        width: 500px;
        height: 500px;
    }
    @media screen and (max-width: 700px) {                                         
        width: 150px;
        height: 150px;
    }
`

export const JoinBackgroundBlueCircle = styled.div`
    background-color: ${theme.blueCircle}; 
    width: 700px; 
    height: 700px; 
    border-radius: 50%; 
    position: fixed; 
    top: -3%; 
    left: 22%;
    z-index: -1;
    @media screen and (max-width:1700px){
        width: 400px;
        height: 400px;
    }
    @media screen and (max-width: 700px) {                                         
        width: 120px;
        height: 120px;
    }
`