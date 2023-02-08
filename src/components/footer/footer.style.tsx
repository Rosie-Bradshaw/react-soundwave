import styled from "styled-components";
import { theme } from "../../Global.styles";

export const Foot = styled.footer`
    width: 100%;
    height: 80px;
    background-color: ${theme.darkBackground};
    display: flex;
    position: fixed;
    bottom: 0;
`

export const FooterLeft = styled.ul`
    display: flex;
    gap: 50px;
    @media screen and (max-width:700px){
        gap: 10px;
        font-size: 0.75rem;
    }
`

export const FooterRight = styled.ul`
    display: flex;
    gap: 50px;
    margin-left: auto;
    @media screen and (max-width:700px){
        gap: 10px;
    }
`
export const SocialDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 5px
`
export const SocialImage = styled.img`
    height: 30px;
`

