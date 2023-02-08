import { BoldText, Container } from '../../Global.styles';
import './footer.style'; 
import { Foot, FooterLeft, FooterRight, SocialDiv, SocialImage } from './footer.style';

export default function Footer(){
    return (
        <footer>
            <Foot>
                <Container>
                    <FooterLeft>
                        <BoldText>About Us</BoldText>
                        <BoldText>Contact</BoldText>
                    </FooterLeft>
                    <FooterRight>
                        <SocialDiv>
                            <SocialImage src="./assets/Twitter.png" alt="twitter-link" />
                            <BoldText>Twitter</BoldText>
                        </SocialDiv>
                        <SocialDiv>
                            <SocialImage src="./assets/Facebook.png" alt="facebook-link" />
                            <BoldText>Facebook</BoldText>
                        </SocialDiv>
                    </FooterRight>
                </Container>
            </Foot>
        </footer>
    )
}