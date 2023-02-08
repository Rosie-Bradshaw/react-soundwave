import { BoldText, Container } from '../../Global.styles';
import './footer.style'; 
import { Foot, FooterLeft, FooterRight, SocialDiv, SocialImage } from './footer.style';
import Twitter from '../../assets/Twitter.png'; 
import Facebook from '../../assets/Facebook.png';

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
                            <SocialImage src={Twitter} alt="twitter-link" />
                            <BoldText>Twitter</BoldText>
                        </SocialDiv>
                        <SocialDiv>
                            <SocialImage src={Facebook} alt="facebook-link" />
                            <BoldText>Facebook</BoldText>
                        </SocialDiv>
                    </FooterRight>
                </Container>
            </Foot>
        </footer>
    )
}