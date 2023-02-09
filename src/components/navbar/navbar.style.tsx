import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Nav = styled.nav`
    height: 100px; 
    width: 100vw;
    display: flex;
    margin:auto;
    z-index: 999;
`

export const NavLogoImg = styled.img`
    height: 80px;
    @media screen and (max-width:700px){
        height: 50px
    }
    z-index: 999;
`

export const LogoLink = styled(Link)`
    font-size: 1.75rem;
    @media screen and (max-width:700px){
        font-size: 1.25rem;
    }
    z-index: 999;
`

export const Menu = styled.ul`
    margin: auto 0 auto auto;
    font-size: 1.25rem;
    @media screen and (max-width:700px){
        font-size: 1rem;
    }
    z-index: 999;
`

export const MenuLink = styled(Link)`
    margin: 0 20px;
    @media screen and (max-width: 700px){
        margin: 0 10px
    }
    z-index: 999;
`