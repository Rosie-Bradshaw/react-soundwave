import { Container } from '../../Global.styles';
import {Nav, Menu, MenuLink, NavLogoImg, LogoLink} from './navbar.style'; 
import logo from '../../assets/logo.png';

export default function Navbar(){
    return (
        <Nav>
            <Container>
                <MenuLink to="/">
                    <NavLogoImg src={logo} alt="soundwave-logo"></NavLogoImg>
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