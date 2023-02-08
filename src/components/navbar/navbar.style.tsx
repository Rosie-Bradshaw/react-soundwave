import styled from "styled-components";
import { theme } from "../../Global.styles";
import { Link } from 'react-router-dom';


export const Nav = styled.nav`
    height: 100px; 
    width: 100vw;
    display: flex;
    margin:auto;
`

// export const NavContainer = styled.div`
//     padding: 2rem;
//     min-width: 700px;
//     width: 1400px;
//     margin: auto;
//     display: flex;
//     align-items: center;
// `

export const NavLogoImg = styled.img`
    height: 80px;
    @media screen and (max-width:700px){
        height: 50px
    }
`

export const LogoLink = styled(Link)`
    font-size: 1.75rem;
    @media screen and (max-width:700px){
        font-size: 1.25rem;
    }
`

export const Menu = styled.ul`
    margin: auto 0 auto auto;
    font-size: 1.25rem;
    @media screen and (max-width:700px){
        font-size: 1rem;
    }
`

export const MenuLink = styled(Link)`
    margin: 0 20px;
    @media screen and (max-width: 700px){
        margin: 0 10px
    }
`