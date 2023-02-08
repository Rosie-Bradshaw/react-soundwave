import { Link } from 'react-router-dom';
import { Container } from '../../Global.styles';
import {Nav, Menu, MenuLink, NavLogoImg, LogoLink} from './navbar.style'; 

export default function Navbar(){
    return (
        <Nav>
            <Container>
                <MenuLink to="/">
                    <NavLogoImg src="./assets/logo.png" alt="soundwave-logo"></NavLogoImg>
                </MenuLink>
                <LogoLink to="/">Soundwave</LogoLink>
                
                <Menu>
                    <MenuLink to="/discover">Discover</MenuLink>
                    <MenuLink to="/join">Join</MenuLink>
                </Menu>
            </Container>
        </Nav>
    )
}