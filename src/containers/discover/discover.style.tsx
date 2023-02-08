import styled from "styled-components";
import { theme } from "../../Global.styles";

export const IconDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${theme.darkBackground};
    padding: 20px; 
    width: 100px; 
    height: 100px;
    text-align: center;
    align-items: center;
    gap: 10px; 
    margin: 30px 0;
    @media screen and (max-width: 700px){
        width: 85px; 
        height: 85px;
    }
`

export const IconImage = styled.img`
    height: 35px;
    @media screen and (max-width: 700px){
    height: 25px;
    }
`
export const DiscoverImage = styled.img`
    height: 400px;
    @media screen and (max-width: 700px){
        height: 200px;
    }
`